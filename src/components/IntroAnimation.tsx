import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function ScrambledLetter({ target, duration, delay, onDone }: { target: string, duration: number, delay: number, onDone?: () => void }) {
  const [displayText, setDisplayText] = useState<string>("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let interval: any;
    let timeout: any;

    const startScrambling = () => {
      interval = setInterval(() => {
        setDisplayText(characters[Math.floor(Math.random() * characters.length)]);
      }, 70);
    };

    // Delay the start of scrambling
    timeout = setTimeout(() => {
      startScrambling();
      setTimeout(() => {
        clearInterval(interval);
        setDisplayText(target);
        setIsDone(true);
        if (onDone) onDone();
      }, duration);
    }, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []); // Only run once on mount

  return (
    <motion.span
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{
        opacity: 1,
        filter: isDone ? 'blur(0px)' : 'blur(2px)',
        scale: isDone ? 1 : 1.1,
        color: isDone ? '#fff' : '#0066b1'
      }}
      className="inline-block"
    >
      {displayText}
    </motion.span>
  );
}

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [isFinishing, setIsFinishing] = useState(false);
  const [wDone, setWDone] = useState(false);

  useEffect(() => {
    // Start finishing animation at 4.5s
    const timer1 = setTimeout(() => setIsFinishing(true), 4500);
    // Complete the intro fully at 6.5s to give time for the wave wipe
    const timer2 = setTimeout(() => onComplete(), 6500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <>
      <motion.div
        animate={{ 
          opacity: isFinishing ? 0 : 1,
          filter: isFinishing ? 'blur(20px)' : 'blur(0px)'
        }}
        transition={{ duration: 1, delay: 0.6 }}
        className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      >
        <div className="flex items-center gap-16 md:gap-32 text-7xl md:text-[10rem] font-bmw font-black italic tracking-tighter relative">
          <ScrambledLetter target="B" delay={200} duration={800} />
          <ScrambledLetter target="M" delay={600} duration={800} />
          <div className="relative flex items-center">
            <ScrambledLetter target="W" delay={1000} duration={800} onDone={() => setWDone(true)} />
          </div>

          {/* Blinking Glitch Line - Disappears when done */}
          {!wDone && (
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.15 }}
              className="w-1 h-32 bg-primary/40 absolute -right-10 pointer-events-none"
            />
          )}
        </div>

        {/* Background Ambience */}
        <div className="absolute inset-x-0 bottom-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Air Flow Waves Transition */}
      {isFinishing && (
        <div className="fixed inset-0 z-[110] pointer-events-none overflow-hidden">
          {[
            { color: '#0066B1', delay: 0 },
            { color: '#003865', delay: 0.15 },
            { color: '#D1232E', delay: 0.3 }
          ].map((wave, i) => (
            <motion.svg
              key={i}
              className="absolute top-0 h-[120%] w-[150vw] -translate-y-[10%] opacity-90"
              style={{ left: '-150vw', filter: 'blur(15px)' }}
              initial={{ x: 0 }}
              animate={{ x: '300vw' }}
              transition={{ duration: 1.8, delay: wave.delay, ease: "easeInOut" }}
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <path
                d="M20,0 C5,33 45,66 15,100 L45,100 C75,66 35,33 50,0 Z"
                fill={wave.color}
              />
            </motion.svg>
          ))}
        </div>
      )}
    </>
  );
}
