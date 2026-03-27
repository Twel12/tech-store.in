import { memo } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatUsd } from '../../lib/money'
import type { CartItem } from '../../types'

type CartLineItemProps = {
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
    <>
      <article className="flex gap-4 py-4 sm:gap-6">
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-border bg-muted/30 sm:h-24 sm:w-24">
          <img
            src={item.img}
            className="h-full w-full object-contain p-2"
            alt={item.name}
            loading="lazy"
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              {item.category && (
                <p className="mb-0.5 text-xs text-muted-foreground">{item.category}</p>
              )}
              <h3 className="truncate text-sm font-medium">{item.name}</h3>
            </div>
            <p className="shrink-0 text-sm font-semibold tabular-nums">
              {formatUsd(lineTotal)}
            </p>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <div
              className="flex items-center gap-2"
              role="group"
              aria-label={`Quantity for ${item.name}`}
            >
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => onDecrement(item.productId)}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden>
                  remove
                </span>
              </Button>
              <span
                className="w-6 text-center text-sm font-medium tabular-nums"
                aria-live="polite"
              >
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7"
                onClick={() => onIncrement(item.productId)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                <span className="material-symbols-outlined text-[16px]" aria-hidden>
                  add
                </span>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs text-muted-foreground hover:text-destructive"
              onClick={() => onRemove(item.productId)}
              aria-label={`Remove ${item.name} from cart`}
            >
              <span className="material-symbols-outlined mr-1 text-[14px]" aria-hidden>
                delete
              </span>
              Remove
            </Button>
          </div>
        </div>
      </article>
      <Separator />
    </>
  )
}

export const CartLineItem = memo(CartLineItemComponent)
