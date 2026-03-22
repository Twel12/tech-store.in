export function PlatformPage() {
  return (
    <div className="dark bg-background text-on-surface min-h-screen pt-24">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-8 py-16 lg:grid-cols-2">
        <div>
          <span className="bg-secondary-container/30 text-secondary-fixed-dim mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            tech-store.in · v2.4.0-stable
          </span>
          <h1 className="font-headline mb-6 bg-gradient-to-br from-white via-white to-blue-400 bg-clip-text text-5xl leading-tight font-extrabold tracking-tighter text-transparent md:text-7xl">
            Orchestrate Your <br />
            Digital Reality.
          </h1>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
            Infrastructure for high-performance synthesis and secure neural
            scaling. Built for architects of the future.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="bg-primary rounded-xl px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition-transform hover:scale-105"
            >
              Deploy Node
            </button>
            <button
              type="button"
              className="border-outline-variant/30 text-on-surface hover:bg-surface-container-high rounded-xl border px-8 py-4 font-bold transition-colors"
            >
              Documentation
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[2.5rem] bg-blue-500/10 blur-3xl" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF_B7OtjK5kT3laZl9V8NLKVbFt8ayQ1Ks8p0jjnqJG7nGzhegFAUT4KSn2T1iZOlHA3D7TOFnJmc1quPILdHAsVmgx0Uv8gIWlGBd42ZCjh9kERZ_812v1sUnQ5QfGyzLWvv8gJYf9GPXGr19WgNkCa2x-eZar5pL0rcgC_ZOcNjEiR3zlTJmd2vQBQNN6bnHkqEncg9RqicTYz5gHNFBJywumPxIQEHuDT6EWmG7saY9unu5BQKQ8tt8liwNuFEezeb_bl4gDro"
            className="border-outline-variant/20 relative h-[450px] w-full rounded-[2rem] border object-cover shadow-2xl"
            alt=""
          />
        </div>
      </section>
    </div>
  )
}
