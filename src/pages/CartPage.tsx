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

  if (items.length === 0) {
    return (
      <Page className="min-h-screen pt-32">
        <CartEmptyState />
      </Page>
    )
  }

  return (
    <Page className="min-h-screen pt-32">
      <header className="mb-12">
        <h1
          id="cart-title"
          className="mb-2 text-5xl font-extrabold tracking-tight"
        >
          Cart
        </h1>
        <p className="text-on-surface-variant text-lg" aria-live="polite">
          You have {itemCount} {itemCount === 1 ? 'item' : 'items'} in your
          cart.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <section
          className="space-y-6 lg:col-span-8"
          aria-labelledby="cart-title"
        >
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
            onCheckout={clearCart}
          />
        </aside>
      </div>
    </Page>
  )
}
