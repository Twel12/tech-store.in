import type { AddToCartInput, CartItem } from '../types'

export type CartState = { items: CartItem[] }

export type CartAction =
  | { type: 'ADD'; payload: AddToCartInput }
  | { type: 'REMOVE'; productId: string }
  | { type: 'SET_QTY'; productId: string; quantity: number }
  | { type: 'INCREMENT'; productId: string }
  | { type: 'DECREMENT'; productId: string }
  | { type: 'CLEAR' }

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const qty = action.payload.quantity ?? 1
      const idx = state.items.findIndex(
        (i) => i.productId === action.payload.productId,
      )
      if (idx >= 0) {
        const next = [...state.items]
        next[idx] = {
          ...next[idx],
          quantity: next[idx].quantity + qty,
        }
        return { items: next }
      }
      const {
        productId,
        name,
        priceCents,
        img,
        category,
      } = action.payload
      return {
        items: [
          ...state.items,
          {
            productId,
            name,
            priceCents,
            img,
            category,
            quantity: qty,
          },
        ],
      }
    }
    case 'REMOVE':
      return {
        items: state.items.filter((i) => i.productId !== action.productId),
      }
    case 'SET_QTY': {
      const q = Math.max(0, Math.floor(action.quantity))
      if (q === 0) {
        return {
          items: state.items.filter((i) => i.productId !== action.productId),
        }
      }
      return {
        items: state.items.map((i) =>
          i.productId === action.productId ? { ...i, quantity: q } : i,
        ),
      }
    }
    case 'INCREMENT':
      return {
        items: state.items.map((i) =>
          i.productId === action.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        ),
      }
    case 'DECREMENT': {
      const next = state.items
        .map((i) =>
          i.productId === action.productId
            ? { ...i, quantity: i.quantity - 1 }
            : i,
        )
        .filter((i) => i.quantity > 0)
      return { items: next }
    }
    case 'CLEAR':
      return { items: [] }
    default:
      return state
  }
}
