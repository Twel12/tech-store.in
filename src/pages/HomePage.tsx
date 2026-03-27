import { Link, useNavigate } from 'react-router-dom'
import { Button, buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ROUTES } from '../config/routes'

export function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-screen-2xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-0">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-widest">
            New Arrival
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            Quantum
            <br />
            Apex Pro.
          </h1>
          <p className="mb-10 max-w-md text-lg text-muted-foreground">
            Experience the architecture of the future. The first processor
            designed with fluid-state logic for unparalleled multi-threaded
            mastery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={() => navigate(ROUTES.product)}>
              Buy Now
            </Button>
            <Button size="lg" variant="outline">
              Technical Specs
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/30 p-10">
            <img
              alt="Processor"
              className="h-full w-full object-contain transition-transform duration-700 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPY40K0Stgp03Hr4bBBsr3gkDnQ_wgTTy6BJon0WhERJBJbMjFCz_yYv7sDt9l3t-q1aOzV4eN3-KKSOBIvpgl0o0KxBUNsJCwuwzz7lUel0zxJAuDsVm56raZ0n1kNt15lhwUBtPWjPqwsI56ZzRVTtvnJYjtXGbulVpOz2GXI2n3NviwYwtK29mJ6lXp3kpvd5vtQLilicKD2d3V_o6ivvdZKMzShxmExSfOnJ6aknGW7r-xc7nQycFLgWEYIoo6pVF2hRH52iI"
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Curated Collections */}
      <section className="mx-auto max-w-screen-2xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Curated Collections</h2>
            <p className="mt-2 text-muted-foreground">
              Architectural precision in every component.
            </p>
          </div>
          <Link
            to={ROUTES.catalog}
            className="hidden items-center gap-1 text-sm font-medium hover:underline md:flex"
          >
            View all
            <span className="material-symbols-outlined text-[16px]" aria-hidden>
              arrow_forward
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Large card */}
          <div className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-xl border border-border bg-muted/30 p-6 md:col-span-2 md:h-96">
            <div className="absolute top-0 right-0 h-full w-2/3">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDCBOQ_TKG7apcGnrS9NdoHEHo0q_S3Z1VOrB0NBEwrmvHQGdM8fZRPuFtrkntrGwLIYMDt0glz_XbAxKNetR7S0CW83VkLwd-fxClkaAbZ4VimrzXyT0b61RewZ4JP729zvVr5MJKe6SCKEjfQ7lH5tXWJvgRW2hX8caoUEhHDVhB46wNtcncPL8wflqCiuyiy3S0brLVNWAJQkqa7nDl-HNriMpmdLih4yV_Lt3RHZnV4LjDMsWVc0p-ougZb9eyNuhP1VszFs"
                alt=""
              />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold">Graphics Cards</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Uncompromising visual fidelity.
              </p>
              <Button size="sm" className="mt-4">
                Explore Range
              </Button>
            </div>
          </div>
          {/* Small card */}
          <div className="group flex h-72 flex-col overflow-hidden rounded-xl border border-border bg-card md:h-96">
            <div className="flex flex-1 items-center justify-center p-8">
              <img
                className="h-full object-contain transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOFKa-jiOqNyF_nbyylyzWNwyNQxrhfqjMjIjg710e_j5Wu2y9ADUsh8cQWc-hEa1xp4ZJ8-ZP7tgYE4EE_8PbbvorOBHDpLDc6LT6MeLOFoOT0uOgvr_PNWBLXtU2TiAbIXBk4ASE9pr_mWC-KXAXa9DgBwUhaIbVLduPfnLKQjm1uUxbz8uky0sBqQet4quvgd8FXXQtev9Q8kPUVLWgXRvD9WkdtgoskWdwk8-elvkRbkL0jAUbabEEYedsiSxqRzQMDtctig"
                alt=""
              />
            </div>
            <div className="p-6 pt-0">
              <h3 className="font-semibold">Memory</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Low latency, high bandwidth.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <Link
            to={ROUTES.catalog}
            className={buttonVariants({ variant: 'outline', className: 'w-full' })}
          >
            View Full Catalog
          </Link>
        </div>
      </section>
    </div>
  )
}
