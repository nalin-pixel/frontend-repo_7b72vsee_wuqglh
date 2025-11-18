import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ p }) {
  return (
    <div className="group rounded-2xl bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={(p.images?.[0]?.url) || `https://picsum.photos/seed/${p._id}/600/400`} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border border-black/10 dark:border-white/10 hover:scale-105"><Heart className="w-4 h-4" /></button>
      </div>
      <div className="p-4">
        <Link to={`/product/${p.slug || p._id}`} className="line-clamp-1 font-semibold hover:underline">{p.title}</Link>
        <div className="mt-1 flex items-center gap-1 text-amber-500">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm">{p.rating?.toFixed?.(1) || '4.5'}</span>
          <span className="text-xs text-black/60 dark:text-white/60">({p.rating_count || 100})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold">₹{p.sale_price || p.price}</span>
          {p.sale_price && <span className="text-sm line-through text-black/50 dark:text-white/50">₹{p.price}</span>}
        </div>
        <div className="mt-3 flex gap-2">
          <Link to={`/product/${p.slug || p._id}`} className="flex-1 h-9 inline-flex items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black hover:opacity-90">Add to cart</Link>
          <button className="px-3 h-9 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">Buy</button>
        </div>
      </div>
    </div>
  );
}
