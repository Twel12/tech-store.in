import { memo, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import { useCart } from '../../hooks/useCart'
import { BRAND_NAME } from '../../lib/constants'
import { cn } from '../../utils/cn'

type NavItem = { label: string; to: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'Catalog', to: ROUTES.catalog },
  { label: 'Platform', to: ROUTES.platform },
  { label: 'Solutions', to: ROUTES.solutions },
]

function NavbarComponent() {
  const { itemCount } = useCart()
  const { pathname } = useLocation()

  // Track the pathname when the drawer was opened. When the current pathname
  // differs (navigation occurred), the drawer is derivably closed — no effect needed.
  const [openedAtPath, setOpenedAtPath] = useState<string | null>(null)
  const mobileNavOpen = openedAtPath !== null && openedAtPath === pathname

  const openMenu = () => setOpenedAtPath(pathname)
  const closeMenu = () => setOpenedAtPath(null)

  // Close drawer on Escape
  useEffect(() => {
    if (!mobileNavOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileNavOpen])

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (!mobileNavOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [mobileNavOpen])

  return (
    <>
      <nav
        aria-label="Primary"
        className="fixed top-0 z-50 w-full border-b border-outline-variant/10 bg-white/70 shadow-sm backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between px-8">
          <Link
            to={ROUTES.home}
            className="text-2xl font-bold tracking-tighter text-slate-900"
          >
            {BRAND_NAME}
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    'border-b-2 border-transparent pb-0.5 font-body tracking-tight transition-all hover:scale-105',
                    isActive
                      ? 'border-blue-600 font-semibold text-blue-600'
                      : 'text-slate-500',
                  )
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to={ROUTES.cart}
              className="relative text-slate-500 transition-all hover:scale-110"
              aria-label={`Shopping cart, ${itemCount} items`}
            >
              <span className="material-symbols-outlined" aria-hidden>
                shopping_cart
              </span>
              {itemCount > 0 && (
                <span
                  className="bg-primary text-on-primary absolute -top-1 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold"
                  aria-hidden
                >
                  {itemCount > 99 ? '99+' : itemCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="text-slate-500 transition-all hover:scale-110"
              aria-label="Account"
            >
              <span className="material-symbols-outlined" aria-hidden>
                account_circle
              </span>
            </button>
            <button
              type="button"
              className="rounded-lg p-1 text-slate-700 transition-all hover:bg-slate-100 md:hidden"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={mobileNavOpen ? closeMenu : openMenu}
            >
              <span className="material-symbols-outlined" aria-hidden>
                {mobileNavOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {mobileNavOpen && (
        <>
          <div
            role="presentation"
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
            aria-hidden
          />
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed top-0 right-0 z-[70] flex h-full w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-white text-slate-900 shadow-xl md:hidden"
          >
            <div className="flex h-20 shrink-0 items-center justify-between border-b border-inherit px-6">
              <span className="text-lg font-semibold">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 hover:opacity-80"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <span className="material-symbols-outlined" aria-hidden>
                  close
                </span>
              </button>
            </div>
            <nav aria-label="Mobile primary" className="flex flex-col gap-1 p-4">
              {NAV_ITEMS.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 text-base font-medium',
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-700 hover:bg-slate-100',
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export const Navbar = memo(NavbarComponent)
