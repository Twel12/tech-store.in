import { Button } from '@/components/ui/button'

export function SolutionsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-2xl px-6 pt-24 pb-20">
      <section className="grid max-w-5xl grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Quantum Apex Pro
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Quantum
            <br />
            Apex Pro.
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Architecture designed with fluid-state logic for unparalleled
            multi-threaded mastery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">Buy Now</Button>
            <Button size="lg" variant="outline">
              Technical Specs
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-border bg-card p-10 shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDCBOQ_TKG7apcGnrS9NdoHEHo0q_S3Z1VOrB0NBEwrmvHQGdM8fZRPuFtrkntrGwLIYMDt0glz_XbAxKNetR7S0CW83VkLwd-fxClkaAbZ4VimrzXyT0b61RewZ4JP729zvVr5MJKe6SCKEjfQ7lH5tXWJvgRW2hX8caoUEhHDVhB46wNtcncPL8wflqCiuyiy3S0brLVNWAJQkqa7nDl-HNriMpmdLih4yV_Lt3RHZnV4LjDMsWVc0p-ougZb9eyNuhP1VszFs"
              className="h-full w-full rounded-lg object-cover"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  )
}
