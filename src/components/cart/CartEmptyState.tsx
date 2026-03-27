import { Link } from 'react-router-dom'
import { buttonVariants } from '@/components/ui/button'
import { ROUTES } from '../../config/routes'

export function CartEmptyState() {
  return (
    <div className="flex flex-col items-center gap-4 py-24 text-center" role="status">
      <span className="material-symbols-outlined text-5xl text-muted-foreground" aria-hidden>
        shopping_cart
      </span>
      <h2 className="text-xl font-semibold">Your cart is empty</h2>
      <p className="text-sm text-muted-foreground">
        Add some items to get started.
      </p>
      <Link to={ROUTES.catalog} className={buttonVariants({ className: 'mt-2' })}>
        Browse catalog
      </Link>
    </div>
  )
}
