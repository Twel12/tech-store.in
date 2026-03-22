import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../config/routes'

export function NotFoundPage() {
  const { pathname } = useLocation()

  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-8 text-center">
      <p className="text-primary mb-4 text-8xl font-black tracking-tighter md:text-9xl">
        404
      </p>
      <h1 className="text-on-surface mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
        Oops — page not found
      </h1>
      <p className="text-on-surface-variant mb-2 text-lg">
        There's nothing at{' '}
        <code className="bg-surface-container rounded px-2 py-0.5 font-mono text-sm">
          {pathname}
        </code>
      </p>
      <p className="text-on-surface-variant mb-12 text-lg">
        It may have been moved, deleted, or never existed.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to={ROUTES.home}
          className="from-primary-container to-primary text-on-primary rounded-full bg-gradient-to-br px-8 py-3 font-bold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
        >
          Go home
        </Link>
        <Link
          to={ROUTES.catalog}
          className="bg-surface-container-high text-on-primary-fixed-variant rounded-full px-8 py-3 font-bold transition-all hover:scale-105 active:scale-95"
        >
          Browse catalog
        </Link>
      </div>
    </main>
  )
}
