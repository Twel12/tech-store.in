import { useEffect, useState } from 'react'
import { CATALOG_PRODUCTS } from '../data/catalog'
import type { CatalogProduct } from '../types'

type Result =
  | { status: 'success'; products: CatalogProduct[] }
  | { status: 'error'; message: string }

type InternalState = {
  handle: string | undefined
  result: Result
}

type ExternalState =
  | { status: 'loading' }
  | { status: 'success'; products: CatalogProduct[] }
  | { status: 'error'; message: string }

function staticFallback(collectionHandle?: string): CatalogProduct[] {
  return collectionHandle
    ? CATALOG_PRODUCTS.filter(
        (p) => p.category?.toLowerCase() === collectionHandle.toLowerCase(),
      )
    : CATALOG_PRODUCTS
}

const SENTINEL = Symbol('uninitialised')

export function useCatalogProducts(collectionHandle?: string): ExternalState {
  const [internalState, setInternalState] = useState<InternalState | typeof SENTINEL>(SENTINEL)

  useEffect(() => {
    const controller = new AbortController()
    const apiUrl = import.meta.env.VITE_API_URL as string | undefined

    if (!apiUrl) {
      Promise.resolve(staticFallback(collectionHandle)).then((products) => {
        setInternalState({ handle: collectionHandle, result: { status: 'success', products } })
      })
      return
    }

    const url = collectionHandle
      ? `${apiUrl}/api/products?collection=${encodeURIComponent(collectionHandle)}`
      : `${apiUrl}/api/products`

    fetch(url, { signal: controller.signal })
      .then((r) => {
        if (!r.ok) throw new Error(`${r.status}`)
        return r.json() as Promise<CatalogProduct[]>
      })
      .then((products) => {
        setInternalState({
          handle: collectionHandle,
          result: { status: 'success', products },
        })
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === 'AbortError') return
        setInternalState({
          handle: collectionHandle,
          result: { status: 'success', products: staticFallback(collectionHandle) },
        })
      })

    return () => controller.abort()
  }, [collectionHandle])

  // Show loading when there is no settled state for the current handle
  if (
    internalState === SENTINEL ||
    internalState.handle !== collectionHandle
  ) {
    return { status: 'loading' }
  }

  return internalState.result
}
