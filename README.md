# tech-store.in

A modern, production-grade e-commerce storefront for high-performance computer hardware. Built with React 19, TypeScript, and Tailwind CSS v4.

## Stack

| Layer | Technology |
|---|---|
| UI | React 19 (functional components, hooks) |
| Language | TypeScript 5.9 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 |
| State | React Context + `useReducer` (cart), local `useState` (UI) |
| Build | Vite 8 |
| Linting | ESLint 9 + typescript-eslint |

## Features

- Product catalog with category filtering
- Product detail page with specs
- Persistent shopping cart (localStorage) with quantity controls and tax calculation
- Dark mode with OS preference detection and localStorage persistence
- Lazy-loaded routes with `React.lazy` + `Suspense`
- Fully typed throughout — no `any`

## Project Structure

```
src/
├── App.tsx                  # Route definitions (lazy-loaded)
├── main.tsx                 # Entry point, providers
├── components/
│   ├── cart/                # CartEmptyState, CartLineItem, CartSummary
│   ├── catalog/             # CatalogProductCard
│   └── layout/              # Navbar, Footer, AppLayout, Page
├── config/
│   └── routes.ts            # ROUTES constant
├── data/
│   ├── catalog.ts           # Static product list
│   └── product-detail.ts    # Featured product + specs
├── hooks/
│   ├── useAddToCart.ts      # Add-to-cart logic + animation pulse
│   ├── useCart.ts           # Cart context consumer
│   └── useTheme.ts          # Dark mode toggle consumer
├── lib/
│   ├── cart-reducer.ts      # Pure cart reducer (ADD, REMOVE, SET_QTY, …)
│   ├── cart-storage.ts      # localStorage load/save with validation
│   ├── constants.ts         # BRAND_NAME, SALES_TAX_RATE, CART_STORAGE_KEY
│   └── money.ts             # formatUsd helper
├── pages/
│   ├── CartPage.tsx
│   ├── CatalogPage.tsx
│   ├── HomePage.tsx
│   ├── PlatformPage.tsx
│   ├── ProductDetail.tsx
│   └── SolutionsPage.tsx
├── providers/
│   ├── cart-context.ts      # CartContext (separated for react-refresh)
│   ├── CartProvider.tsx     # Cart state + derived totals
│   ├── theme-context.ts     # ThemeContext
│   └── ThemeProvider.tsx    # Dark mode state, applies .dark to <html>
├── types/
│   └── index.ts             # CatalogProduct, CartItem, AddToCartInput, CartContextValue
└── utils/
    └── cn.ts                # Conditional class joining utility
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
