type CatalogFilterSidebarProps = {
  title?: string
  categories: readonly string[]
  icon?: string
}

export function CatalogFilterSidebar({
  title = 'Filters',
  categories,
  icon = 'settings',
}: CatalogFilterSidebarProps) {
  return (
    <aside className="bg-slate-50 sticky top-24 hidden h-fit w-72 flex-col gap-4 rounded-r-[3rem] p-6 lg:flex">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <div className="space-y-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className="hover:bg-slate-100 flex w-full items-center gap-3 rounded-full px-4 py-3 transition-transform hover:translate-x-1"
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="text-sm font-medium">{cat}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}
