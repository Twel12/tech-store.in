import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { formatUsd } from '../lib/money'

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
      <main className="mx-auto min-h-screen max-w-screen-2xl px-8 pt-32 pb-20">
        <h1 className="mb-2 text-5xl font-extrabold tracking-tight">Cart</h1>
        <p className="text-on-surface-variant mb-10 text-lg">
          Your cart is empty.
        </p>
        <Link
          to="/catalog"
          className="text-primary inline-flex items-center gap-2 font-bold"
        >
          Browse the catalog
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </Link>
      </main>
    )
  }

  return (
    <main className="mx-auto min-h-screen max-w-screen-2xl px-8 pt-32 pb-20">
      <div className="mb-12">
        <h1 className="mb-2 text-5xl font-extrabold tracking-tight">Cart</h1>
        <p className="text-on-surface-variant text-lg">
          You have {itemCount} {itemCount === 1 ? 'item' : 'items'} in your
          editorial selection.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          {items.map((item) => (
            <div
              key={item.productId}
              className="bg-surface-container-lowest flex items-center gap-8 rounded-xl p-8 transition-transform hover:translate-x-1"
            >
              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50">
                <img
                  src={item.img}
                  className="h-full w-full object-cover"
                  alt=""
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
                  <p className="text-xl font-bold">
                    {formatUsd(item.priceCents * item.quantity)}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-6">
                  <div className="flex items-center gap-4 rounded-full bg-slate-100 px-4 py-2">
                    <button
                      type="button"
                      onClick={() => decrement(item.productId)}
                      aria-label="Decrease quantity"
                    >
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => increment(item.productId)}
                      aria-label="Increase quantity"
                    >
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-error flex items-center gap-2 font-medium"
                    onClick={() => removeItem(item.productId)}
                  >
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4">
          <div className="bg-surface-container-high sticky top-32 rounded-xl p-10">
            <h2 className="mb-8 text-3xl font-bold">Summary</h2>
            <div className="mb-8 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">{formatUsd(subtotalCents)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span className="font-bold">{formatUsd(taxCents)}</span>
              </div>
              <div className="bg-outline-variant/20 my-4 h-px" />
              <div className="flex justify-between text-2xl font-black">
                <span>Total</span>
                <span>{formatUsd(totalCents)}</span>
              </div>
            </div>
            <button
              type="button"
              className="bg-primary w-full rounded-full py-5 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
              onClick={() => {
                // clearCart() //TODO: lets not clear it for now will be implemented
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
