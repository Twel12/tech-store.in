import { CatalogProductCard } from '../components/catalog/CatalogProductCard'
import { CATALOG_FILTER_CATEGORIES, CATALOG_PRODUCTS } from '../data/catalog'

export function CatalogPage() {
  return (
    <main className="bg-background text-on-surface mx-auto flex min-h-screen max-w-screen-2xl gap-12 px-8 pt-24 pb-20">
      <aside className="sticky top-24 hidden h-fit w-72 flex-col gap-4 rounded-r-[3rem] bg-slate-50 p-6 lg:flex dark:bg-[#131318]">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Filters</h2>
        <div className="space-y-2">
          {CATALOG_FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className="flex w-full items-center gap-3 rounded-full px-4 py-3 text-sm font-medium text-slate-800 transition-transform hover:translate-x-1 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5"
            >
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400" aria-hidden>
                settings
              </span>
              <span>{cat}</span>
            </button>
          ))}
        </div>
      </aside>
      <section className="flex-1">
        <header className="mb-12">
          <h1 className="text-on-surface mb-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Technical Registry
          </h1>
          <p className="text-on-surface-variant text-lg">
            Exploring architectural precision in computational hardware.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {CATALOG_PRODUCTS.map((product) => (
            <CatalogProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
