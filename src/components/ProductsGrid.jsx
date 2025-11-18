import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function ProductsGrid({ title, query = '' }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    fetch(`${BASE}/products${query}`)
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, [query]);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {title && <div className="flex items-center justify-between mb-4"><h2 className="text-xl font-bold">{title}</h2>
      </div>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(p => <ProductCard key={p._id} p={p} />)}
      </div>
    </section>
  );
}
