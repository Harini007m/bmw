import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Zap, Gauge, Star, Compass } from 'lucide-react';

const highlights = [
  { icon: Zap, title: 'Electric', tag: 'Electrified Future' },
  { icon: Gauge, title: 'Performance', tag: 'Pure Power' },
  { icon: Star, title: 'Luxury', tag: 'Ultimate Comfort' },
  { icon: Compass, title: 'Heritage', tag: 'Built to Last' }
];

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      
      {/* Category Highlights */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                className="group relative h-[400px] overflow-hidden glass rounded-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                <img 
                  src={`https://images.unsplash.com/photo-${i === 0 ? '1618843479313-40f8afb4b4d8' : i === 1 ? '1603386329225-868f9b1ee6c9' : i === 2 ? '1549399542-7e3f8b79c341' : '1555215695-3004980ad54e'}?auto=format&fit=crop&q=80&w=800`}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-10 z-20">
                  <item.icon className="text-primary mb-6 group-hover:glow-blue transition-all" size={32} />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-2 block">{item.tag}</span>
                  <h3 className="text-4xl font-bmw font-black text-white italic tracking-tighter uppercase">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bmw font-black text-white italic tracking-tighter mb-10">
              PIONEERING <br />
              <span className="text-white/20">TOMORROW.</span>
            </h2>
            <div className="space-y-8">
              <p className="text-white/60 text-lg leading-relaxed font-light">
                Since our inception in 1916, BMW has been at the forefront of automotive innovation. From the iconic BMW 328 to the revolutionary i7, every curve and engine note is crafted for the ultimate driving experience.
              </p>
              <button className="px-12 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs hover:skew-x-[-12deg] transition-all">
                The Brand Story
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square glass rounded-full flex items-center justify-center p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 animate-pulse" />
            <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow" />
            <img 
              src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=800"
              alt="Centerpiece"
              className="w-[80%] h-[80%] object-contain drop-shadow-[0_0_50px_rgba(0,102,177,0.3)] z-10"
            />
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bmw font-black text-white italic tracking-tighter mb-6 uppercase">Stay Ahead of the Curve</h2>
          <p className="text-white/40 mb-10 text-sm tracking-widest uppercase">Join the M-Performance Newsletter</p>
          <div className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADRESS"
              className="flex-grow bg-white/5 border border-white/10 px-8 py-5 text-white text-xs focus:outline-none focus:border-primary transition-all"
            />
            <button className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-white transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
