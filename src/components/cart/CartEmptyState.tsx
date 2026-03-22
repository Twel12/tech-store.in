import { Link } from 'react-router-dom'
import { ROUTES } from '../../config/routes'

export function CartEmptyState() {
  return (
    <div role="status">
      <h1 className="mb-2 text-5xl font-extrabold tracking-tight">Cart</h1>
      <p className="text-on-surface-variant mb-10 text-lg">Your cart is empty.</p>
      <Link
        to={ROUTES.catalog}
        className="text-primary inline-flex items-center gap-2 font-bold"
      >
        Browse the catalog
        <span className="material-symbols-outlined text-sm" aria-hidden>
          arrow_forward
        </span>
      </Link>
    </div>
  )
}
