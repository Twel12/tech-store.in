type CatalogPageHeaderProps = {
  title: string
  description: string
}

export function CatalogPageHeader({ title, description }: CatalogPageHeaderProps) {
  return (
    <header className="mb-12">
      <h1 className="text-on-surface mb-2 text-4xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h1>
      <p className="text-on-surface-variant text-lg">{description}</p>
    </header>
  )
}
