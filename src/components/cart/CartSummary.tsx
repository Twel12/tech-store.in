import { memo, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { SALES_TAX_RATE } from '../../lib/constants'
import { formatUsd } from '../../lib/money'

type CartSummaryProps = {
  subtotalCents: number
  taxCents: number
  totalCents: number
  onCheckout: () => Promise<void>
}

const taxPercentLabel = `${Math.round(SALES_TAX_RATE * 100)}%`

function CartSummaryComponent({
  subtotalCents,
  taxCents,
  totalCents,
  onCheckout,
}: CartSummaryProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      await onCheckout()
    } catch {
      setError('Checkout failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="tabular-nums">{formatUsd(subtotalCents)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax ({taxPercentLabel})</span>
          <span className="tabular-nums">{formatUsd(taxCents)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="tabular-nums">{formatUsd(totalCents)}</span>
        </div>
        {error && (
          <p className="text-sm text-destructive" role="alert">
            {error}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          size="lg"
          disabled={loading}
          onClick={handleCheckout}
        >
          {loading ? (
            <>
              <span
                className="material-symbols-outlined mr-2 animate-spin text-[18px]"
                aria-hidden
              >
                progress_activity
              </span>
              Processing…
            </>
          ) : (
            'Checkout'
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export const CartSummary = memo(CartSummaryComponent)
