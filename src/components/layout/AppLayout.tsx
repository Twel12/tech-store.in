import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-surface text-on-surface font-body flex min-h-screen flex-col antialiased">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}
