import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden mt-[72px]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        
        {/* Placeholder Video - Using a high-quality stock video URL if possible, otherwise simulating with image */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000"
        >
          {/* Note: In a real project, we'd use a local optimized .mp4 or a professional stock CDN link */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-fast-driving-on-a-highway-at-night-1728-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Layer */}
      <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-[0.6em] uppercase text-xs md:text-sm mb-6 block border-l-4 border-primary pl-4">
              The Evolution of Performance
            </span>
            <h1 className="text-6xl md:text-[10rem] font-bmw font-black text-white italic leading-[0.8] mb-8 tracking-tighter mix-blend-difference">
              SHEER <br />
              <span className="text-gradient">DRIVING</span> <br />
              PLEASURE.
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-xl mb-12 font-light leading-relaxed border-l border-white/20 pl-8">
              Pioneering the future of mobility with unmatched precision, sustainable innovation, and the pure thrill of the open road.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-8"
          >
            <button className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-xs overflow-hidden">
              <span className="relative z-10 transition-colors group-hover:text-white">Explore Models</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-4 px-12 py-5 border border-white/30 text-white font-black uppercase tracking-widest text-xs hover:border-primary transition-all">
              Book Test Drive
              <div className="w-8 h-[1px] bg-white group-hover:w-12 group-hover:bg-primary transition-all" />
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* HUD Analytics Overlay */}
      <div className="absolute right-12 bottom-24 hidden xl:block z-20">
        <div className="flex flex-col gap-10">
          {[
            { label: 'Top Speed', val: '250 km/h' },
            { label: '0-100 km/h', val: '3.4s' },
            { label: 'Model', val: 'M5 COMPETITION' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="text-right border-r border-white/10 pr-6"
            >
              <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-1">{stat.label}</div>
              <div className="text-xl text-white font-bmw font-black italic">{stat.val}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
