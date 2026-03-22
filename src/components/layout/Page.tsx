import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

type PageProps = {
  children: ReactNode
  className?: string
}

const base = 'mx-auto max-w-screen-2xl px-8 pb-20'

export function Page({ children, className }: PageProps) {
  return <main className={cn(base, className)}>{children}</main>
}
