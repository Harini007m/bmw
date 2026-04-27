import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Phase 1: Full text displays (Serif)
    const timer1 = setTimeout(() => setStep(1), 2200);
    // Phase 2: BMW displays (Sans-Serif)
    const timer2 = setTimeout(() => {
      onComplete();
    }, 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="full-text"
            initial={{ opacity: 0, letterSpacing: '0.5em', filter: 'blur(10px)' }}
            animate={{ opacity: 1, letterSpacing: '0.2em', filter: 'blur(0px)' }}
            exit={{ 
              opacity: 0, 
              scale: 1.2, 
              filter: 'blur(20px)', 
              transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-serif text-white uppercase font-light">
              Bayerische Motoren Werke
            </h1>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="bmw-text"
            initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ 
              opacity: 0, 
              scale: 2, 
              filter: 'blur(30px)', 
              transition: { duration: 0.8 } 
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.43, 0.13, 0.23, 0.96] 
            }}
            className="text-center"
          >
            <h1 className="text-8xl md:text-[12rem] font-bmw font-black text-white italic tracking-tighter">
              BMW
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-[4px] bg-primary mt-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Cinematic motion blur overlay lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ left: '-100%', top: `${i * 7}%` }}
            animate={{ left: '250%' }}
            transition={{ 
              duration: 1.5 + Math.random() * 1, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 3
            }}
            className="absolute h-[1px] w-[500px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        ))}
      </div>
    </div>
  );
}
