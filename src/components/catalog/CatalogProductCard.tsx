import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../config/routes'
import { useAddToCart } from '../../hooks/useAddToCart'
import { formatUsd } from '../../lib/money'
import type { CatalogProduct } from '../../types/product'

type CatalogProductCardProps = {
  product: CatalogProduct
  to?: string
}

function CatalogProductCardComponent({
  product,
  to = ROUTES.product,
}: CatalogProductCardProps) {
  const { name, priceCents, img, id, category } = product
  const { addPulse, handleAddToCart } = useAddToCart({
    productId: id,
    name,
    priceCents,
    img,
    category,
  })

  return (
    <article className="group rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <Link to={to} className="block">
        <div className="mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-slate-50">
          <img
            src={img}
            className="h-4/5 w-4/5 object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
            alt={name}
            loading="lazy"
          />
        </div>
        <h3 className="text-on-surface mb-2 text-xl font-bold">{name}</h3>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-on-surface text-2xl font-black tabular-nums">
          {formatUsd(priceCents)}
        </span>
        <button
          key={addPulse}
          type="button"
          className={`bg-primary rounded-full p-3 text-white transition-transform hover:scale-110 hover:shadow-lg hover:shadow-primary/30 ${addPulse > 0 ? 'animate-add-to-cart' : ''}`}
          aria-label={`Add ${name} to cart`}
          onClick={handleAddToCart}
        >
          <span className="material-symbols-outlined" aria-hidden>
            add_shopping_cart
          </span>
        </button>
      </div>
    </article>
  )
}

export const CatalogProductCard = memo(CatalogProductCardComponent)
