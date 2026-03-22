import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from 'react'
import { cartReducer } from '../lib/cart-reducer'
import { loadCartFromStorage, saveCartToStorage } from '../lib/cart-storage'
import { SALES_TAX_RATE } from '../lib/constants'
import type { AddToCartInput } from '../types/cart'
import { CartContext } from './cart-context'

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    undefined,
    () => ({ items: loadCartFromStorage() }),
  )

  useEffect(() => {
    saveCartToStorage(state.items)
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
    const taxCents = Math.round(subtotalCents * SALES_TAX_RATE)
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
