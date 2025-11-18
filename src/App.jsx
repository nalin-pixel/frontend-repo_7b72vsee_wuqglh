import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductsGrid from './components/ProductsGrid'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />
      <Hero />
      <ProductsGrid title="Featured" query="?featured=true&limit=8" />
      <footer className="border-t border-black/5 dark:border-white/10 py-8 text-center text-sm text-black/60 dark:text-white/60">© 2025 flames.shop • Privacy • Terms</footer>
    </div>
  )
}

export default App