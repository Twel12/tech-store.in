# tech-store.in

A modern, production-grade e-commerce storefront for high-performance computer hardware. Built with React 19, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Stack

| Layer | Technology |
|---|---|
| UI | React 19 (functional components, hooks) |
| Component library | shadcn/ui (New York style, Zinc palette, Base UI primitives) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| State | React Context + `useReducer` (cart), local `useState` (UI) |
| Build | Vite 8 |
| Linting | ESLint 9 + typescript-eslint |

## Features


- Product detail page with specs
- Persistent shopping cart (localStorage) with quantity controls and tax calculation
- Search dialog in the navbar
- Login page with email/password form
- Dark mode with OS preference detection and localStorage persistence
- Lazy-loaded routes with `React.lazy` + `Suspense`
- Fully typed throughout — no `any`

## Project Structure

```
src/
├── App.tsx                       # Route definitions (lazy-loaded)
├── main.tsx                      # Entry point, providers
├── components/
│   ├── cart/                     # CartEmptyState, CartLineItem, CartSummary
│   ├── catalog/                  # CatalogProductCard
│   ├── layout/                   # Navbar, Footer, AppLayout, Page, SearchDialog
│   └── ui/                       # shadcn/ui primitives (button, card, badge, …)
├── config/
│   └── routes.ts                 # ROUTES constant
├── data/
│   ├── catalog.ts                # Static product list (fallback)
│   └── product-detail.ts         # Featured product + specs
├── hooks/
│   ├── useAddToCart.ts           # Add-to-cart logic + animation pulse
│   ├── useCart.ts                # Cart context consumer
│   ├── useCatalogProducts.ts     # Fetch products from backend (static fallback)
│   ├── useCollections.ts         # Fetch collections/categories from backend
│   └── useTheme.ts               # Dark mode toggle consumer
├── lib/
│   ├── cart-reducer.ts           # Pure cart reducer (ADD, REMOVE, SET_QTY, …)
│   ├── cart-storage.ts           # localStorage load/save with validation
│   ├── constants.ts              # BRAND_NAME, SALES_TAX_RATE, CART_STORAGE_KEY
│   ├── money.ts                  # formatUsd helper
│   └── utils.ts                  # cn() — shadcn class merge utility
├── pages/
│   ├── CartPage.tsx
│   ├── CatalogPage.tsx
│   ├── HomePage.tsx
│   ├── LoginPage.tsx
│   ├── NotFoundPage.tsx
│   ├── PlatformPage.tsx
│   ├── ProductDetail.tsx
│   └── SolutionsPage.tsx
├── providers/
│   ├── cart-context.ts           # CartContext (separated for react-refresh)
│   ├── CartProvider.tsx          # Cart state + derived totals
│   ├── theme-context.ts          # ThemeContext
│   └── ThemeProvider.tsx         # Dark mode state, applies .dark to <html>
├── types/
│   └── index.ts                  # CatalogProduct, CartItem, AddToCartInput, CartContextValue
└── utils/
    └── cn.ts                     # Re-exports cn from lib/utils
```

## Getting Started

```bash
npm install
npm run dev
```

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `http://localhost:5173` |
| `npm run build` | Type-check + production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Author

Shivansh Agarwal
