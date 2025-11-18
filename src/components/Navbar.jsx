import { ShoppingCart, Heart, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="font-extrabold text-xl tracking-tight">flames.shop</Link>
          </div>
          <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl">
            <div className="relative w-full">
              <input className="w-full h-10 rounded-xl pl-10 pr-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 outline-none" placeholder="Search products" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/50 dark:text-white/50" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/wishlist" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
              <Heart className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="relative p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white dark:bg-white dark:text-black rounded-full px-1.5">2</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
