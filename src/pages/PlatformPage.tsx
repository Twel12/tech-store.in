import { Button } from '@/components/ui/button'
import { BRAND_NAME } from '../lib/constants'

export function PlatformPage() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-2xl px-6 pt-24 pb-20">
      <section className="grid max-w-5xl grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            {BRAND_NAME} · v2.4.0-stable
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Orchestrate Your
            <br />
            Digital Reality.
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Infrastructure for high-performance synthesis and secure neural scaling.
            Built for architects of the future.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Deploy Node</Button>
            <Button size="lg" variant="outline">
              Documentation
            </Button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF_B7OtjK5kT3laZl9V8NLKVbFt8ayQ1Ks8p0jjnqJG7nGzhegFAUT4KSn2T1iZOlHA3D7TOFnJmc1quPILdHAsVmgx0Uv8gIWlGBd42ZCjh9kERZ_812v1sUnQ5QfGyzLWvv8gJYf9GPXGr19WgNkCa2x-eZar5pL0rcgC_ZOcNjEiR3zlTJmd2vQBQNN6bnHkqEncg9RqicTYz5gHNFBJywumPxIQEHuDT6EWmG7saY9unu5BQKQ8tt8liwNuFEezeb_bl4gDro"
            className="h-[400px] w-full rounded-xl border border-border object-cover shadow-sm"
            alt=""
          />
        </div>
      </section>
    </main>
  )
}
