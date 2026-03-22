import { useCallback, useState } from 'react'
import type { AddToCartInput } from '../types'
import { useCart } from './useCart'

type UseAddToCartReturn = {
  /** Increments on each add; use as `key` on the button to re-trigger CSS animation */
  addPulse: number
  handleAddToCart: () => void
}

/**
 * Encapsulates add-to-cart dispatch and the animation pulse counter.
 * Accepts individual fields so the dependency array is explicit and stable.
 */
export function useAddToCart({
  productId,
  name,
  priceCents,
  img,
  category,
}: AddToCartInput): UseAddToCartReturn {
  const { addItem } = useCart()
  const [addPulse, setAddPulse] = useState(0)

  const handleAddToCart = useCallback(() => {
    setAddPulse((n) => n + 1)
    addItem({ productId, name, priceCents, img, category })
  }, [addItem, productId, name, priceCents, img, category])

  return { addPulse, handleAddToCart }
}
