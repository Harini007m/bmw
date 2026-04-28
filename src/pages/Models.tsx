import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cars = [
  // Electric (i)
  {
    id: 'i4',
    name: 'BMW i4',
    category: 'Electric',
    type: 'Gran Coupe',
    price: 52200,
    image: '/models/i4.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-fast-on-a-highway-at-night-1191-large.mp4',
    fuel: 'Electric',
    hp: '335 - 536'
  },
  {
    id: 'ix',
    name: 'BMW iX',
    category: 'Electric',
    type: 'Sports Activity Vehicle',
    price: 87250,
    image: '/models/ix.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-curved-road-at-night-1714-large.mp4',
    fuel: 'Electric',
    hp: '516 - 610'
  },
  {
    id: 'i7',
    name: 'BMW i7',
    category: 'Electric',
    type: 'Luxury Sedan',
    price: 105700,
    image: '/models/7series.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-road-in-the-dark-32768-large.mp4',
    fuel: 'Electric',
    hp: '536 - 650'
  },

  // M Series
  {
    id: 'm3',
    name: 'BMW M3',
    category: 'M Models',
    type: 'High-Performance Sedan',
    price: 76000,
    image: '/models/m4.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-fast-on-a-highway-at-night-1191-large.mp4',
    fuel: 'Petrol',
    hp: '473 - 543'
  },
  {
    id: 'm4',
    name: 'BMW M4',
    category: 'M Models',
    type: 'High-Performance Coupe',
    price: 78100,
    image: '/models/m4.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-curved-road-at-night-1714-large.mp4',
    fuel: 'Petrol',
    hp: '473 - 543'
  },
  {
    id: 'xm',
    name: 'BMW XM',
    category: 'M Models',
    type: 'High-Performance SAV',
    price: 159000,
    image: '/models/xm.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-road-in-the-dark-32768-large.mp4',
    fuel: 'Plug-in Hybrid',
    hp: '644 - 738'
  },

  // X Models
  {
    id: 'x3',
    name: 'BMW X3',
    category: 'X Models',
    type: 'Sports Activity Vehicle',
    price: 46900,
    image: '/models/x5.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-curved-road-at-night-1714-large.mp4',
    fuel: 'Petrol/Hybrid',
    hp: '248 - 382'
  },
  {
    id: 'x5',
    name: 'BMW X5',
    category: 'X Models',
    type: 'Sports Activity Vehicle',
    price: 65200,
    image: '/models/x5.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-road-in-the-dark-32768-large.mp4',
    fuel: 'Petrol/Hybrid',
    hp: '375 - 523'
  },
  {
    id: 'x7',
    name: 'BMW X7',
    category: 'X Models',
    type: 'Luxury SAV',
    price: 81900,
    image: '/models/xm.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-fast-on-a-highway-at-night-1191-large.mp4',
    fuel: 'Petrol',
    hp: '375 - 523'
  },

  // Sedans
  {
    id: '3series',
    name: 'BMW 3 Series',
    category: 'Sedans',
    type: 'Sports Sedan',
    price: 44500,
    image: '/models/i4.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-curved-road-at-night-1714-large.mp4',
    fuel: 'Petrol/Hybrid',
    hp: '255 - 382'
  },
  {
    id: '5series',
    name: 'BMW 5 Series',
    category: 'Sedans',
    type: 'Executive Sedan',
    price: 57900,
    image: '/models/7series.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-road-in-the-dark-32768-large.mp4',
    fuel: 'Petrol/Electric',
    hp: '255 - 590'
  },
  {
    id: '7series',
    name: 'BMW 7 Series',
    category: 'Sedans',
    type: 'Luxury Sedan',
    price: 96400,
    image: '/models/7series.png',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-fast-on-a-highway-at-night-1191-large.mp4',
    fuel: 'Petrol/Hybrid',
    hp: '375 - 536'
  }
];

const categories = ['All Models', 'Electric', 'M Models', 'X Models', 'Sedans'];

export default function Models() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All Models');

  const filteredCars = activeCategory === 'All Models'
    ? cars
    : cars.filter(car => car.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block border-l-2 border-primary pl-4">The Lineup</span>
          <h1 className="text-5xl md:text-7xl font-bmw font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-8">
            Find Your <br />
            <span className="text-white/40">Ultimate Driving Machine</span>
          </h1>

          {/* Filters */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-3 uppercase tracking-widest text-[10px] font-bold transition-all ${activeCategory === cat ? 'bg-white text-black' : 'border border-white/20 text-white/60 hover:text-white hover:border-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredCars.map((car) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={car.id}
                onMouseEnter={() => setHoverId(car.id)}
                onMouseLeave={() => setHoverId(null)}
                className="bg-white/5 border border-white/10 group overflow-hidden relative cursor-pointer"
              >
                <div className="h-64 relative overflow-hidden bg-black/50">
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${hoverId === car.id ? 'grayscale-0 scale-105' : 'grayscale opacity-80'}`}
                    onError={(e) => {
                      // Fallback image if unsplash link is broken
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800';
                    }}
                  />

                  <AnimatePresence>
                    {hoverId === car.id && (
                      <motion.video
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-105"
                      >
                        <source src={car.hoverVideo} type="video/mp4" />
                      </motion.video>
                    )}
                  </AnimatePresence>

                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                    <span className="px-3 py-1 bg-primary text-[8px] font-black uppercase tracking-widest text-white shadow-lg shadow-black/50">{car.fuel}</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1 block">{car.type}</span>
                      <h3 className="text-2xl font-bmw font-black text-white italic tracking-tight">{car.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1 block">Starting At</span>
                      <span className="text-white font-black text-sm block">${car.price.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-8 text-white/60">
                    <div className="text-xs font-mono"><span className="text-white/40 uppercase tracking-widest text-[8px] block mb-1">Horsepower</span> {car.hp} HP</div>
                  </div>

                  <button className="w-full py-4 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                    Build Your Own
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
