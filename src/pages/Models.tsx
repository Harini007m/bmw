import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
);

interface CarColor {
  name: string;
  hex: string;
}

interface CarSpec {
  label: string;
  value: string;
}

interface Car {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  image: string;
  hoverVideo: string;
  fuel: string;
  hp: string;
  description: string;
  specs: CarSpec[];
  colors: CarColor[];
}

const wheelOptions = [
  { name: '19" M Double-spoke bi-color', price: 0 },
  { name: '20" M Double-spoke black', price: 600 },
  { name: '21" M Aero Jet Black', price: 1200 }
];

const interiorOptions = [
  { name: 'Black Perforated SensaTec', price: 0 },
  { name: 'Tacora Red Perforated SensaTec', price: 0 },
  { name: 'Cognac Vernasca Leather', price: 1500 },
  { name: 'Black Vernasca Leather', price: 1500 }
];

const cars: Car[] = [
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
    hp: '335 - 536',
    description: 'The first-ever all-electric BMW i4 Gran Coupe combines next-level performance with a beautiful design. Experience the thrill of electric power with zero emissions.',
    specs: [
      { label: '0-60 mph', value: '3.7 - 5.8 s' },
      { label: 'Range', value: 'up to 307 miles' },
      { label: 'Charge Time', value: '10-80% in 31 min' },
      { label: 'Torque', value: 'up to 586 lb-ft' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Portimao Blue Metallic', hex: '#1c3a63' },
      { name: 'San Remo Green Metallic', hex: '#264a38' },
      { name: 'Brooklyn Grey Metallic', hex: '#8e969d' }
    ]
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
    hp: '516 - 610',
    description: 'The BMW iX is the ultimate electric SAV, offering a luxurious interior, incredible range, and powerful performance. Sustainable design meets uncompromised capability.',
    specs: [
      { label: '0-60 mph', value: '3.6 - 4.4 s' },
      { label: 'Range', value: 'up to 309 miles' },
      { label: 'Charge Time', value: '10-80% in 35 min' },
      { label: 'Torque', value: 'up to 811 lb-ft' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Phytonic Blue Metallic', hex: '#254668' },
      { name: 'Aventurin Red Metallic', hex: '#631f24' },
      { name: 'Oxide Grey Metallic', hex: '#777974' }
    ]
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
    hp: '536 - 650',
    description: 'Experience electric luxury at its highest echelon. The all-electric BMW i7 redefines modern elegance with extraordinary power, expressive design, and unparalleled comfort.',
    specs: [
      { label: '0-60 mph', value: '3.5 - 4.5 s' },
      { label: 'Range', value: 'up to 321 miles' },
      { label: 'Charge Time', value: '10-80% in 34 min' },
      { label: 'Torque', value: 'up to 749 lb-ft' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Carbon Black Metallic', hex: '#0f1116' },
      { name: 'Mineral White Metallic', hex: '#f0f0f0' },
      { name: 'Tanzanite Blue II Metallic', hex: '#16233d' },
      { name: 'Dravit Grey Metallic', hex: '#595b5c' }
    ]
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
    hp: '473 - 543',
    description: 'The BMW M3 Sedan brings legendary track performance to the streets. Featuring a powerful M TwinPower Turbo inline-6, aggressive styling, and precision handling.',
    specs: [
      { label: '0-60 mph', value: '3.4 - 3.8 s' },
      { label: 'Engine', value: '3.0L M TwinPower Turbo' },
      { label: 'Torque', value: '406 - 479 lb-ft' },
      { label: 'Drivetrain', value: 'RWD / M xDrive' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Isle of Man Green metallic', hex: '#244537' },
      { name: 'Sao Paulo Yellow', hex: '#c5d012' },
      { name: 'Tanzanite Blue II Metallic', hex: '#16233d' }
    ]
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
    hp: '473 - 543',
    description: 'A breathtaking high-performance coupe with bold design and unyielding power. The M4 delivers pure adrenaline with everyday driveability.',
    specs: [
      { label: '0-60 mph', value: '3.4 - 3.8 s' },
      { label: 'Engine', value: '3.0L M TwinPower Turbo' },
      { label: 'Torque', value: '406 - 479 lb-ft' },
      { label: 'Drivetrain', value: 'RWD / M xDrive' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Isle of Man Green metallic', hex: '#244537' },
      { name: 'Sao Paulo Yellow', hex: '#c5d012' },
      { name: 'Tanzanite Blue II Metallic', hex: '#16233d' }
    ]
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
    hp: '644 - 738',
    description: 'The first-ever electrified M model, the BMW XM combines maximum M high-performance with an uncompromising plug-in hybrid drive and bold, iconic design.',
    specs: [
      { label: '0-60 mph', value: '3.7 - 4.1 s' },
      { label: 'Engine', value: '4.4L M TwinPower Turbo V-8 PHEV' },
      { label: 'Torque', value: '590 - 738 lb-ft' },
      { label: 'Electric Range', value: 'up to 30 miles' }
    ],
    colors: [
      { name: 'Mineral White Metallic', hex: '#f0f0f0' },
      { name: 'Carbon Black Metallic', hex: '#0f1116' },
      { name: 'Cape York Green Metallic', hex: '#6f7970' },
      { name: 'Marina Bay Blue metallic', hex: '#102e5b' },
      { name: 'Dravit Grey Metallic', hex: '#595b5c' }
    ]
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
    hp: '248 - 382',
    description: 'Adventure meets everyday comfort. The BMW X3 offers versatile driving capabilities, intelligent technology, and a striking, modern design.',
    specs: [
      { label: '0-60 mph', value: '4.4 - 6.0 s' },
      { label: 'Engine', value: '2.0L I4 / 3.0L I6' },
      { label: 'Torque', value: '258 - 369 lb-ft' },
      { label: 'Cargo Space', value: 'up to 62.7 cu ft' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Phytonic Blue Metallic', hex: '#254668' },
      { name: 'Dark Graphite Metallic', hex: '#3b3b3b' },
      { name: 'Mineral White Metallic', hex: '#f0f0f0' }
    ]
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
    hp: '375 - 523',
    description: 'The original SAV continues to impress. With elegant, strong exterior styling and an interior tailored for luxury and advanced connectivity.',
    specs: [
      { label: '0-60 mph', value: '3.7 - 5.3 s' },
      { label: 'Engine', value: '3.0L I6 / 4.4L V-8' },
      { label: 'Torque', value: '398 - 553 lb-ft' },
      { label: 'Towing Capacity', value: 'up to 7,200 lbs' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Skyscraper Grey metallic', hex: '#87888a' },
      { name: 'Manhattan Green metallic', hex: '#484b42' },
      { name: 'Tanzanite Blue II Metallic', hex: '#16233d' }
    ]
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
    hp: '375 - 523',
    description: 'The biggest BMW ever built. Make a statement in the X7 with expansive space, exceptional comfort for all passengers, and undeniable road presence.',
    specs: [
      { label: '0-60 mph', value: '3.7 - 5.8 s' },
      { label: 'Engine', value: '3.0L I6 / 4.4L V-8' },
      { label: 'Torque', value: '398 - 553 lb-ft' },
      { label: 'Seating', value: 'Up to 7' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Sparkling Copper Grey', hex: '#63605c' },
      { name: 'Marina Bay Blue metallic', hex: '#102e5b' },
      { name: 'Dravit Grey Metallic', hex: '#595b5c' }
    ]
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
    hp: '255 - 382',
    description: 'The iconic sports sedan that started it all. The 3 Series features agile handling, efficient power, and innovative tech to conquer any road.',
    specs: [
      { label: '0-60 mph', value: '4.1 - 5.6 s' },
      { label: 'Engine', value: '2.0L I4 / 3.0L I6' },
      { label: 'Torque', value: '295 - 369 lb-ft' },
      { label: 'Fuel Economy', value: 'up to 34 Hwy mpg' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Melbourne Red metallic', hex: '#871b1c' },
      { name: 'Portimao Blue Metallic', hex: '#1c3a63' },
      { name: 'Skyscraper Grey metallic', hex: '#87888a' }
    ]
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
    hp: '255 - 590',
    description: 'Masterfully crafted for the modern executive. The 5 Series balances athletic driving dynamics with premium luxury and trailblazing technology.',
    specs: [
      { label: '0-60 mph', value: '4.4 - 5.9 s' },
      { label: 'Engine', value: '2.0L I4 / 3.0L I6 / EV' },
      { label: 'Torque', value: '295 - 586 lb-ft' },
      { label: 'Technology', value: 'BMW Curved Display' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Carbon Black Metallic', hex: '#0f1116' },
      { name: 'Phytonic Blue Metallic', hex: '#254668' },
      { name: 'Oxide Grey Metallic', hex: '#777974' }
    ]
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
    hp: '375 - 536',
    description: 'The pinnacle of BMW luxury. The 7 Series is designed to command attention and deliver an extraordinarily refined, high-tech experience on every journey.',
    specs: [
      { label: '0-60 mph', value: '3.5 - 5.3 s' },
      { label: 'Engine', value: '3.0L I6 / 4.4L V-8' },
      { label: 'Torque', value: '398 - 553 lb-ft' },
      { label: 'Highlights', value: 'BMW Theater Screen' }
    ],
    colors: [
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire Metallic', hex: '#111111' },
      { name: 'Mineral White Metallic', hex: '#f0f0f0' },
      { name: 'Tanzanite Blue II Metallic', hex: '#16233d' },
      { name: 'Dravit Grey Metallic', hex: '#595b5c' }
    ]
  }
];

const categories = ['All Models', 'Electric', 'M Models', 'X Models', 'Sedans'];

export default function Models() {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All Models');
  
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [selectedColor, setSelectedColor] = useState<CarColor | null>(null);
  const [isConfiguring, setIsConfiguring] = useState(false);
  const [configStep, setConfigStep] = useState(1);
  
  const [selectedWheel, setSelectedWheel] = useState(wheelOptions[0]);
  const [selectedInterior, setSelectedInterior] = useState(interiorOptions[0]);

  const filteredCars = activeCategory === 'All Models'
    ? cars
    : cars.filter(car => car.category === activeCategory);

  useEffect(() => {
    if (selectedCar) {
      setSelectedColor(selectedCar.colors[0]);
      setIsConfiguring(false);
      setConfigStep(1);
      setSelectedWheel(wheelOptions[0]);
      setSelectedInterior(interiorOptions[0]);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedCar]);

  const totalPrice = selectedCar 
    ? selectedCar.price + selectedWheel.price + selectedInterior.price 
    : 0;

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
                onClick={() => setSelectedCar(car)}
                className="bg-white/5 border border-white/10 group overflow-hidden relative cursor-pointer"
              >
                <div className="h-64 relative overflow-hidden bg-black/50">
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${hoverId === car.id ? 'grayscale-0 scale-105' : 'grayscale opacity-80'}`}
                    onError={(e) => {
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

                  <button className="w-full py-4 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] group-hover:bg-white group-hover:text-black transition-all">
                    Build Your Own
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCar && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-black overflow-y-auto w-full h-full"
          >
            <div className="min-h-screen pb-24">
              {/* Header */}
              <div className="sticky top-0 left-0 w-full p-6 flex justify-between items-center z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
                 <button onClick={() => setSelectedCar(null)} className="text-white flex items-center gap-2 hover:text-white/70 transition-all uppercase tracking-widest text-xs font-bold">
                   <ChevronLeftIcon /> Back to Models
                 </button>
                 <span className="text-white font-bmw italic font-black text-xl">{selectedCar.name}</span>
                 <button onClick={() => setSelectedCar(null)} className="text-white hover:text-white/70 transition-all">
                   <XIcon />
                 </button>
              </div>

              {/* Hero Image Area */}
              <div className="relative h-[50vh] md:h-[60vh] flex items-center justify-center pt-10 overflow-hidden bg-gradient-to-b from-black to-white/5 border-b border-white/5">
                  <motion.img 
                    key={selectedCar.id + (selectedColor?.hex || '')}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={selectedCar.image} 
                    alt={selectedCar.name}
                    className="w-full max-w-4xl object-contain drop-shadow-2xl z-10 px-6"
                    style={{ filter: `drop-shadow(0 20px 30px rgba(0,0,0,0.8))` }} 
                  />
                  
                  <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
                    <h1 className="text-[20vw] font-bmw font-black text-white italic whitespace-nowrap">{selectedCar.id.toUpperCase()}</h1>
                  </div>
                  
                  {/* Dynamic ambient background glow based on selected color */}
                  <div 
                    className="absolute bottom-0 w-full h-1/2 z-0 opacity-20 blur-[120px] transition-colors duration-1000" 
                    style={{ backgroundColor: selectedColor?.hex || '#ffffff' }}
                  />
              </div>

              <div className="container mx-auto px-6 mt-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                     {/* Left Column: Car Info */}
                     <div className="lg:col-span-5">
                         <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block border-l-2 border-primary pl-4">{selectedCar.category}</span>
                         <h2 className="text-4xl md:text-5xl font-bmw font-black text-white italic tracking-tighter uppercase mb-6">{selectedCar.name}</h2>
                         <p className="text-white/60 text-sm leading-relaxed mb-8">{selectedCar.description}</p>

                         {!isConfiguring && (
                           <div className="mb-10">
                              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Starting At <span className="text-xl block mt-1">${selectedCar.price.toLocaleString()}</span></h3>
                              <button 
                                onClick={() => setIsConfiguring(true)}
                                className="group relative overflow-hidden bg-white text-black px-8 py-4 w-full flex items-center justify-center font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/90 mt-6"
                              >
                                 <span className="relative z-10">Build Your Own</span>
                              </button>
                           </div>
                         )}

                         {isConfiguring && (
                            <div className="mt-8 p-6 bg-white/5 border border-white/10 relative overflow-hidden group">
                               <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                               <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-2 text-white/50">Total Price</h3>
                               <div className="text-3xl font-black text-white mb-2">${totalPrice.toLocaleString()}</div>
                               <div className="text-xs text-white/40 mb-6 uppercase tracking-widest">Base MSRP: ${selectedCar.price.toLocaleString()}</div>
                               
                               <div className="flex flex-col gap-3 text-xs text-white/70 border-t border-white/10 pt-4">
                                  <div className="flex justify-between items-center"><span className="uppercase tracking-widest text-[10px] text-white/40">Exterior:</span> <span className="font-medium text-white">{selectedColor?.name}</span></div>
                                  <div className="flex justify-between items-center"><span className="uppercase tracking-widest text-[10px] text-white/40">Wheels:</span> <span className="font-medium text-white">{selectedWheel.name}</span></div>
                                  <div className="flex justify-between items-center"><span className="uppercase tracking-widest text-[10px] text-white/40">Interior:</span> <span className="font-medium text-white">{selectedInterior.name}</span></div>
                               </div>

                               <button className="w-full mt-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                                 Proceed to Order
                               </button>
                            </div>
                         )}
                     </div>

                     {/* Right Column: Specs or Configurator */}
                     <div className="lg:col-span-7">
                        {!isConfiguring ? (
                           <motion.div 
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                           >
                              <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6 border-b border-white/10 pb-4 flex items-center justify-between">
                                Performance Specifications
                                <span className="text-[10px] text-white/40">{selectedCar.hp} HP</span>
                              </h3>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 {selectedCar.specs.map(spec => (
                                    <div key={spec.label} className="bg-white/5 border border-white/5 p-6 hover:bg-white/10 transition-colors">
                                       <span className="text-white/40 uppercase tracking-widest text-[10px] block mb-2">{spec.label}</span>
                                       <span className="text-white font-black text-xl">{spec.value}</span>
                                    </div>
                                 ))}
                              </div>

                              <div className="mt-4 bg-white/5 border border-white/5 p-6 hover:bg-white/10 transition-colors">
                                 <span className="text-white/40 uppercase tracking-widest text-[10px] block mb-2">Fuel Type</span>
                                 <span className="text-white font-black text-xl">{selectedCar.fuel}</span>
                              </div>
                           </motion.div>
                        ) : (
                           <motion.div 
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             className="bg-white/5 border border-white/10 p-6 md:p-8"
                           >
                             {/* Configurator Steps Header */}
                             <div className="flex gap-6 mb-8 border-b border-white/10 pb-4 overflow-x-auto scrollbar-hide">
                                {['Exterior', 'Wheels', 'Interior'].map((step, idx) => (
                                   <button 
                                     key={step} 
                                     onClick={() => setConfigStep(idx + 1)}
                                     className={`uppercase tracking-widest text-xs font-bold pb-4 border-b-2 -mb-[18px] transition-all whitespace-nowrap ${configStep === idx + 1 ? 'text-white border-primary' : 'text-white/40 border-transparent hover:text-white/70'}`}
                                   >
                                     {idx + 1}. {step}
                                   </button>
                                ))}
                             </div>

                             {/* Step 1: Exterior */}
                             {configStep === 1 && (
                               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                 <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Select Exterior Color</h3>
                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {selectedCar.colors.map(c => (
                                      <button 
                                        key={c.name}
                                        onClick={() => setSelectedColor(c)}
                                        className={`flex items-center gap-4 p-4 border transition-all ${selectedColor?.name === c.name ? 'border-primary bg-primary/10' : 'border-white/10 hover:border-white/30'}`}
                                      >
                                        <div className="w-8 h-8 rounded-full border border-white/20 shadow-inner flex items-center justify-center transition-transform hover:scale-110" style={{ backgroundColor: c.hex, color: (c.hex === '#FFFFFF' || c.hex === '#f0f0f0') ? '#000' : '#fff' }}>
                                           {selectedColor?.name === c.name && <CheckIcon />}
                                        </div>
                                        <span className="text-xs text-left text-white font-medium">{c.name}</span>
                                      </button>
                                    ))}
                                 </div>
                                 <div className="mt-8 flex justify-end pt-6 border-t border-white/10">
                                   <button onClick={() => setConfigStep(2)} className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/80 transition-colors">Next: Wheels</button>
                                 </div>
                               </motion.div>
                             )}

                             {/* Step 2: Wheels */}
                             {configStep === 2 && (
                               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                 <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Select Wheels</h3>
                                 <div className="flex flex-col gap-4">
                                    {wheelOptions.map(w => (
                                      <button 
                                        key={w.name}
                                        onClick={() => setSelectedWheel(w)}
                                        className={`flex items-center justify-between p-4 border transition-all ${selectedWheel.name === w.name ? 'border-primary bg-primary/10' : 'border-white/10 hover:border-white/30'}`}
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedWheel.name === w.name ? 'border-primary' : 'border-white/40'}`}>
                                             {selectedWheel.name === w.name && <div className="w-2 h-2 bg-primary rounded-full" />}
                                          </div>
                                          <span className="text-xs text-white font-medium text-left">{w.name}</span>
                                        </div>
                                        <span className="text-xs text-white/60">+{w.price === 0 ? 'Included' : `$${w.price}`}</span>
                                      </button>
                                    ))}
                                 </div>
                                 <div className="mt-8 flex justify-between pt-6 border-t border-white/10">
                                   <button onClick={() => setConfigStep(1)} className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Back</button>
                                   <button onClick={() => setConfigStep(3)} className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/80 transition-colors">Next: Interior</button>
                                 </div>
                               </motion.div>
                             )}

                             {/* Step 3: Interior */}
                             {configStep === 3 && (
                               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                 <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Select Interior</h3>
                                 <div className="flex flex-col gap-4">
                                    {interiorOptions.map(i => (
                                      <button 
                                        key={i.name}
                                        onClick={() => setSelectedInterior(i)}
                                        className={`flex items-center justify-between p-4 border transition-all ${selectedInterior.name === i.name ? 'border-primary bg-primary/10' : 'border-white/10 hover:border-white/30'}`}
                                      >
                                        <div className="flex items-center gap-4">
                                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedInterior.name === i.name ? 'border-primary' : 'border-white/40'}`}>
                                             {selectedInterior.name === i.name && <div className="w-2 h-2 bg-primary rounded-full" />}
                                          </div>
                                          <span className="text-xs text-white font-medium text-left">{i.name}</span>
                                        </div>
                                        <span className="text-xs text-white/60">+{i.price === 0 ? 'Included' : `$${i.price}`}</span>
                                      </button>
                                    ))}
                                 </div>
                                 <div className="mt-8 flex justify-between pt-6 border-t border-white/10">
                                   <button onClick={() => setConfigStep(2)} className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Back</button>
                                 </div>
                               </motion.div>
                             )}
                           </motion.div>
                        )}
                     </div>
                  </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
