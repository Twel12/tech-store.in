import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { ROUTES } from '../../config/routes'
import { useAddToCart } from '../../hooks/useAddToCart'
import { formatUsd } from '../../lib/money'
import type { CatalogProduct } from '../../types'

type CatalogProductCardProps = {
  product: CatalogProduct
  to?: string
}

function CatalogProductCardComponent({
  product,
  to = ROUTES.product,
}: CatalogProductCardProps) {
  const { name, priceCents, img, id, category } = product
  const { addPulse, handleAddToCart } = useAddToCart({
    productId: id,
    name,
    priceCents,
    img,
    category,
  })

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link to={to} className="block">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-muted/30 p-6">
          <img
            src={img}
            className="h-4/5 w-4/5 object-contain transition-transform duration-500 group-hover:scale-105"
            alt={name}
            loading="lazy"
          />
        </div>
        <CardContent className="px-5 pt-4 pb-0">
          {category && (
            <Badge variant="secondary" className="mb-2 text-xs">
              {category}
            </Badge>
          )}
          <h3 className="text-base font-semibold leading-tight">{name}</h3>
        </CardContent>
      </Link>
      <CardFooter className="flex items-center justify-between px-5 pt-3 pb-5">
        <span className="text-xl font-bold tabular-nums">{formatUsd(priceCents)}</span>
        <Button
          key={addPulse}
          size="icon"
          onClick={handleAddToCart}
          aria-label={`Add ${name} to cart`}
          className={addPulse > 0 ? 'animate-add-to-cart' : ''}
        >
          <span className="material-symbols-outlined text-[20px]" aria-hidden>
            add_shopping_cart
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}

export const CatalogProductCard = memo(CatalogProductCardComponent)
