import type { CatalogProduct } from '../types'

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'core-i9-x',
    name: 'Core i9-X',
    priceCents: 599_00,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsef_P6ikHHe16WVee4e554queBOJpPHkCbcPA0iWErBhAaigJilMzjE_S69MYNIZ34sDYb_c80KXU1SGZIpVpf1-1n2fSfJvLnaXnP3h_LVxWDfJFnApwdPmfBeLuNw_jgcT_DIZAxguCyLLkdb4UbtIEhkxTmyGtmlW0hd0DbeNjcz0gxDtamGZyEdzWceGRqIRBaaccEJHhCYQK-ze2vyzFibBcrEhbdtlsw46YdAp7q6fSqgDGtpvjaMfgTYs3UdBSXKo2KOs',
    category: 'Processors',
  },
  {
    id: 'nebula-rtx-5080ti',
    name: 'Nebula RTX 5080Ti',
    priceCents: 1199_00,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5s7czrp98wio3fZhFYBAUYbeHGVIy6fU5iCa-aCU_6FhyjAIBHI10o89qQ0B9HP2bNpI9RvAnSx3mYt0SHfTk3frl2Gvcb99En6o3d6feeuVRDm9YcrysZcCk_ETtXw-568DdvtD6neEhuz7_cdDyKZ_bvtnwsWFOQdArBw-pi6yonxFpAYQfkWGHv8mzRWBrAziSmgFXgOPW9f8jXyZGN6yZoIOs5kGHVglfmNyhiT8Am9XdPJnHOfZw6BONMhGgVUJxW54XfFo',
    category: 'Graphics',
  },
  {
    id: 'zenith-ddr5-64gb',
    name: 'Zenith DDR5 64GB',
    priceCents: 249_00,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Yf49HFXwNZybvu8cK9278pfMBz3a1OTubSR-HwupT_NTha0jBZfOKzjTEvXFy4_ibxhkkYoWVEqfAdngVN6Q_eBVtfAF2EEnb9LvrCE--zsjgM84D3YY4zOSgLajgqiVxHZbCoOURiu3FllHawZEGD4vjk-_lnF1StsjJWeT4IGLWwNlZ_BOsHlPGs3B5yScE5TPzmU2w4sVjd4IJ-JTZWLFzlSmjQmnpYJWoKCbfCGl504uf3bT1drMy631ZTE_ga5Yn619fp0',
    category: 'Memory',
  },
]

export const CATALOG_FILTER_CATEGORIES = [
  'Processors',
  'Graphics',
  'Memory',
  'Storage',
  'Peripherals',
] as const
