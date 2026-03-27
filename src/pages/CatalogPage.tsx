import { useState } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { CatalogProductCard } from '../components/catalog/CatalogProductCard'
import { useCatalogProducts } from '../hooks/useCatalogProducts'
import { useCollections } from '../hooks/useCollections'
import { cn } from '../utils/cn'

export function CatalogPage() {
  const [selectedHandle, setSelectedHandle] = useState<string | undefined>()

  const collectionsState = useCollections()
  const productsState = useCatalogProducts(selectedHandle)

  const activeTitle =
    collectionsState.status === 'success' && selectedHandle
      ? (collectionsState.collections.find((c) => c.handle === selectedHandle)?.title ??
        'Technical Registry')
      : 'Technical Registry'

  return (
    <main className="mx-auto flex min-h-screen max-w-screen-2xl gap-10 px-6 pt-20 pb-20">
      {/* Sidebar */}
      <aside className="sticky top-20 hidden h-fit w-56 shrink-0 lg:block">
        <h2 className="mb-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Categories
        </h2>
        <nav className="flex flex-col gap-0.5">
          <button
            type="button"
            onClick={() => setSelectedHandle(undefined)}
            className={cn(
              'rounded-md px-3 py-2 text-sm font-medium text-left transition-colors',
              selectedHandle === undefined
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
            )}
          >
            All Products
          </button>

          {collectionsState.status === 'loading' &&
            Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="my-0.5 h-8 w-full rounded-md" />
            ))}

          {collectionsState.status === 'error' && (
            <p className="px-3 py-2 text-xs text-destructive">
              {collectionsState.message}
            </p>
          )}

          {collectionsState.status === 'success' &&
            collectionsState.collections.map((col) => (
              <button
                key={col.id}
                type="button"
                onClick={() => setSelectedHandle(col.handle)}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium text-left transition-colors',
                  selectedHandle === col.handle
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                )}
              >
                {col.title}
              </button>
            ))}
        </nav>
      </aside>

      {/* Products */}
      <section className="flex-1 min-w-0">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">{activeTitle}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Exploring architectural precision in computational hardware.
          </p>
        </header>

        {productsState.status === 'loading' && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg border border-border">
                <Skeleton className="aspect-square w-full" />
                <div className="space-y-2 p-4">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="mt-3 h-8 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {productsState.status === 'error' && (
          <div className="flex flex-col items-center gap-3 py-24 text-center">
            <span
              className="material-symbols-outlined text-4xl text-muted-foreground"
              aria-hidden
            >
              cloud_off
            </span>
            <p className="text-sm text-muted-foreground">{productsState.message}</p>
            <p className="text-xs text-muted-foreground">
              Backend:{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                {import.meta.env.VITE_API_URL}
              </code>
            </p>
          </div>
        )}

        {productsState.status === 'success' && productsState.products.length === 0 && (
          <div className="flex flex-col items-center gap-3 py-24 text-center">
            <span
              className="material-symbols-outlined text-4xl text-muted-foreground"
              aria-hidden
            >
              inventory_2
            </span>
            <p className="text-sm text-muted-foreground">
              No products in this category yet.
            </p>
          </div>
        )}

        {productsState.status === 'success' && productsState.products.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {productsState.products.map((product) => (
              <CatalogProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
