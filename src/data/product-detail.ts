/** Featured product shown on `/product` */
export const FEATURED_PRODUCT = {
  productId: 'vortex-x1',
  name: 'Vortex X-1',
  priceCents: 1599_00,
  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT7Cw5vjjZVHTzpMboLLiOVxZsNDRK_ikyWBBLOiWuj_1hC_ARS_yjajtZSeWt3ad0ryoo4OB7VsMp6jOG4O8Q78xc87XD997aH8s79Bfk0oMNy4BfNennNo4vQSaESWUaLGHYZp2XEHeh1pL7dN25ZSH9hfL_5IUkArhbOrjLayCxilc3sYMlnKHt6RRZC1MfHcEwoT0rCuAkdoYGYGsusNQDtzZBrHW53wsiMB9qrGJCqtf09Qs8aLLAcm9VYaxZh8nRaBs0ZBE',
  category: 'Graphics',
} as const

export const FEATURED_PRODUCT_SPECS = [
  { icon: 'memory', label: 'VRAM Capacity', value: '24GB GDDR6X' },
  { icon: 'speed', label: 'Boost Clock', value: '2.8 GHz' },
  { icon: 'bolt', label: 'Total Power', value: '450W TDP' },
] as const
