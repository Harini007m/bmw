import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const cars = [
  {
    id: 1,
    name: 'BMW i4',
    type: 'Gran Coupe',
    price: 52200,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=600',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-car-driving-fast-on-a-highway-at-night-1191-large.mp4',
    fuel: 'Electric'
  },
  {
    id: 2,
    name: 'BMW M3',
    type: 'Sedan',
    price: 76000,
    image: 'https://images.unsplash.com/photo-1619330091138-ec1aaaf33009?auto=format&fit=crop&q=80&w=600',
    hoverVideo: 'https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-curved-road-at-night-1714-large.mp4',
    fuel: 'Petrol'
  }
];

export default function Models() {
  const [hoverId, setHoverId] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">The Lineup</span>
          <h1 className="text-6xl font-bmw font-black text-white italic tracking-tighter uppercase">All Models</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car) => (
            <motion.div
              key={car.id}
              onMouseEnter={() => setHoverId(car.id)}
              onMouseLeave={() => setHoverId(null)}
              className="glass group overflow-hidden relative"
            >
              <div className="h-64 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {hoverId === car.id ? (
                    <motion.video
                      key="video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source src={car.hoverVideo} type="video/mp4" />
                    </motion.video>
                  ) : (
                    <motion.img
                      key="image"
                      src={car.image}
                      alt={car.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  )}
                </AnimatePresence>
                
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-primary text-[8px] font-black uppercase tracking-widest text-white">{car.fuel}</span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-1 block">{car.type}</span>
                    <h3 className="text-2xl font-bmw font-black text-white italic tracking-tight">{car.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-white font-black text-sm block">From ${car.price.toLocaleString()}</span>
                  </div>
                </div>
                
                <button className="w-full py-4 glass text-white font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">
                  Explore Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
