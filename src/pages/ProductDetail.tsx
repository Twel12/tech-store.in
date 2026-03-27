import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
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
    <main className="mx-auto max-w-screen-2xl px-6 pt-24 pb-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Left column */}
        <div className="space-y-10 lg:col-span-8">
          {/* Title */}
          <section>
            <p className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Next-Gen Architecture
            </p>
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Vortex
              <br />
              X-1
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              The pinnacle of visual computation. Designed for creators who demand zero
              latency and gamers who refuse to compromise.
            </p>
          </section>

          {/* Product image */}
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-border bg-muted/30 p-10 md:p-16">
            <img
              src={FEATURED_PRODUCT.img}
              className="h-auto max-h-80 w-full object-contain transition-transform duration-700 hover:scale-105"
              alt={`${FEATURED_PRODUCT.name} product image`}
              loading="eager"
            />
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {FEATURED_PRODUCT_SPECS.map((spec, idx) => (
              <Card key={`${spec.label}-${idx}`}>
                <CardContent className="pt-6">
                  <span
                    className="material-symbols-outlined mb-3 block text-3xl text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                    aria-hidden
                  >
                    {spec.icon}
                  </span>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {spec.label}
                  </p>
                  <p className="mt-1 text-2xl font-bold tabular-nums">{spec.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Right column — purchase card */}
        <div className="lg:col-span-4">
          <Card className="sticky top-24">
            <CardContent className="pt-6">
              <p className="text-3xl font-bold tabular-nums">
                {formatUsd(FEATURED_PRODUCT.priceCents)}
              </p>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground">
                Free shipping on orders over $500. Ships in 2–3 business days.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                key={addPulse}
                className={`w-full ${addPulse > 0 ? 'animate-add-to-cart' : ''}`}
                size="lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                Buy Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
