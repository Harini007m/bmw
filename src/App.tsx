import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

// Components
import Navbar from './components/Navbar';
import IntroAnimation from './components/IntroAnimation';

// Pages
import Home from './pages/Home';
import Models from './pages/Models';
import Experience from './pages/Experience';

import Store from './pages/Store';
import Services from './pages/Services';
import FAQ from './pages/FAQ';

const Account = () => <div className="pt-40 pb-20 container mx-auto px-6 h-[80vh] flex items-center justify-center text-white/20 uppercase tracking-[0.4em] italic font-bmw glass text-4xl">Account Coming Soon</div>;

function AppContent() {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('introPlayed_v2');
    if (hasPlayed) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('introPlayed_v2', 'true');
  };

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <IntroAnimation key="intro" onComplete={handleIntroComplete} />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/store" element={<Store />} />
            <Route path="/services" element={<Services />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          
          <footer className="py-20 bg-black border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center">
                  <span className="text-white font-bmw font-black text-sm italic">B</span>
                </div>
                <span className="text-white font-bmw font-bold text-xs uppercase tracking-[0.2em]">BMW</span>
              </div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">© 2026 BMW GROUP AG. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-8">
                {['Privacy', 'Legal', 'Cookies', 'Imprint'].map(item => (
                  <a key={item} href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
      <Analytics />
    </Router>
  );
}
