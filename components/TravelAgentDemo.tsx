import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plane, Car, MapPin, QrCode } from 'lucide-react';

export function TravelAgentDemo() {
  const [step, setStep] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const isInViewRef = useRef(false);

  useEffect(() => { isInViewRef.current = isInView; }, [isInView]);

  useEffect(() => {
    let mounted = true;
    const loop = async () => {
      while (mounted) {
        if (!isInViewRef.current) {
            await new Promise(r => setTimeout(r, 1000));
            continue;
        }

        setStep(0); // Search
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(1); // Book Flight
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(2); // Book Cab
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(3); // Ticket
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    loop();
    return () => { mounted = false; };
  }, []);

  return (
    <Card ref={containerRef} className="w-full h-[400px] md:h-[500px] bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 overflow-hidden relative group transition-colors duration-300">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-100 via-white to-white dark:from-sky-950/20 dark:via-zinc-950 dark:to-zinc-950 opacity-50" />
       
       <div className="relative z-0 h-full w-full flex items-center justify-center pb-24 md:pb-32 px-4 will-change-transform">
          <AnimatePresence mode="wait">
             {step === 0 && (
                <motion.div 
                    key="search"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center animate-pulse">
                        <MapPin size={32} className="text-sky-500" />
                    </div>
                    <div className="bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-2 rounded-full text-zinc-600 dark:text-zinc-300 text-sm">
                        Planning trip to <span className="text-zinc-900 dark:text-white font-bold">Tokyo</span>...
                    </div>
                </motion.div>
             )}

             {step === 1 && (
                 <motion.div 
                     key="flight"
                     initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}
                     className="w-[280px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-lg"
                 >
                     <div className="flex justify-between items-center mb-4">
                         <span className="text-xs text-zinc-500">FLIGHT</span>
                         <Plane size={16} className="text-sky-500" />
                     </div>
                     <div className="flex justify-between items-center text-xl font-bold text-zinc-900 dark:text-white mb-2">
                         <span>NYC</span>
                         <div className="h-[2px] w-12 bg-zinc-300 dark:bg-zinc-700 relative">
                             <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-400 dark:bg-zinc-500 rounded-full" />
                         </div>
                         <span>TYO</span>
                     </div>
                     <div className="text-xs text-green-600 dark:text-green-500 flex items-center gap-1">
                         <span>✓ Booked</span>
                         <span className="text-zinc-500 ml-auto">$840</span>
                     </div>
                 </motion.div>
             )}
             
             {step === 2 && (
                 <motion.div 
                     key="cab"
                     initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}
                     className="w-[280px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-lg"
                 >
                     <div className="flex justify-between items-center mb-4">
                         <span className="text-xs text-zinc-500">TRANSFER</span>
                         <Car size={16} className="text-yellow-500" />
                     </div>
                     <div className="text-zinc-900 dark:text-white font-medium mb-1">Uber Black</div>
                     <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">Haneda Airport → Hotel</div>
                     <div className="text-xs text-green-600 dark:text-green-500 flex items-center gap-1">
                         <span>✓ Reserved</span>
                     </div>
                 </motion.div>
             )}

             {step === 3 && (
                 <motion.div 
                     key="pass"
                     initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                     className="w-[260px] bg-white text-black rounded-2xl overflow-hidden shadow-2xl relative"
                 >
                     <div className="h-4 bg-sky-500" />
                     <div className="p-6 flex flex-col items-center gap-4">
                         <div className="text-center">
                             <div className="text-xs font-bold text-zinc-400 tracking-widest uppercase">Boarding Pass</div>
                             <div className="text-2xl font-black mt-1">TYO</div>
                         </div>
                         <QrCode size={80} className="opacity-80" />
                         <div className="w-full bg-zinc-100 rounded py-2 text-center text-xs font-bold text-zinc-600">
                             Ready for takeoff
                         </div>
                     </div>
                 </motion.div>
             )}
          </AnimatePresence>
       </div>

       <div className="absolute bottom-0 left-0 right-0 z-20 h-1/2 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-lg">
                It books flights & cabs
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg max-w-lg font-medium drop-shadow-sm dark:drop-shadow-md">
                The ultimate travel agent that knows your preferences.
            </p>
        </div>
    </Card>
  )
}