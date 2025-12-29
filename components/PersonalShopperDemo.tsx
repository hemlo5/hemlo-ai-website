import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, RefreshCcw, DollarSign, TrendingDown } from 'lucide-react';

export function PersonalShopperDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let mounted = true;
    const loop = async () => {
      while (mounted) {
        setStep(0); // Buy
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(1); // Price Drop
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(2); // Refund
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    loop();
    return () => { mounted = false; };
  }, []);

  return (
    <Card className="w-full h-[400px] md:h-[500px] bg-zinc-950 border-zinc-800 overflow-hidden relative group">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-950/20 via-zinc-950 to-zinc-950 opacity-50" />
       
       <div className="relative z-0 h-full w-full flex items-center justify-center pb-24 md:pb-32 px-4">
           <AnimatePresence mode="wait">
               {step === 0 && (
                   <motion.div 
                       key="item"
                       initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                       className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex gap-4 items-center shadow-lg"
                   >
                       <div className="w-16 h-16 bg-zinc-800 rounded-md flex items-center justify-center">
                           <ShoppingBag className="text-pink-500" />
                       </div>
                       <div>
                           <div className="text-white font-bold">Retro Sneakers</div>
                           <div className="text-zinc-400 text-xs mb-1">Purchased</div>
                           <div className="text-white font-mono">$120.00</div>
                       </div>
                   </motion.div>
               )}

               {step === 1 && (
                   <motion.div 
                        key="drop"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-lg w-[240px]"
                   >
                       <div className="flex items-center gap-2 text-yellow-500 mb-2">
                           <TrendingDown size={18} />
                           <span className="font-bold text-sm">Price Drop Alert</span>
                       </div>
                       <div className="text-zinc-400 text-xs">Item now available for</div>
                       <div className="text-white font-mono text-xl font-bold">$100.00</div>
                       <div className="mt-2 text-[10px] text-zinc-500">Initiating refund claim...</div>
                   </motion.div>
               )}

               {step === 2 && (
                   <motion.div 
                        key="refund"
                        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                        className="bg-emerald-950/50 border border-emerald-500/30 p-6 rounded-full flex flex-col items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                   >
                       <div className="flex items-center gap-1 text-emerald-400 font-bold text-2xl">
                           <DollarSign size={24} strokeWidth={3} />
                           <span>20.00</span>
                       </div>
                       <div className="text-emerald-500/80 text-xs uppercase tracking-wider font-bold flex items-center gap-2">
                           <RefreshCcw size={12} />
                           Refunded
                       </div>
                   </motion.div>
               )}
           </AnimatePresence>
       </div>

       <div className="absolute bottom-0 left-0 right-0 z-20 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-lg">
                It shops & refunds
            </h3>
            <p className="text-zinc-300 text-base md:text-lg max-w-lg font-medium drop-shadow-md">
                Finds the best deals and handles the hassle of returns automatically.
            </p>
        </div>
    </Card>
  )
}