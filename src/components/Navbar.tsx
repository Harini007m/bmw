import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Models', href: '/models' },
  { name: 'Store', href: '/store' },
  { name: 'Services', href: '/services' },
  { name: 'Experience', href: '/experience' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4 glass-dark shadow-2xl" : "py-6 bg-black/40 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-white font-bmw font-black text-xl italic">B</span>
          </div>
          <span className="text-white font-bmw font-bold tracking-[0.2em] uppercase text-sm hidden md:block">
            BMW
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.href}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group",
                location.pathname === item.href ? "text-primary" : "text-white/60 hover:text-white"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-primary transition-all",
                location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors"><Search size={18} /></button>
          <Link to="/account" className="text-white/60 hover:text-white transition-colors"><User size={18} /></Link>
          <button className="text-white/60 hover:text-white transition-colors relative">
            <ShoppingCart size={18} />
            <span className="absolute -top-2 -right-2 bg-primary text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold text-white">0</span>
          </button>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[72px] bg-black/95 z-40 lg:hidden flex flex-col p-12 gap-10"
          >
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bmw font-black uppercase tracking-widest text-white/40 hover:text-primary transition-all underline-offset-8 hover:underline"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
