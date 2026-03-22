import { BRAND_NAME } from '../lib/constants'

export function PlatformPage() {
  return (
    <main className="bg-background text-on-surface mx-auto min-h-screen max-w-screen-2xl px-8 pt-24 pb-20">
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <span className="bg-primary-fixed text-on-primary-fixed mb-6 inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
            {BRAND_NAME} · v2.4.0-stable
          </span>
          <h1 className="font-headline text-on-surface mb-6 text-5xl leading-tight font-extrabold tracking-tighter md:text-7xl">
            Orchestrate Your <br />
            <span className="text-primary">Digital Reality.</span>
          </h1>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
            Infrastructure for high-performance synthesis and secure neural
            scaling. Built for architects of the future.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="from-primary-container to-primary text-on-primary rounded-xl bg-gradient-to-br px-8 py-4 font-bold shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Deploy Node
            </button>
            <button
              type="button"
              className="bg-surface-container-high text-on-primary-fixed-variant rounded-xl px-8 py-4 font-bold transition-colors hover:opacity-90"
            >
              Documentation
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-primary-container/10 absolute inset-0 rounded-[2.5rem] blur-3xl" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF_B7OtjK5kT3laZl9V8NLKVbFt8ayQ1Ks8p0jjnqJG7nGzhegFAUT4KSn2T1iZOlHA3D7TOFnJmc1quPILdHAsVmgx0Uv8gIWlGBd42ZCjh9kERZ_812v1sUnQ5QfGyzLWvv8gJYf9GPXGr19WgNkCa2x-eZar5pL0rcgC_ZOcNjEiR3zlTJmd2vQBQNN6bnHkqEncg9RqicTYz5gHNFBJywumPxIQEHuDT6EWmG7saY9unu5BQKQ8tt8liwNuFEezeb_bl4gDro"
            className="border-outline-variant/20 relative h-[450px] w-full rounded-[2rem] border bg-surface-container-lowest object-cover shadow-2xl"
            alt=""
          />
        </div>
      </section>
    </main>
  )
}
