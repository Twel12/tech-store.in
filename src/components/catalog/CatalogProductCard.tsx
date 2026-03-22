import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import { formatUsd } from '../../lib/money'
import type { CatalogProduct } from './types'

export function CatalogProductCard({
  product,
  to = '/product',
}: {
  product: CatalogProduct
  to?: string
}) {
  const { name, priceCents, img, id, category } = product
  const { addItem } = useCart()
  const [addPulse, setAddPulse] = useState(0)

  return (
    <article className="group bg-surface-container-lowest hover:-translate-y-2 rounded-xl p-8 shadow-sm transition-all duration-500 hover:shadow-xl">
      <Link to={to} className="block">
        <div className="mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-slate-50">
          <img
            src={img}
            className="h-4/5 w-4/5 object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
            alt=""
          />
        </div>
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
      </Link>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-black">{formatUsd(priceCents)}</span>
        <button
          key={addPulse}
          type="button"
          className={`bg-primary hover:scale-110 rounded-full p-3 text-white transition-transform hover:shadow-lg hover:shadow-primary/30 ${addPulse > 0 ? 'animate-add-to-cart' : ''}`}
          aria-label={`Add ${name} to cart`}
          onClick={() => {
            setAddPulse((n) => n + 1)
            addItem({
              productId: id,
              name,
              priceCents,
              img,
              category,
            })
          }}
        >
          <span className="material-symbols-outlined">add_shopping_cart</span>
        </button>
      </div>
    </article>
  )
}
