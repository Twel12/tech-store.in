import { Link, useLocation } from 'react-router-dom'

export function TopNavBar() {
  const location = useLocation()
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
            className={`${isDark ? 'text-slate-400' : 'text-slate-500'} hover:scale-110 transition-all`}
          >
            <span className="material-symbols-outlined">shopping_cart</span>
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
