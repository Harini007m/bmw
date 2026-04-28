import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'M Performance Steering Wheel',
    category: 'M Parts',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1606016159991-efaefb126ea1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    name: 'BMW Chronograph Watch',
    category: 'Lifestyle',
    price: 450,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    name: 'Carbon Fiber Mirror Caps',
    category: 'M Parts',
    price: 890,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    name: 'BMW Leather Duffle Bag',
    category: 'Lifestyle',
    price: 680,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Store() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block border-l-2 border-primary pl-4">BMW Shop</span>
            <h1 className="text-5xl md:text-7xl font-bmw font-black text-white italic tracking-tighter uppercase leading-[0.85]">
              Premium <br />
              <span className="text-white/40">Collection</span>
            </h1>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all group">
            <ShoppingBag size={14} />
            Cart (0)
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {['All Products', 'M Performance Parts', 'Lifestyle', 'Wheels & Tires', 'Accessories'].map((cat, i) => (
            <button key={cat} className={`whitespace-nowrap px-6 py-2 uppercase tracking-widest text-[10px] font-bold transition-all ${i === 0 ? 'bg-primary text-white' : 'border border-white/10 text-white/60 hover:text-white hover:border-white/40'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-white/5 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 z-10" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-white text-black py-3 uppercase tracking-widest text-[10px] font-black flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors">
                    Add to Cart <ArrowRight size={12} />
                  </button>
                </div>
              </div>
              <div>
                <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2 block">{product.category}</span>
                <h3 className="text-lg font-bmw font-bold text-white uppercase tracking-tight mb-2 leading-tight">{product.name}</h3>
                <p className="text-white/80 font-mono text-sm">${product.price.toLocaleString()}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
