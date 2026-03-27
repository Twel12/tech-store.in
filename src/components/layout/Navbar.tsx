import { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { ROUTES } from '../../config/routes'
import { useCart } from '../../hooks/useCart'
import { useTheme } from '../../hooks/useTheme'
import { BRAND_NAME } from '../../lib/constants'
import { cn } from '../../utils/cn'
import { SearchDialog } from './SearchDialog'

type NavItem = { label: string; to: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'Catalog', to: ROUTES.catalog },
  { label: 'Platform', to: ROUTES.platform },
  { label: 'Solutions', to: ROUTES.solutions },
]

function NavbarComponent() {
  const { itemCount } = useCart()
  const { isDark, toggleTheme } = useTheme()

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-6">
        {/* Brand */}
        <Link
          to={ROUTES.home}
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-foreground/80"
        >
          {BRAND_NAME}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <SearchDialog />

          {/* Cart — plain link styled as ghost icon button */}
          <Link
            to={ROUTES.cart}
            aria-label={`Shopping cart, ${itemCount} items`}
            className="relative inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden>
              shopping_cart
            </span>
            {itemCount > 0 && (
              <Badge
                className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full p-0 text-[10px]"
                aria-hidden
              >
                {itemCount > 99 ? '99+' : itemCount}
              </Badge>
            )}
          </Link>

          {/* Login status */}
          <Link
            to={ROUTES.login}
            aria-label="Sign in"
            title="Sign in"
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden>
              account_circle
            </span>
          </Link>

          {/* Dark mode toggle */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={toggleTheme}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden>
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </Button>

          {/* Mobile hamburger via Sheet */}
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open navigation menu"
                />
              }
            >
              <span className="material-symbols-outlined text-[22px]" aria-hidden>
                menu
              </span>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="text-left">{BRAND_NAME}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile primary" className="mt-6 flex flex-col gap-1">
                {NAV_ITEMS.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={({ isActive }) =>
                      cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-accent text-accent-foreground'
                          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                      )
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export const Navbar = memo(NavbarComponent)
