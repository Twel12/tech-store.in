import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { TopNavBar } from './components/TopNavBar'
import { CartPage } from './pages/CartPage'
import { CatalogPage } from './pages/CatalogPage'
import { LandingPage } from './pages/LandingPage'
import { PlatformPage } from './pages/PlatformPage'
import { ProductDetail } from './pages/ProductDetail'
import { SolutionsPage } from './pages/SolutionsPage'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const isDark =
      location.pathname === '/platform' || location.pathname === '/solutions'
    document.documentElement.className = isDark ? 'dark' : ''
  }, [location.pathname])

  return (
    <div className="bg-surface text-on-surface font-body flex min-h-screen flex-col antialiased">
      <TopNavBar />
      <div className="grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
