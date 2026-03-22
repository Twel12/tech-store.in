import { memo } from 'react'
import { formatUsd } from '../../lib/money'
import type { CartItem } from '../../types/cart'

export type CartLineItemProps = {
  item: CartItem
  onIncrement: (productId: string) => void
  onDecrement: (productId: string) => void
  onRemove: (productId: string) => void
}

function CartLineItemComponent({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: CartLineItemProps) {
  const lineTotal = item.priceCents * item.quantity

  return (
    <article className="bg-surface-container-lowest flex items-center gap-8 rounded-xl p-8 transition-transform hover:translate-x-1">
      <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50">
        <img
          src={item.img}
          className="h-full w-full object-cover"
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-grow">
        {item.category ? (
          <span className="text-primary mb-1 block text-xs font-bold uppercase">
            {item.category}
          </span>
        ) : null}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold">{item.name}</h3>
          <p className="text-xl font-bold tabular-nums">{formatUsd(lineTotal)}</p>
        </div>
        <div className="mt-4 flex items-center gap-6">
          <div
            className="flex items-center gap-4 rounded-full bg-slate-100 px-4 py-2"
            role="group"
            aria-label={`Quantity for ${item.name}`}
          >
            <button
              type="button"
              onClick={() => onDecrement(item.productId)}
              aria-label={`Decrease quantity of ${item.name}`}
            >
              <span className="material-symbols-outlined text-sm" aria-hidden>
                remove
              </span>
            </button>
            <span className="font-bold tabular-nums" aria-live="polite">
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => onIncrement(item.productId)}
              aria-label={`Increase quantity of ${item.name}`}
            >
              <span className="material-symbols-outlined text-sm" aria-hidden>
                add
              </span>
            </button>
          </div>
          <button
            type="button"
            className="text-error flex items-center gap-2 font-medium"
            onClick={() => onRemove(item.productId)}
            aria-label={`Remove ${item.name} from cart`}
          >
            <span className="material-symbols-outlined text-lg" aria-hidden>
              delete
            </span>
            Remove
          </button>
        </div>
      </div>
    </article>
  )
}

export const CartLineItem = memo(CartLineItemComponent)
