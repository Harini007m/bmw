import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const CheckIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);
const ShoppingBagIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);

const FallbackImage = 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details: string[];
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'M Performance Steering Wheel',
    category: 'M Parts',
    price: 1250,
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=1000',
    description: 'Experience pure motorsport feeling. The M Performance steering wheel is entirely covered with Alcantara for excellent grip and feel in extreme driving situations.',
    details: ['Alcantara grip area', 'Red center mark at 12 o\'clock', 'Carbon fiber trim', 'M tri-color stitching'],
    inStock: true
  },
  {
    id: 2,
    name: 'BMW M Motorsport Chronograph Watch',
    category: 'Lifestyle',
    price: 450,
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=1000',
    description: 'A striking timepiece that embodies the spirit of BMW M Motorsport. Features a robust stainless steel case and a precise chronograph movement.',
    details: ['Stainless steel case', 'Silicone strap with M logo', 'Water-resistant up to 10 ATM', 'Date display and stopwatch function'],
    inStock: true
  },
  {
    id: 3,
    name: 'Carbon Fiber Mirror Caps',
    category: 'M Parts',
    price: 890,
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=1000',
    description: 'Enhance the athletic character of your BMW. These mirror caps are meticulously crafted from 100% genuine carbon fiber for a lightweight, high-performance look.',
    details: ['Hand-crafted genuine carbon fiber', 'High-gloss UV-resistant clear coat', 'Perfect fitment', 'Easy installation'],
    inStock: true
  },
  {
    id: 4,
    name: 'BMW Leather Duffle Bag',
    category: 'Lifestyle',
    price: 680,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=1000',
    description: 'Travel in luxury with this premium leather duffle bag. Spacious, durable, and elegantly styled with subtle BMW branding.',
    details: ['100% genuine full-grain leather', 'Large main compartment', 'Adjustable shoulder strap', 'Metal BMW pin'],
    inStock: false
  },
  {
    id: 5,
    name: 'M Performance Exhaust System',
    category: 'M Parts',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000',
    description: 'Unleash the true sound of your engine. The M Performance exhaust system optimizes exhaust backpressure and delivers a powerful, sporty acoustic experience.',
    details: ['Titanium construction', 'Optimized exhaust flow', 'Carbon fiber tailpipe finishers', 'Bluetooth flap control'],
    inStock: true
  },
  {
    id: 6,
    name: 'BMW Signature Keycase',
    category: 'Accessories',
    price: 65,
    image: 'https://images.unsplash.com/photo-1583592874677-49f3e4e963ee?auto=format&fit=crop&q=80&w=1000',
    description: 'Protect your BMW display key in style. This elegant keycase combines high-quality leather with a protective metal clasp.',
    details: ['Premium fine-grain leather', 'Stainless steel clasp', 'Protects against scratches', 'Maintains signal strength'],
    inStock: true
  },
  {
    id: 7,
    name: 'BMW Roof Box 420',
    category: 'Accessories',
    price: 950,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1000',
    description: 'Maximize your cargo space without compromising aerodynamics. The BMW Roof Box 420 offers a generous capacity with a sleek design.',
    details: ['420 Liters capacity', 'Dual-side opening', 'Central locking system', 'Black high-gloss finish'],
    inStock: true
  },
  {
    id: 8,
    name: '21" M Light Alloy Wheels',
    category: 'Wheels & Tires',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1600705295286-90510523dfd5?auto=format&fit=crop&q=80&w=1000',
    description: 'Transform the stance of your vehicle. These forged M light alloy wheels reduce unsprung mass and deliver extraordinary aesthetic appeal.',
    details: ['Forged aluminum construction', 'Weight-optimized', 'Jet Black matte finish', 'Includes TPM sensors'],
    inStock: true
  }
];

const categories = ['All Products', 'M Parts', 'Lifestyle', 'Accessories', 'Wheels & Tires'];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [isAddingId, setIsAddingId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedProduct]);

  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    if (!product.inStock) return;
    
    setIsAddingId(product.id);
    setTimeout(() => {
      setCartCount(prev => prev + 1);
      setIsAddingId(null);
    }, 600);
  };

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
          <button className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all group relative overflow-hidden">
            <ShoppingBagIcon size={14} />
            Cart ({cartCount})
            {cartCount > 0 && (
              <span className="absolute top-3 right-3 w-2 h-2 bg-primary rounded-full"></span>
            )}
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 uppercase tracking-widest text-[10px] font-bold transition-all ${activeCategory === cat ? 'bg-primary text-white' : 'border border-white/10 text-white/60 hover:text-white hover:border-white/40'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative aspect-square overflow-hidden bg-white/5 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 z-10" />
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                    onError={(e) => { e.currentTarget.src = FallbackImage; }}
                  />
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/10">
                      <span className="text-[8px] uppercase tracking-widest text-white/60 font-bold">Sold Out</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      disabled={!product.inStock}
                      className={`w-full py-3 uppercase tracking-widest text-[10px] font-black flex items-center justify-center gap-2 transition-colors ${!product.inStock ? 'bg-white/10 text-white/30 cursor-not-allowed' : isAddingId === product.id ? 'bg-primary text-white' : 'bg-white text-black hover:bg-primary hover:text-white'}`}
                    >
                      {!product.inStock ? 'Sold Out' : isAddingId === product.id ? 'Added!' : <><ShoppingBagIcon size={12} /> Quick Add</>}
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-2 block">{product.category}</span>
                  <h3 className="text-lg font-bmw font-bold text-white uppercase tracking-tight mb-2 leading-tight flex-1">{product.name}</h3>
                  <p className="text-white/80 font-mono text-sm mt-auto">${product.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Overlay Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-[#0a0a0a] border border-white/10 w-full max-w-6xl h-[90vh] flex flex-col md:flex-row relative shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProduct(null)} 
                className="absolute top-4 right-4 z-50 text-white hover:text-primary transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/10"
              >
                <XIcon />
              </button>

              {/* Product Image Section */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full bg-black/50 relative overflow-hidden flex items-center justify-center">
                 <img 
                   src={selectedProduct.image} 
                   alt={selectedProduct.name}
                   className="w-full h-full object-cover absolute inset-0"
                   onError={(e) => { e.currentTarget.src = FallbackImage; }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/20 md:to-[#0a0a0a]"></div>
              </div>

              {/* Product Details Section */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto p-8 md:p-16 flex flex-col">
                 <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4 block border-l-2 border-primary pl-4">{selectedProduct.category}</span>
                 <h2 className="text-3xl md:text-5xl font-bmw font-black text-white italic tracking-tighter uppercase mb-6 leading-tight">
                   {selectedProduct.name}
                 </h2>
                 <p className="text-4xl font-mono text-white mb-8">${selectedProduct.price.toLocaleString()}</p>
                 
                 <div className="w-12 h-1 bg-primary mb-8"></div>
                 
                 <p className="text-white/70 text-sm leading-relaxed mb-10">
                   {selectedProduct.description}
                 </p>

                 <div className="mb-12">
                   <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Product Highlights</h4>
                   <ul className="space-y-4">
                     {selectedProduct.details.map((detail, idx) => (
                       <li key={idx} className="flex items-start gap-4 text-white/60 text-sm">
                         <div className="mt-0.5 text-primary"><CheckIcon size={16} /></div>
                         {detail}
                       </li>
                     ))}
                   </ul>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
                   <button 
                     disabled={!selectedProduct.inStock || isAddingId === selectedProduct.id}
                     onClick={(e) => handleAddToCart(e, selectedProduct)}
                     className={`flex-1 py-4 uppercase tracking-widest text-xs font-bold transition-all flex items-center justify-center gap-3 ${!selectedProduct.inStock ? 'bg-white/5 text-white/30 cursor-not-allowed border border-white/5' : isAddingId === selectedProduct.id ? 'bg-white text-black' : 'bg-primary text-white hover:bg-white hover:text-black'}`}
                   >
                     {!selectedProduct.inStock ? 'Out of Stock' : isAddingId === selectedProduct.id ? 'Added to Cart' : <><ShoppingBagIcon size={14} /> Add to Cart</>}
                   </button>
                   {selectedProduct.inStock && (
                     <button className="px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs font-bold">
                       Buy Now
                     </button>
                   )}
                 </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
