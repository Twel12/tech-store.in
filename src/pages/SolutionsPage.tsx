export function SolutionsPage() {
  return (
    <main className="bg-background text-on-surface mx-auto min-h-screen max-w-screen-2xl px-8 pt-24 pb-20">
      <section className="hero-gradient relative flex min-h-[921px] items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="z-10">
            <span className="bg-primary-fixed text-on-primary-fixed mb-8 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase">
              QUANTUM APEX PRO
            </span>
            <h1 className="font-headline text-on-surface mb-8 text-6xl leading-[0.9] font-extrabold tracking-tighter md:text-8xl">
              Quantum <br />
              <span className="text-primary">Apex Pro.</span>
            </h1>
            <p className="text-on-surface-variant mb-12 max-w-lg text-xl leading-relaxed">
              Architecture designed with fluid-state logic for unparalleled
              multi-threaded mastery.
            </p>
            <div className="flex flex-wrap gap-5">
              <button
                type="button"
                className="from-primary-container to-primary text-on-primary rounded-2xl bg-gradient-to-br px-10 py-4 text-lg font-bold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="bg-surface-container-high text-on-primary-fixed-variant rounded-2xl px-10 py-4 text-lg font-bold transition-all hover:scale-105 active:scale-95"
              >
                Technical Specs
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-surface-container-lowest border-outline-variant/20 overflow-hidden rounded-3xl border p-12 shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDCBOQ_TKG7apcGnrS9NdoHEHo0q_S3Z1VOrB0NBEwrmvHQGdM8fZRPuFtrkntrGwLIYMDt0glz_XbAxKNetR7S0CW83VkLwd-fxClkaAbZ4VimrzXyT0b61RewZ4JP729zvVr5MJKe6SCKEjfQ7lH5tXWJvgRW2hX8caoUEhHDVhB46wNtcncPL8wflqCiuyiy3S0brLVNWAJQkqa7nDl-HNriMpmdLih4yV_Lt3RHZnV4LjDMsWVc0p-ougZb9eyNuhP1VszFs"
                className="h-full w-full rounded-xl object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
