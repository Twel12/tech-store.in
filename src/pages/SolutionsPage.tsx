export function SolutionsPage() {
  return (
    <div className="dark bg-background text-on-surface min-h-screen pt-20">
      <section className="hero-gradient relative flex min-h-[921px] items-center px-8">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="z-10">
            <span className="border-primary/20 bg-primary/10 text-primary mb-8 inline-block rounded-full border px-4 py-1.5 text-xs font-bold uppercase">
              QUANTUM APEX PRO
            </span>
            <h1 className="font-headline text-on-surface mb-8 text-6xl leading-[0.9] font-extrabold tracking-tighter md:text-8xl">
              Quantum <br />
              <span className="text-primary">Apex Pro.</span>
            </h1>
            <p className="text-on-surface-variant mb-12 max-w-lg text-xl">
              Architecture designed with fluid-state logic for unparalleled
              multi-threaded mastery.
            </p>
            <div className="flex gap-5">
              <button
                type="button"
                className="bg-primary rounded-2xl px-10 py-4 text-lg font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(0,82,255,0.4)]"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="text-on-surface border-outline rounded-2xl border bg-slate-800/40 px-10 py-4 text-lg font-bold transition-all"
              >
                Technical Specs
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-surface border-outline overflow-hidden rounded-3xl border p-12 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDCBOQ_TKG7apcGnrS9NdoHEHo0q_S3Z1VOrB0NBEwrmvHQGdM8fZRPuFtrkntrGwLIYMDt0glz_XbAxKNetR7S0CW83VkLwd-fxClkaAbZ4VimrzXyT0b61RewZ4JP729zvVr5MJKe6SCKEjfQ7lH5tXWJvgRW2hX8caoUEhHDVhB46wNtcncPL8wflqCiuyiy3S0brLVNWAJQkqa7nDl-HNriMpmdLih4yV_Lt3RHZnV4LjDMsWVc0p-ougZb9eyNuhP1VszFs"
                className="h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
