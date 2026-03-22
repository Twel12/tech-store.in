const ITEMS = [
  {
    name: 'Aether Core X9',
    price: '$899.00',
    cat: 'Processors',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_rE_QcN_P99mwJBfu5hrpsGx0hHTwkwd1dsSDhR91Lw4FikzI-Cxxl376alpSwbDBoiJ7F2qaDaCkJbDudvsShSqbNwmMiX695WZBoI816pyEu-qlLEuhT0zEJctUs4rDiM1x6PbkUo71Sc-Mrj9kus8j1d75N02P0BOJDUy1Q4nqBfCoO8POW2JI3UGrFiGTJqtAcqSqsJMcb7tNucHMgSTvypoacZExQNOuFhfsikK6aP4X-Vh0ktdYDW5dG9gUrF17PWUwzVY',
  },
  {
    name: 'Lumina Deck Mk. II',
    price: '$249.00',
    cat: 'Peripherals',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJRWs95bBgT6fTHcfnb-jRV4n1dW4tEiF4bWFPdwo34yemcsMY7iwKVSQtP-ei0lgW1BtB6v033JA_20uZf_od0X_HmpASQG6zmb1CTDAT0hzfPdRLMtkfh-awRVwr2riNDON7uJxA5hX5tola9SVscnbnhd0xFqajkUuVIg70GJVeAwwcxIAD9qIv62kpRmS7pvRIMERuyUb_X3RjsojTORqlzni_KrymPCG8U8L58vEUK18jOyA57bPxkz92k1Q_Tbia2H1QE30',
  },
] as const

export function CartPage() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-2xl px-8 pt-32 pb-20">
      <div className="mb-12">
        <h1 className="mb-2 text-5xl font-extrabold tracking-tight">Cart</h1>
        <p className="text-on-surface-variant text-lg">
          You have 3 items in your editorial selection.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-8">
          {ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest flex items-center gap-8 rounded-xl p-8 transition-transform hover:translate-x-1"
            >
              <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-slate-50">
                <img
                  src={item.img}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
              <div className="min-w-0 flex-grow">
                <span className="text-primary mb-1 block text-xs font-bold uppercase">
                  {item.cat}
                </span>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-xl font-bold">{item.price}</p>
                </div>
                <div className="mt-4 flex items-center gap-6">
                  <div className="flex items-center gap-4 rounded-full bg-slate-100 px-4 py-2">
                    <button type="button">
                      <span className="material-symbols-outlined text-sm">
                        remove
                      </span>
                    </button>
                    <span className="font-bold">1</span>
                    <button type="button">
                      <span className="material-symbols-outlined text-sm">
                        add
                      </span>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="text-error flex items-center gap-2 font-medium"
                  >
                    <span className="material-symbols-outlined text-lg">
                      delete
                    </span>{' '}
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4">
          <div className="bg-surface-container-high sticky top-32 rounded-xl p-10">
            <h2 className="mb-8 text-3xl font-bold">Summary</h2>
            <div className="mb-8 space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold">$1,148.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="font-bold">$91.84</span>
              </div>
              <div className="bg-outline-variant/20 my-4 h-px" />
              <div className="flex justify-between text-2xl font-black">
                <span>Total</span>
                <span>$1,239.84</span>
              </div>
            </div>
            <button
              type="button"
              className="bg-primary w-full rounded-full py-5 font-bold text-white shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
