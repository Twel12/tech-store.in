import { FEATURED_PRODUCT, FEATURED_PRODUCT_SPECS } from '../data/product-detail'
import { useAddToCart } from '../hooks/useAddToCart'
import { formatUsd } from '../lib/money'

export function ProductDetail() {
  const { addPulse, handleAddToCart } = useAddToCart({
    productId: FEATURED_PRODUCT.productId,
    name: FEATURED_PRODUCT.name,
    priceCents: FEATURED_PRODUCT.priceCents,
    img: FEATURED_PRODUCT.img,
    category: FEATURED_PRODUCT.category,
  })

  return (
    <main className="mx-auto max-w-screen-2xl px-6 pt-32 pb-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-16 lg:col-span-8">
          <section>
            <span className="text-primary mb-4 block text-xs font-bold tracking-widest uppercase">
              Next-Gen Architecture
            </span>
            <h1 className="text-on-surface mb-8 text-6xl leading-[0.9] font-black tracking-tighter md:text-8xl">
              Vortex <br />
              X-1
            </h1>
            <p className="text-on-surface-variant max-w-xl text-xl leading-relaxed">
              The pinnacle of visual computation. Designed for creators who
              demand zero latency and gamers who refuse to compromise.
            </p>
          </section>

          <section className="relative">
            <div className="bg-primary-container/20 absolute top-1/2 left-1/2 -z-10 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
            <div className="bg-surface-container-lowest flex items-center justify-center overflow-hidden rounded-xl p-8 md:p-16">
              <img
                src={FEATURED_PRODUCT.img}
                className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
                alt={`${FEATURED_PRODUCT.name} product image`}
                loading="eager"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FEATURED_PRODUCT_SPECS.map((spec, idx) => (
              <div
                key={`${spec.label}-${idx}`}
                className="bg-surface-container-low space-y-4 rounded-xl p-10"
              >
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                  aria-hidden
                >
                  {spec.icon}
                </span>
                <h3 className="text-on-surface-variant text-sm font-bold tracking-widest uppercase">
                  {spec.label}
                </h3>
                <p className="text-on-surface text-4xl font-black tracking-tighter">
                  {spec.value}
                </p>
              </div>
            ))}
          </section>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-surface-container-high sticky top-32 space-y-4 rounded-xl p-8">
            <span className="text-primary-container text-5xl font-black tracking-tighter">
              {formatUsd(FEATURED_PRODUCT.priceCents)}
            </span>
            <div className="space-y-4">
              <button
                key={addPulse}
                type="button"
                className={`from-primary-container to-primary w-full rounded-full bg-gradient-to-br py-5 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-95 ${addPulse > 0 ? 'animate-add-to-cart' : ''}`}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="text-on-primary-fixed-variant w-full rounded-full bg-white py-5 text-lg font-bold transition-all hover:bg-surface-container-lowest"
              >
                Buy with Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
