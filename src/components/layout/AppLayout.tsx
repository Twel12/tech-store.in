import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <Navbar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  )
}
