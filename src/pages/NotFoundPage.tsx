import { Link, useLocation } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { ROUTES } from '../config/routes'
import { cn } from '../utils/cn'

export function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-8xl font-bold tabular-nums tracking-tighter text-muted-foreground/30 md:text-9xl">
        404
      </p>
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="mb-1 text-sm text-muted-foreground">
        There&apos;s nothing at{' '}
        <code className="rounded bg-muted px-1.5 py-0.5 font-mono">{pathname}</code>
      </p>
      <p className="mb-8 text-sm text-muted-foreground">
        It may have been moved, deleted, or never existed.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to={ROUTES.home} className={buttonVariants()}>
          Go home
        </Link>
        <Link to={ROUTES.catalog} className={cn(buttonVariants({ variant: 'outline' }))}>
          Browse catalog
        </Link>
      </div>
    </main>
  )
}
