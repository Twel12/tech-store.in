export type CatalogProduct = {
  id: string
  name: string
  /** Price in integer cents (e.g. 59900 = $599.00) */
  priceCents: number
  img: string
  category?: string
}
