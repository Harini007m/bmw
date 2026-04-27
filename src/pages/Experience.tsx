import { motion } from 'framer-motion';
import { Camera, Globe, Compass } from 'lucide-react';

export default function Experience() {
  return (
    <div className="pt-32 pb-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-[0.6em] text-xs mb-4 block"
          >
            Digital Immersion
          </motion.span>
          <h1 className="text-6xl md:text-[8rem] font-bmw font-black text-white italic tracking-tighter uppercase leading-[0.8]">
            Virtual <br />
            <span className="text-white/20">Showroom</span>
          </h1>
        </div>

        {/* 360 Visualizer HUD */}
        <section className="relative aspect-video w-full glass flex items-center justify-center overflow-hidden group">
          {/* Animated Background Grids */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full border border-white/20 grid grid-cols-12 grid-rows-6">
              {[...Array(72)].map((_, i) => <div key={i} className="border border-white/10" />)}
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1616455578547-1c583f4d2fc2?auto=format&fit=crop&q=80&w=2000"
            alt="Interior 360"
            className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm group-hover:blur-none transition-all duration-1000"
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border border-primary/40 flex items-center justify-center mb-8 relative"
            >
              <div className="absolute inset-2 border border-white/10 rounded-full" />
              <Camera size={40} className="text-white" />
            </motion.div>
            
            <h3 className="text-4xl font-bmw font-black text-white italic tracking-tighter mb-4">ENTER 360° ENGINE</h3>
            <p className="text-white/40 max-w-sm text-center text-xs tracking-widest leading-loose uppercase">
              Explore every pixel of raw performance. High-fidelity rendering powered by M-Vision.
            </p>
            <button className="mt-10 px-12 py-4 bg-primary text-white font-bold uppercase tracking-widest text-[10px] hover:skew-x-[-12deg] transition-all">
              Launch Experience
            </button>
          </div>

          {/* Corner Elements */}
          <div className="absolute top-10 left-10 text-white/40 flex flex-col gap-4">
             <div className="flex items-center gap-3"><Globe size={14} /> <span className="text-[10px] font-bold tracking-widest uppercase">Global Nodes: ACTIVE</span></div>
             <div className="flex items-center gap-3"><Compass size={14} /> <span className="text-[10px] font-bold tracking-widest uppercase">Orientation: 45.4° N</span></div>
          </div>
          <div className="absolute bottom-10 right-10">
             <div className="w-40 h-[1px] bg-white/20 relative">
               <div className="absolute right-0 top-0 w-4 h-[1px] bg-primary animate-pulse" />
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
