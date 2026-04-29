import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Replace lucide-react with svg components for guaranteed rendering and styling
const WrenchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const PhoneCallIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const NavigationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>;
const CarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>;
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const InfoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;

const FallbackImage = 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800';

const categories = ['All Services', 'Maintenance & Repair', 'Digital & Connectivity', 'Support & Warranty'];

const services = [
  {
    id: 1,
    title: 'BMW Ultimate Care',
    category: 'Maintenance & Repair',
    description: 'Comprehensive scheduled maintenance covering your BMW for up to 3 years or 36,000 miles. Includes engine oil, filters, spark plugs, and brake fluid.',
    icon: <WrenchIcon />,
    image: 'https://images.unsplash.com/photo-1625047509168-a71c6f5fdf35?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 2,
    title: 'BMW Teleservices',
    category: 'Digital & Connectivity',
    description: 'Your BMW monitors its own service needs and automatically transmits data to your preferred BMW Center, who will then contact you to schedule an appointment.',
    icon: <ZapIcon />,
    image: 'https://images.unsplash.com/photo-1618221381711-42cb25ac7a0f?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 3,
    title: '24/7 Roadside Assistance',
    category: 'Support & Warranty',
    description: 'Round-the-clock support for the first 4 years of ownership. Includes towing, lock-out service, jump starts, and personalized trip routing.',
    icon: <PhoneCallIcon />,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 4,
    title: 'BMW Fast Lane Service',
    category: 'Maintenance & Repair',
    description: 'Premium service completed within 90 minutes. Relax in our customer lounge with Wi-Fi and refreshments while our experts work efficiently.',
    icon: <SettingsIcon />,
    image: 'https://images.unsplash.com/photo-1599912027806-ce07d5b1136b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 5,
    title: 'ConnectedDrive & My BMW App',
    category: 'Digital & Connectivity',
    description: 'Remote services, real-time traffic information, over-the-air updates, and digital key functionality right from your smartphone.',
    icon: <NavigationIcon />,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 6,
    title: 'BMW Certified Collision Repair',
    category: 'Maintenance & Repair',
    description: 'State-of-the-art repair facilities meeting BMW\'s strict standards for structural integrity, utilizing only Original BMW Parts.',
    icon: <CarIcon />,
    image: 'https://images.unsplash.com/photo-1626668893632-6ea0c9f13e70?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 7,
    title: 'New Vehicle Warranty',
    category: 'Support & Warranty',
    description: 'Exceptional peace of mind with a 4-year/50,000-mile limited warranty, plus a 12-year rust perforation limited warranty.',
    icon: <ShieldCheckIcon />,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 8,
    title: 'BMW Genius',
    category: 'Support & Warranty',
    description: 'Expert product knowledge at your fingertips. Get personalized answers about your vehicle\'s features and technologies from a BMW Genius.',
    icon: <InfoIcon />,
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1000'
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All Services');

  const filteredServices = activeCategory === 'All Services' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1625047509168-a71c6f5fdf35?auto=format&fit=crop&q=80&w=2000" 
            alt="BMW Service Center"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block border-l-2 border-primary pl-4">Care & Support</span>
            <h1 className="text-5xl md:text-8xl font-bmw font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-6">
              Uncompromising <br />
              <span className="text-white/40">Precision</span>
            </h1>
            <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
              Owning a BMW is just the beginning. Our world-class service ensures your vehicle performs at peak precision, year after year, with authentic Original BMW Parts and exclusively trained technicians.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
               <button className="bg-primary text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all text-center">
                 Schedule Service
               </button>
               <button className="border border-white/20 text-white px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white/10 transition-all text-center">
                 Find a BMW Center
               </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="bg-black py-24 relative z-20">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bmw font-bold text-white italic uppercase tracking-tighter mb-8 border-b border-white/10 pb-6">Explore Our Services</h2>
            {/* Filters */}
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-6 py-3 uppercase tracking-widest text-[10px] font-bold transition-all ${activeCategory === cat ? 'bg-white text-black' : 'border border-white/10 text-white/60 hover:text-white hover:border-white/40'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={service.id}
                  className="group relative overflow-hidden bg-[#050505] border border-white/5 cursor-pointer min-h-[400px] flex flex-col justify-end"
                >
                  <div className="absolute inset-0 z-0">
                     <img 
                       src={service.image} 
                       alt={service.title} 
                       className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" 
                       onError={(e) => { e.currentTarget.src = FallbackImage; }}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                  </div>
                  
                  <div className="relative z-10 p-8 md:p-12 transform md:translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                     <div className="w-14 h-14 bg-primary/20 backdrop-blur-md flex items-center justify-center mb-6 group-hover:bg-primary transition-colors border border-primary/50 text-white">
                       {service.icon}
                     </div>
                     <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2 block">{service.category}</span>
                     <h3 className="text-3xl md:text-4xl font-bmw font-black text-white italic uppercase tracking-tighter mb-4">{service.title}</h3>
                     <p className="text-white/60 text-sm leading-relaxed mb-8 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100 line-clamp-3 md:line-clamp-none">
                       {service.description}
                     </p>
                     
                     <div className="w-0 h-0.5 bg-primary group-hover:w-16 transition-all duration-500 ease-out"></div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      {/* Promise Section */}
      <div className="bg-[#0a0a0a] border-t border-white/5 py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
           <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-8">
             <span className="text-white font-bmw font-black italic">BMW</span>
           </div>
           <h2 className="text-4xl md:text-5xl font-bmw font-black text-white italic uppercase tracking-tighter mb-6">The BMW Service Promise</h2>
           <p className="text-white/50 text-sm leading-relaxed mb-10">
             Whether you're visiting for a routine oil change or a major repair, you can expect an unmatched level of expertise and care. Our BMW Trained Technicians use only Original BMW Parts to keep your vehicle performing like the Ultimate Driving Machine®.
           </p>
           <button className="text-xs text-white uppercase tracking-widest font-bold border-b border-primary pb-1 hover:text-primary transition-colors">
             Learn more about Genuine Parts
           </button>
        </div>
      </div>
    </div>
  );
}
