import {
  CartEmptyState,
  CartLineItem,
  CartSummary,
} from '../components/cart'
import { Page } from '../components/layout'
import { useCart } from '../hooks/useCart'

export function CartPage() {
  const {
    items,
    itemCount,
    subtotalCents,
    taxCents,
    totalCents,
    increment,
    decrement,
    removeItem,
    clearCart,
  } = useCart()

  async function handleCheckout() {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/checkout`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items.map(({ productId, quantity }) => ({ productId, quantity })),
      }),
    })

    if (!res.ok) {
      const { error } = (await res.json()) as { error?: string }
      throw new Error(error ?? `Checkout failed (${res.status})`)
    }

    const { checkoutUrl } = (await res.json()) as { checkoutUrl: string }
    clearCart()
    window.location.href = checkoutUrl
  }

  if (items.length === 0) {
    return (
      <Page className="pt-24">
        <CartEmptyState />
      </Page>
    )
  }

  return (
    <Page className="pt-24">
      <header className="mb-8">
        <h1 id="cart-title" className="text-3xl font-bold tracking-tight">
          Cart
        </h1>
        <p className="mt-1 text-sm text-muted-foreground" aria-live="polite">
          {itemCount} {itemCount === 1 ? 'item' : 'items'}
        </p>
      </header>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <section className="lg:col-span-8" aria-labelledby="cart-title">
          {items.map((item) => (
            <CartLineItem
              key={item.productId}
              item={item}
              onIncrement={increment}
              onDecrement={decrement}
              onRemove={removeItem}
            />
          ))}
        </section>
        <aside className="lg:col-span-4">
          <CartSummary
            subtotalCents={subtotalCents}
            taxCents={taxCents}
            totalCents={totalCents}
            onCheckout={handleCheckout}
          />
        </aside>
      </div>
    </Page>
  )
}
