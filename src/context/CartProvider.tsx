import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import { CartContext } from './cartContext'
import type { AddToCartInput, CartItem } from './cartTypes'

const STORAGE_KEY = 'tech-store-in-cart'

type CartState = { items: CartItem[] }

type CartAction =
  | { type: 'ADD'; payload: AddToCartInput }
  | { type: 'REMOVE'; productId: string }
  | { type: 'SET_QTY'; productId: string; quantity: number }
  | { type: 'INCREMENT'; productId: string }
  | { type: 'DECREMENT'; productId: string }
  | { type: 'CLEAR' }

function cartReducer(state: CartState, action: CartAction): CartState {
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

function loadStoredItems(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (row): row is CartItem =>
        row &&
        typeof row === 'object' &&
        typeof (row as CartItem).productId === 'string' &&
        typeof (row as CartItem).quantity === 'number' &&
        (row as CartItem).quantity > 0,
    )
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    undefined,
    () => ({ items: loadStoredItems() }),
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items))
  }, [state.items])

  const addItem = useCallback((input: AddToCartInput) => {
    dispatch({ type: 'ADD', payload: input })
  }, [])

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE', productId })
  }, [])

  const setQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: 'SET_QTY', productId, quantity })
  }, [])

  const increment = useCallback((productId: string) => {
    dispatch({ type: 'INCREMENT', productId })
  }, [])

  const decrement = useCallback((productId: string) => {
    dispatch({ type: 'DECREMENT', productId })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const value = useMemo(() => {
    const itemCount = state.items.reduce((s, i) => s + i.quantity, 0)
    const subtotalCents = state.items.reduce(
      (s, i) => s + i.priceCents * i.quantity,
      0,
    )
    const taxCents = Math.round(subtotalCents * 0.08)
    const totalCents = subtotalCents + taxCents

    return {
      items: state.items,
      itemCount,
      subtotalCents,
      taxCents,
      totalCents,
      addItem,
      removeItem,
      setQuantity,
      increment,
      decrement,
      clearCart,
    }
  }, [
    state.items,
    addItem,
    removeItem,
    setQuantity,
    increment,
    decrement,
    clearCart,
  ])

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
