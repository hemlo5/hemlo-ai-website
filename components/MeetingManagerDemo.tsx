import React, { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Calendar, Clock, Video, Users, CheckCircle2 } from 'lucide-react';

export function MeetingManagerDemo() {
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

        setStep(0); // Scanning
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(1); // Booked
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(2); // Joining
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    loop();
    return () => { mounted = false; };
  }, []);

  return (
    <Card ref={containerRef} className="w-full h-[400px] md:h-[500px] bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 overflow-hidden relative group transition-colors duration-300">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100 via-white to-white dark:from-orange-950/20 dark:via-zinc-950 dark:to-zinc-950 opacity-50" />
       
       <div className="relative z-0 h-full w-full flex items-center justify-center pb-24 md:pb-32 px-4 will-change-transform">
         <AnimatePresence mode="wait">
            {step === 0 && (
                <motion.div 
                    key="calendar"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                    className="w-[280px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-2xl"
                >
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Calendar Scan</span>
                        <Calendar size={16} className="text-orange-500" />
                    </div>
                    <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-10 bg-zinc-200/50 dark:bg-zinc-800/50 rounded flex items-center px-3 gap-3">
                                <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                <div className="h-2 w-24 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                            </div>
                        ))}
                         <motion.div 
                            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                            className="h-12 bg-orange-500/10 border border-orange-500/20 rounded flex items-center px-3 gap-3"
                        >
                             <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                             <div className="flex flex-col">
                                 <span className="text-orange-700 dark:text-orange-200 text-xs font-bold">Slot Found</span>
                                 <span className="text-orange-600/70 dark:text-orange-500/70 text-[10px]">2:00 PM - 2:30 PM</span>
                             </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}

            {step === 1 && (
                <motion.div 
                    key="booked"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="w-[280px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
                >
                    <div className="h-24 bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 p-4 flex flex-col justify-between">
                         <div className="flex justify-between text-white/80">
                             <Clock size={16} />
                             <span className="text-xs font-mono">CONFIRMED</span>
                         </div>
                         <div className="text-white font-bold text-lg">Product Sync</div>
                    </div>
                    <div className="p-4 space-y-3">
                        <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-300 text-sm">
                            <Users size={14} className="text-zinc-400 dark:text-zinc-500" />
                            <span>Design Team, +3 others</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-500 bg-green-500/10 w-fit px-2 py-1 rounded">
                            <CheckCircle2 size={12} />
                            <span>Invites sent</span>
                        </div>
                    </div>
                </motion.div>
            )}

            {step === 2 && (
                <motion.div 
                    key="joining"
                    initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }}
                    className="w-[300px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
                >
                    <div className="relative h-40 bg-zinc-100 dark:bg-zinc-900">
                         <div className="absolute inset-0 grid grid-cols-2 gap-0.5 p-0.5">
                             <div className="bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs">Waiting...</div>
                             <div className="bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs">Connecting...</div>
                             <div className="bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs">J. Doe</div>
                             <div className="bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center relative">
                                 <div className="w-2 h-2 rounded-full bg-green-500 absolute top-2 right-2" />
                                 <span className="text-zinc-900 dark:text-white font-bold">You</span>
                             </div>
                         </div>
                    </div>
                    <div className="p-3 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                             <span className="text-zinc-900 dark:text-white text-xs font-medium">Auto-joined</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-red-500/10 dark:bg-red-500/20 flex items-center justify-center text-red-600 dark:text-red-500">
                            <Video size={14} />
                        </div>
                    </div>
                </motion.div>
            )}
         </AnimatePresence>
       </div>

       <div className="absolute bottom-0 left-0 right-0 z-20 h-1/2 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-lg">
                It books & joins meetings
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg max-w-lg font-medium drop-shadow-sm dark:drop-shadow-md">
                Your calendar, managed perfectly without lifting a finger.
            </p>
        </div>
    </Card>
  )
}