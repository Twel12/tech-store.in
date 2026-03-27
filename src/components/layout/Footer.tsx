import { memo } from 'react'
import { Separator } from '@/components/ui/separator'
import { BRAND_NAME } from '../../lib/constants'

const FOOTER_LINKS = ['Support', 'Privacy', 'Warranty', 'Shipping'] as const

function FooterComponent() {
  return (
    <footer className="mt-20 w-full px-8 pb-10">
      <Separator className="mb-10" />
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-6">
        <span className="text-lg font-semibold tracking-tight">{BRAND_NAME}</span>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-8">
            {FOOTER_LINKS.map((item) => (
              <li key={item}>
                <a
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export const Footer = memo(FooterComponent)
