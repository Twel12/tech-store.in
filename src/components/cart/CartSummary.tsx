import { memo } from 'react'
import { SALES_TAX_RATE } from '../../lib/constants'
import { formatUsd } from '../../lib/money'

export type CartSummaryProps = {
  subtotalCents: number
  taxCents: number
  totalCents: number
  onCheckout: () => void
}

const taxPercentLabel = `${Math.round(SALES_TAX_RATE * 100)}%`

function CartSummaryComponent({
  subtotalCents,
  taxCents,
  totalCents,
  onCheckout,
}: CartSummaryProps) {
  return (
    <div className="bg-surface-container-high sticky top-32 rounded-xl p-10">
      <h2 className="mb-8 text-3xl font-bold" id="cart-summary-heading">
        Summary
      </h2>
      <div className="mb-8 space-y-4" aria-labelledby="cart-summary-heading">
        <div className="flex justify-between gap-4">
          <span>Subtotal</span>
          <span className="font-bold tabular-nums">{formatUsd(subtotalCents)}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span>Tax ({taxPercentLabel})</span>
          <span className="font-bold tabular-nums">{formatUsd(taxCents)}</span>
        </div>
        <div className="bg-outline-variant/20 my-4 h-px" />
        <div className="flex justify-between gap-4 text-2xl font-black">
          <span>Total</span>
          <span className="tabular-nums">{formatUsd(totalCents)}</span>
        </div>
      </div>
      <button
        type="button"
        className="bg-primary w-full rounded-full py-5 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
        onClick={onCheckout}
      >
        Checkout
      </button>
    </div>
  )
}

export const CartSummary = memo(CartSummaryComponent)
