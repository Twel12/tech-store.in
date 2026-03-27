import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/layout'
import { ROUTES } from './config/routes'

const HomePage = lazy(() =>
  import('./pages/HomePage').then((m) => ({ default: m.HomePage })),
)
const ProductDetail = lazy(() =>
  import('./pages/ProductDetail').then((m) => ({ default: m.ProductDetail })),
)
const CatalogPage = lazy(() =>
  import('./pages/CatalogPage').then((m) => ({ default: m.CatalogPage })),
)
const CartPage = lazy(() =>
  import('./pages/CartPage').then((m) => ({ default: m.CartPage })),
)
const PlatformPage = lazy(() =>
  import('./pages/PlatformPage').then((m) => ({ default: m.PlatformPage })),
)
const SolutionsPage = lazy(() =>
  import('./pages/SolutionsPage').then((m) => ({ default: m.SolutionsPage })),
)
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

const LoginPage = lazy(() =>
  import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })),
)

function RouteFallback() {
  return (
    <div
      className="text-on-surface-variant flex min-h-[50vh] items-center justify-center text-sm"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <AppLayout>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.product} element={<ProductDetail />} />
          <Route path={ROUTES.catalog} element={<CatalogPage />} />
          <Route path={ROUTES.cart} element={<CartPage />} />
          <Route path={ROUTES.platform} element={<PlatformPage />} />
          <Route path={ROUTES.solutions} element={<SolutionsPage />} />
          <Route path={ROUTES.login} element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </AppLayout>
  )
}
