export type CartItem = {
  productId: string
  name: string
  priceCents: number
  img: string
  category?: string
  quantity: number
}

export type AddToCartInput = {
  productId: string
  name: string
  priceCents: number
  img: string
  category?: string
  quantity?: number
}

export type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotalCents: number
  taxCents: number
  totalCents: number
  addItem: (input: AddToCartInput) => void
  removeItem: (productId: string) => void
  setQuantity: (productId: string, quantity: number) => void
  increment: (productId: string) => void
  decrement: (productId: string) => void
  clearCart: () => void
}
