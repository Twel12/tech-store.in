import { Link } from 'react-router-dom'

const PRODUCTS = [
  {
    name: 'Aether Core i9-X',
    price: '$599',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsef_P6ikHHe16WVee4e554queBOJpPHkCbcPA0iWErBhAaigJilMzjE_S69MYNIZ34sDYb_c80KXU1SGZIpVpf1-1n2fSfJvLnaXnP3h_LVxWDfJFnApwdPmfBeLuNw_jgcT_DIZAxguCyLLkdb4UbtIEhkxTmyGtmlW0hd0DbeNjcz0gxDtamGZyEdzWceGRqIRBaaccEJHhCYQK-ze2vyzFibBcrEhbdtlsw46YdAp7q6fSqgDGtpvjaMfgTYs3UdBSXKo2KOs',
  },
  {
    name: 'Nebula RTX 5080Ti',
    price: '$1,199',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5s7czrp98wio3fZhFYBAUYbeHGVIy6fU5iCa-aCU_6FhyjAIBHI10o89qQ0B9HP2bNpI9RvAnSx3mYt0SHfTk3frl2Gvcb99En6o3d6feeuVRDm9YcrysZcCk_ETtXw-568DdvtD6neEhuz7_cdDyKZ_bvtnwsWFOQdArBw-pi6yonxFpAYQfkWGHv8mzRWBrAziSmgFXgOPW9f8jXyZGN6yZoIOs5kGHVglfmNyhiT8Am9XdPJnHOfZw6BONMhGgVUJxW54XfFo',
  },
  {
    name: 'Zenith DDR5 64GB',
    price: '$249',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6Yf49HFXwNZybvu8cK9278pfMBz3a1OTubSR-HwupT_NTha0jBZfOKzjTEvXFy4_ibxhkkYoWVEqfAdngVN6Q_eBVtfAF2EEnb9LvrCE--zsjgM84D3YY4zOSgLajgqiVxHZbCoOURiu3FllHawZEGD4vjk-_lnF1StsjJWeT4IGLWwNlZ_BOsHlPGs3B5yScE5TPzmU2w4sVjd4IJ-JTZWLFzlSmjQmnpYJWoKCbfCGl504uf3bT1drMy631ZTE_ga5Yn619fp0',
  },
] as const

const CATEGORIES = [
  'Processors',
  'Graphics',
  'Memory',
  'Storage',
  'Peripherals',
] as const

export function CatalogPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-screen-2xl gap-12 px-8 pt-24">
      <aside className="bg-slate-50 sticky top-24 hidden h-fit w-72 flex-col gap-4 rounded-r-[3rem] p-6 lg:flex">
        <h2 className="text-lg font-bold text-slate-900">Filters</h2>
        <div className="space-y-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className="hover:bg-slate-100 flex w-full items-center gap-3 rounded-full px-4 py-3 transition-transform hover:translate-x-1"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">{cat}</span>
            </button>
          ))}
        </div>
      </aside>
      <section className="flex-1 pb-20">
        <header className="mb-12">
          <h1 className="text-on-surface mb-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Technical Registry
          </h1>
          <p className="text-on-surface-variant text-lg">
            Exploring architectural precision in computational hardware.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Link
              to="/product"
              key={i}
              className="group bg-surface-container-lowest hover:-translate-y-2 rounded-xl p-8 shadow-sm transition-all duration-500 hover:shadow-xl"
            >
              <div className="mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-slate-50">
                <img
                  src={p.img}
                  className="h-4/5 w-4/5 object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                  alt=""
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">{p.name}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-black">{p.price}</span>
                <button
                  type="button"
                  className="bg-primary hover:scale-110 rounded-full p-3 text-white transition-all"
                >
                  <span className="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
