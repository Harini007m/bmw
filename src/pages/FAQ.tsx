import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    category: 'Vehicles & Ordering',
    questions: [
      { q: 'How long is the delivery time for a custom-built BMW M?', a: 'Delivery times vary based on model and individual configuration. Typically, custom builds take between 8 to 14 weeks from order confirmation to delivery.' },
      { q: 'Can I track my BMW during production?', a: 'Yes. Once your order is confirmed, you will receive a tracking code to monitor your vehicle\'s progress through the My BMW App.' },
    ]
  },
  {
    category: 'Electric & Charging',
    questions: [
      { q: 'What is the real-world range of BMW i models?', a: 'Real-world range depends on driving style, terrain, and climate. For example, the BMW i4 eDrive40 offers up to 300 miles of estimated range under normal conditions.' },
      { q: 'How fast can I charge at public stations?', a: 'BMW electric vehicles support DC fast charging up to 205 kW, allowing you to charge from 10% to 80% in approximately 30 minutes.' },
    ]
  },
  {
    category: 'Digital Services',
    questions: [
      { q: 'Is the My BMW App free to use?', a: 'Yes, the core features of the My BMW App are free. Some advanced ConnectedDrive services may require an active subscription after the initial trial period.' },
    ]
  }
];

export default function FAQ() {
  const [openQ, setOpenQ] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Information</span>
          <h1 className="text-5xl md:text-6xl font-bmw font-black text-white italic tracking-tighter uppercase mb-6">
            Frequently Asked
          </h1>
          <p className="text-white/40 max-w-xl mx-auto">Everything you need to know about purchasing, owning, and driving the ultimate driving machine.</p>
        </div>

        <div className="space-y-12">
          {faqs.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-xl font-bmw font-bold text-white uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                {section.category}
              </h2>
              
              <div className="space-y-4">
                {section.questions.map((faq) => {
                  const isOpen = openQ === faq.q;
                  return (
                    <div key={faq.q} className="border border-white/10 bg-white/5 overflow-hidden">
                      <button 
                        onClick={() => setOpenQ(isOpen ? null : faq.q)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="text-sm font-bold text-white tracking-wide">{faq.q}</span>
                        {isOpen ? <Minus size={16} className="text-primary flex-shrink-0" /> : <Plus size={16} className="text-white/40 flex-shrink-0" />}
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="px-6 pb-5 text-white/50 text-sm leading-relaxed"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-white/40 text-sm mb-6">Still have questions?</p>
          <button className="px-8 py-3 border border-primary text-primary font-bold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
