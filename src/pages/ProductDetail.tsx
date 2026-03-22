const SPECS = [
  { i: 'memory', l: 'VRAM Capacity', v: '24GB GDDR6X' },
  { i: 'speed', l: 'Boost Clock', v: '2.8 GHz' },
  { i: 'bolt', l: 'Total Power', v: '450W TDP' },
] as const

export function ProductDetail() {
  return (
    <main className="mx-auto max-w-screen-2xl px-6 pt-32 pb-20">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-16 lg:col-span-8">
          <section>
            <span className="text-primary mb-4 block text-xs font-bold tracking-widest uppercase">
              Next-Gen Architecture
            </span>
            <h1 className="text-on-surface mb-8 text-6xl leading-[0.9] font-black tracking-tighter md:text-8xl">
              Aether <br />
              Vortex X-1
            </h1>
            <p className="text-on-surface-variant max-w-xl text-xl leading-relaxed">
              The pinnacle of visual computation. Designed for creators who
              demand zero latency and gamers who refuse to compromise.
            </p>
          </section>
          <section className="relative">
            <div className="bg-primary-container/20 absolute top-1/2 left-1/2 -z-10 h-4/5 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />
            <div className="bg-surface-container-lowest flex items-center justify-center overflow-hidden rounded-xl p-8 md:p-16">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT7Cw5vjjZVHTzpMboLLiOVxZsNDRK_ikyWBBLOiWuj_1hC_ARS_yjajtZSeWt3ad0ryoo4OB7VsMp6jOG4O8Q78xc87XD997aH8s79Bfk0oMNy4BfNennNo4vQSaESWUaLGHYZp2XEHeh1pL7dN25ZSH9hfL_5IUkArhbOrjLayCxilc3sYMlnKHt6RRZC1MfHcEwoT0rCuAkdoYGYGsusNQDtzZBrHW53wsiMB9qrGJCqtf09Qs8aLLAcm9VYaxZh8nRaBs0ZBE"
                className="h-auto w-full object-contain transition-transform duration-700 hover:scale-105"
                alt="GPU"
              />
            </div>
          </section>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {SPECS.map((spec, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low space-y-4 rounded-xl p-10"
              >
                <span
                  className="material-symbols-outlined text-primary text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {spec.i}
                </span>
                <h3 className="text-on-surface-variant text-sm font-bold tracking-widest uppercase">
                  {spec.l}
                </h3>
                <p className="text-on-surface text-4xl font-black tracking-tighter">
                  {spec.v}
                </p>
              </div>
            ))}
          </section>
        </div>
        <div className="lg:col-span-4">
          <div className="bg-surface-container-high sticky top-32 space-y-4 rounded-xl p-8">
          <div>
            <span className="text-primary-container text-5xl font-black tracking-tighter">
              $1,599.00
            </span>
            </div>
            <div className="space-y-4">
              <button
                type="button"
                className="from-primary-container to-primary w-full rounded-full bg-gradient-to-br py-5 text-lg font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="text-on-primary-fixed-variant w-full rounded-full bg-white py-5 text-lg font-bold transition-all hover:bg-surface-container-lowest"
              >
                Buy with Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
