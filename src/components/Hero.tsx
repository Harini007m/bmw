import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vw] rotate-270 object-cover"
        >
          <source src="/videos/bmw-6.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block border-l-4 border-primary pl-4">
              Pure M Performance
            </span>
            <h1 className="text-6xl md:text-[8rem] font-bmw font-black text-white italic leading-[0.85] mb-8 tracking-tighter">
              SHEER <br />
              <span className="text-gradient">DRIVING</span> <br />
              PLEASURE.
            </h1>

            <p className="text-white/70 text-lg max-w-xl mb-12 font-light leading-relaxed">
              Where engineering excellence meets emotional intensity. Experience the new era of high-speed luxury.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-8">
            <button className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">Explore Models</span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button className="flex items-center gap-4 px-10 py-5 border border-white/20 text-white font-black uppercase tracking-widest text-[10px] hover:bg-white/5 transition-all">
              Book Test Drive <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="absolute right-12 bottom-24 hidden xl:block z-20">
        <div className="flex flex-col gap-10">
          {[
            { label: 'Power', val: '625 HP' },
            { label: '0-100', val: '3.3s' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="text-right border-r-2 border-primary/40 pr-6"
            >
              <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">{stat.label}</div>
              <div className="text-2xl text-white font-bmw font-black italic">{stat.val}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
