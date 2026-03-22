import { CART_STORAGE_KEY } from './constants'
import type { CartItem } from '../types'

function isCartItemRow(row: unknown): row is CartItem {
  if (!row || typeof row !== 'object') return false
  const r = row as Record<string, unknown>
  if (
    typeof r.productId !== 'string' ||
    typeof r.name !== 'string' ||
    typeof r.priceCents !== 'number' ||
    !Number.isFinite(r.priceCents) ||
    r.priceCents < 0 ||
    typeof r.img !== 'string' ||
    typeof r.quantity !== 'number' ||
    !Number.isFinite(r.quantity) ||
    r.quantity <= 0 ||
    !Number.isInteger(r.quantity)
  ) {
    return false
  }
  if (r.category !== undefined && typeof r.category !== 'string') {
    return false
  }
  return true
}

export function loadCartFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isCartItemRow)
  } catch {
    return []
  }
}

export function saveCartToStorage(items: CartItem[]): void {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    // Private mode, quota, or storage disabled
  }
}
