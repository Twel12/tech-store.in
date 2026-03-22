import { Link, useNavigate } from 'react-router-dom'

export function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="pt-20">
      <section className="hero-gradient relative flex min-h-[870px] items-center overflow-hidden px-8 lg:px-20">
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="z-10 lg:col-span-6">
            <span className="bg-primary-fixed text-on-primary-fixed mb-6 inline-block rounded-full px-4 py-1 text-sm font-semibold">
              NEW ARRIVAL
            </span>
            <h1 className="text-on-surface mb-8 text-6xl leading-[0.9] font-bold tracking-tighter md:text-8xl">
              Quantum <br />
              <span className="text-primary">Apex Pro.</span>
            </h1>
            <p className="text-on-surface-variant mb-12 max-w-lg text-xl leading-relaxed">
              Experience the architecture of the future. The first processor
              designed with fluid-state logic for unparalleled multi-threaded
              mastery.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigate('/product')}
                className="from-primary-container to-primary text-on-primary rounded-full bg-gradient-to-br px-10 py-4 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="bg-surface-container-high text-on-primary-fixed-variant rounded-full px-10 py-4 text-lg font-bold transition-all hover:scale-105 active:scale-95"
              >
                Technical Specs
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:col-span-6">
            <div className="bg-primary-container/10 absolute h-[120%] w-[120%] rounded-full blur-[120px]" />
            <div className="bg-surface-container-lowest relative flex aspect-square w-full max-w-xl items-center justify-center overflow-hidden rounded-xl p-12 shadow-2xl">
              <img
                alt="Processor"
                className="h-full w-full object-contain transition-transform duration-700 hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPY40K0Stgp03Hr4bBBsr3gkDnQ_wgTTy6BJon0WhERJBJbMjFCz_yYv7sDt9l3t-q1aOzV4eN3-KKSOBIvpgl0o0KxBUNsJCwuwzz7lUel0zxJAuDsVm56raZ0n1kNt15lhwUBtPWjPqwsI56ZzRVTtvnJYjtXGbulVpOz2GXI2n3NviwYwtK29mJ6lXp3kpvd5vtQLilicKD2d3V_o6ivvdZKMzShxmExSfOnJ6aknGW7r-xc7nQycFLgWEYIoo6pVF2hRH52iI"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-8 lg:px-20">
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
            <div>
              <h2 className="text-on-surface text-4xl font-bold tracking-tighter md:text-5xl">
                Curated Collections
              </h2>
              <p className="text-on-surface-variant mt-4 text-lg">
                Architectural precision in every component.
              </p>
            </div>
            <Link
              to="/catalog"
              className="group text-primary flex items-center gap-2 text-lg font-bold"
            >
              View Full Catalog{' '}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-12">
            <div className="group bg-surface-container-lowest relative flex h-[500px] flex-col justify-end overflow-hidden rounded-xl p-10 md:col-span-2 lg:col-span-8">
              <div className="absolute top-0 right-0 h-full w-2/3">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDCBOQ_TKG7apcGnrS9NdoHEHo0q_S3Z1VOrB0NBEwrmvHQGdM8fZRPuFtrkntrGwLIYMDt0glz_XbAxKNetR7S0CW83VkLwd-fxClkaAbZ4VimrzXyT0b61RewZ4JP729zvVr5MJKe6SCKEjfQ7lH5tXWJvgRW2hX8caoUEhHDVhB46wNtcncPL8wflqCiuyiy3S0brLVNWAJQkqa7nDl-HNriMpmdLih4yV_Lt3RHZnV4LjDMsWVc0p-ougZb9eyNuhP1VszFs"
                  alt=""
                />
              </div>
              <div className="relative z-10 max-w-sm">
                <h3 className="text-on-surface mb-4 text-4xl font-bold tracking-tight">
                  Graphics Cards
                </h3>
                <p className="text-on-surface-variant mb-8">
                  Uncompromising visual fidelity for creators and enthusiasts.
                </p>
                <button
                  type="button"
                  className="group-hover:w-40 text-on-primary flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-primary px-4 whitespace-nowrap transition-all duration-300"
                >
                  <span className="material-symbols-outlined">add</span>
                  <span className="ml-2 font-bold opacity-0 transition-opacity group-hover:opacity-100">
                    Explore Range
                  </span>
                </button>
              </div>
            </div>
            <div className="group flex h-[500px] flex-col rounded-xl bg-white p-10 md:col-span-2 lg:col-span-4">
              <img
                className="mb-8 h-2/3 object-contain transition-transform duration-500 group-hover:rotate-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOFKa-jiOqNyF_nbyylyzWNwyNQxrhfqjMjIjg710e_j5Wu2y9ADUsh8cQWc-hEa1xp4ZJ8-ZP7tgYE4EE_8PbbvorOBHDpLDc6LT6MeLOFoOT0uOgvr_PNWBLXtU2TiAbIXBk4ASE9pr_mWC-KXAXa9DgBwUhaIbVLduPfnLKQjm1uUxbz8uky0sBqQet4quvgd8FXXQtev9Q8kPUVLWgXRvD9WkdtgoskWdwk8-elvkRbkL0jAUbabEEYedsiSxqRzQMDtctig"
                alt=""
              />
              <h3 className="text-on-surface mb-2 text-2xl font-bold">Memory</h3>
              <p className="text-on-surface-variant">
                Low latency, high bandwidth modules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
