import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Zap, PhoneCall } from 'lucide-react';

const services = [
  {
    title: 'M Certified Maintenance',
    description: 'Precision care by technicians trained exclusively on high-performance BMW M engines.',
    icon: <Wrench size={24} className="text-primary" />
  },
  {
    title: 'Ultimate Protection',
    description: 'Extended warranties and ceramic coating services to preserve your investment.',
    icon: <ShieldCheck size={24} className="text-primary" />
  },
  {
    title: 'ConnectedDrive Setup',
    description: 'Seamless integration of your digital life into your BMW ecosystem.',
    icon: <Zap size={24} className="text-primary" />
  },
  {
    title: '24/7 Concierge',
    description: 'Round-the-clock priority assistance for all BMW M owners globally.',
    icon: <PhoneCall size={24} className="text-primary" />
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1599912027806-ce07d5b1136b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-20">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block border-l-2 border-primary pl-4">Care & Support</span>
          <h1 className="text-5xl md:text-7xl font-bmw font-black text-white italic tracking-tighter uppercase leading-[0.85] mb-6">
            Beyond <br />
            <span className="text-white/40">The Drive</span>
          </h1>
          <p className="text-white/60 text-lg font-light leading-relaxed">
            Owning a BMW is just the beginning. Our world-class service ensures your vehicle performs at peak precision, year after year.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bmw font-bold text-white uppercase tracking-tight mb-3">{service.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{service.description}</p>
              
              <button className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-colors">
                Learn More <span className="text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
