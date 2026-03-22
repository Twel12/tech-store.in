import { memo } from 'react'
import { BRAND_NAME } from '../../lib/constants'

const FOOTER_LINKS = ['Support', 'Privacy', 'Warranty', 'Shipping'] as const

function FooterComponent() {
  return (
    <footer className="mt-20 flex w-full flex-col items-center border-t border-slate-200/10 bg-slate-50 px-8 py-12">
      <div className="mb-8 text-xl font-black tracking-tighter text-slate-900">
        {BRAND_NAME}
      </div>
      <ul className="mb-10 flex flex-wrap justify-center gap-8">
        {FOOTER_LINKS.map((item) => (
          <li key={item}>
            <a
              className="text-xs font-normal tracking-widest text-slate-400 uppercase transition-colors hover:text-primary"
              href="#"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center text-xs font-normal uppercase tracking-widest text-slate-400">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </p>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
