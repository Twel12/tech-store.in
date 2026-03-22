import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/useCart'

export function TopNavBar() {
  const location = useLocation()
  const { itemCount } = useCart()
  const isDark =
    location.pathname === '/platform' || location.pathname === '/solutions'

  return (
    <nav
      className={`fixed top-0 z-50 w-full ${isDark ? 'bg-slate-900/60' : 'bg-white/70'} border-outline-variant/10 border-b shadow-sm backdrop-blur-xl transition-colors duration-300`}
    >
      <div className="mx-auto flex h-20 w-full max-w-screen-2xl items-center justify-between px-8">
        <Link
          to="/"
          className={`text-2xl font-bold tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          AetherTech
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          <Link
            className={`${location.pathname === '/catalog' ? 'border-b-2 border-blue-600 font-semibold text-blue-600' : isDark ? 'text-slate-400' : 'text-slate-500'} font-body hover:scale-105 tracking-tight transition-all`}
            to="/catalog"
          >
            Catalog
          </Link>
          <Link
            className={`${location.pathname === '/platform' ? 'border-b-2 border-blue-600 font-semibold text-blue-600' : isDark ? 'text-slate-400' : 'text-slate-500'} font-body hover:scale-105 tracking-tight transition-all`}
            to="/platform"
          >
            Platform
          </Link>
          <Link
            className={`${location.pathname === '/solutions' ? 'border-b-2 border-blue-600 font-semibold text-blue-600' : isDark ? 'text-slate-400' : 'text-slate-500'} font-body hover:scale-105 tracking-tight transition-all`}
            to="/solutions"
          >
            Solutions
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            to="/cart"
            className={`relative ${isDark ? 'text-slate-400' : 'text-slate-500'} hover:scale-110 transition-all`}
            aria-label={`Shopping cart, ${itemCount} items`}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            {itemCount > 0 ? (
              <span className="bg-primary text-on-primary absolute -top-1 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:scale-110 transition-all`}
          >
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
