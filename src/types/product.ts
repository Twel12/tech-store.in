export type CatalogProduct = {
  id: string
  name: string
  /** Price in integer cents */
  priceCents: number
  img: string
  category?: string
}
