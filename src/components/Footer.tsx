import { useLocation } from 'react-router-dom'

export function Footer() {
  const location = useLocation()
  const isDark =
    location.pathname === '/platform' || location.pathname === '/solutions'

  return (
    <footer
      className={`mt-20 flex w-full flex-col items-center border-t px-8 py-12 ${isDark ? 'border-slate-900 bg-slate-950' : 'border-slate-200/10 bg-slate-50'}`}
    >
      <div
        className={`mb-8 text-xl font-black tracking-tighter ${isDark ? 'text-slate-400' : 'text-slate-900'}`}
      >
        AetherTech
      </div>
      <div className="mb-10 flex flex-wrap justify-center gap-8">
        {['Support', 'Privacy', 'Warranty', 'Shipping'].map((item) => (
          <a
            key={item}
            className="text-xs font-normal tracking-widest text-slate-400 uppercase transition-colors hover:text-primary"
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
      <p className="text-center text-xs font-normal uppercase tracking-widest text-slate-400">
        © 2024 AetherTech Editorial Gallery. All rights reserved.
      </p>
    </footer>
  )
}
