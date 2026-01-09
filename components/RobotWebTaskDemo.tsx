'use client'

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Check, Search, Menu, MoreVertical, Star, Bot, Loader2 } from 'lucide-react';

export function RobotWebTaskDemo() {
  const [items, setItems] = useState([
    { id: 1, title: 'Invoice #001', status: 'pending', amount: '$1,200' },
    { id: 2, title: 'Invoice #002', status: 'pending', amount: '$850' },
    { id: 3, title: 'Invoice #003', status: 'pending', amount: '$2,300' },
    { id: 4, title: 'Invoice #004', status: 'pending', amount: '$450' },
  ]);
  const [processing, setProcessing] = useState(false);
  const cursorControls = useAnimation();
  const scrollControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    let mounted = true;

    const sequence = async () => {
      while (mounted) {
        // --- RESET STATE ---
        setItems([
            { id: 1, title: 'Invoice #001', status: 'pending', amount: '$1,200' },
            { id: 2, title: 'Invoice #002', status: 'pending', amount: '$850' },
            { id: 3, title: 'Invoice #003', status: 'pending', amount: '$2,300' },
            { id: 4, title: 'Invoice #004', status: 'pending', amount: '$450' },
        ]);
        setProcessing(false);
        scrollControls.set({ y: 0 });
        cursorControls.set({ x: 300, y: 300, opacity: 0 });
        
        await new Promise(r => setTimeout(r, 1000));
        if (!mounted) break;

        // --- 1. ENTER CURSOR ---
        await cursorControls.start({ opacity: 1, x: 200, y: 200, transition: { duration: 0.5 } });
        
        // --- 2. MOVE TO BUTTON ---
        // Target: ~85% width, top right area
        await cursorControls.start({ x: 340, y: 70, transition: { duration: 1, ease: "easeInOut" } });
        
        // --- 3. CLICK BUTTON ---
        await cursorControls.start({ scale: 0.8, transition: { duration: 0.1 } });
        await buttonControls.start({ scale: 0.95, transition: { duration: 0.1 } });
        
        setProcessing(true);
        
        await buttonControls.start({ scale: 1, transition: { duration: 0.1 } });
        await cursorControls.start({ scale: 1, transition: { duration: 0.1 } });
        
        // Move cursor away slightly to see the button effect
        cursorControls.start({ x: 300, y: 150, transition: { duration: 0.8 } });

        // --- 4. PROCESS ITEMS SEQUENTIALLY ---
        for (let i = 0; i < 4; i++) {
           if (!mounted) break;
           await new Promise(r => setTimeout(r, 400));
           setItems(prev => {
             const newItems = [...prev];
             if (newItems[i]) newItems[i].status = 'complete';
             return newItems;
           });
        }
        
        if (!mounted) break;
        await new Promise(r => setTimeout(r, 500));
        setProcessing(false); // Done state

        // --- 5. SCROLL DOWN ---
        scrollControls.start({ y: -120, transition: { duration: 2, ease: "easeInOut" } });
        
        // Move cursor to "browse"
        await cursorControls.start({ x: 150, y: 250, transition: { duration: 1.5, ease: "easeInOut" } });
        
        // Hover an item
        await cursorControls.start({ x: 200, y: 200, transition: { duration: 0.5 } });
        await new Promise(r => setTimeout(r, 1500));

        // --- 6. EXIT ---
        await cursorControls.start({ opacity: 0, x: 400, y: 400, transition: { duration: 0.5 } });
        await new Promise(r => setTimeout(r, 1000));
      }
    };

    sequence();

    return () => { mounted = false; };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 md:p-12 select-none pointer-events-none">
       {/* Browser Window */}
       <div className="w-full max-w-[400px] aspect-[4/3] bg-white dark:bg-zinc-900 rounded-xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 relative ring-1 ring-zinc-900/5 dark:ring-white/10">
          
          {/* Header */}
          <div className="h-9 bg-zinc-50 dark:bg-zinc-800/80 border-b border-zinc-200 dark:border-zinc-700/50 flex items-center px-3 gap-2 backdrop-blur-sm z-20 relative">
             <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 border border-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 border border-yellow-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 border border-green-500/20" />
             </div>
             <div className="flex-1 ml-2 bg-white dark:bg-zinc-950/50 h-5 rounded border border-zinc-200 dark:border-zinc-700/50 text-[10px] flex items-center justify-center text-zinc-400 font-medium">
                hemlo.ai/tasks
             </div>
          </div>

          {/* Viewport */}
          <div className="absolute inset-0 top-9 bg-zinc-50/50 dark:bg-black/20 overflow-hidden">
             {/* Scrollable Content */}
             <motion.div 
                animate={scrollControls} 
                className="p-5"
             >
                {/* Dashboard Header */}
                <div className="flex justify-between items-center mb-6">
                   <div>
                       <h2 className="text-lg font-bold text-zinc-800 dark:text-white leading-tight">Pending Tasks</h2>
                       <p className="text-[10px] text-zinc-500">4 items require attention</p>
                   </div>
                   <motion.div animate={buttonControls}>
                        <div 
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all duration-300 flex items-center gap-1.5 border ${
                                processing && items.every(i => i.status === 'complete')
                                ? 'bg-green-600 text-white border-green-500 shadow-md shadow-green-500/20'
                                : processing 
                                    ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border-zinc-200 dark:border-zinc-700' 
                                    : 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
                            }`}
                        >
                            {processing && !items.every(i => i.status === 'complete') && <Loader2 size={10} className="animate-spin" />}
                            {items.every(i => i.status === 'complete') 
                                ? 'All Done' 
                                : processing 
                                    ? 'Processing...' 
                                    : 'Process All'
                            }
                        </div>
                   </motion.div>
                </div>

                {/* List Items */}
                <div className="space-y-2.5">
                   {items.map((item) => (
                      <motion.div 
                        key={item.id}
                        layout
                        className={`p-2.5 rounded-lg border transition-all duration-300 flex items-center justify-between group ${
                            item.status === 'complete' 
                                ? 'bg-white dark:bg-zinc-900/50 border-green-200 dark:border-green-900/30 shadow-sm' 
                                : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 shadow-sm'
                        }`}
                      >
                         <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-[4px] flex items-center justify-center border transition-colors duration-300 ${
                                item.status === 'complete' ? 'bg-green-500 border-green-500 text-white' : 'border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-800'
                            }`}>
                               {item.status === 'complete' && <Check size={10} strokeWidth={4} />}
                            </div>
                            <div>
                                <div className={`text-xs font-semibold transition-colors duration-300 ${item.status === 'complete' ? 'text-zinc-400 line-through' : 'text-zinc-700 dark:text-zinc-200'}`}>
                                    {item.title}
                                </div>
                            </div>
                         </div>
                         <div className="flex items-center gap-3">
                            <span className="text-[10px] text-zinc-400 font-mono">{item.amount}</span>
                            <div className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider transition-colors duration-300 ${
                                item.status === 'complete' 
                                    ? 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400' 
                                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500'
                            }`}>
                                {item.status === 'complete' ? 'Paid' : 'Due'}
                            </div>
                         </div>
                      </motion.div>
                   ))}
                   
                   {/* Ghost items for scrolling context */}
                   <div className="space-y-2.5 pt-2 opacity-30 dark:opacity-20 grayscale">
                        <div className="h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-800 border-dashed" />
                        <div className="h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-800 border-dashed" />
                        <div className="h-10 bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-800 border-dashed" />
                   </div>
                </div>
             </motion.div>

             {/* Robot Cursor */}
             <motion.div
                animate={cursorControls}
                className="absolute z-50 drop-shadow-2xl"
                style={{ top: 0, left: 0 }}
             >
                <div className="relative">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-900 dark:text-white drop-shadow-lg">
                        <path d="M7 4L14.5 24L18 16.5L25.5 13L7 4Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                    </svg>
                    <div className="absolute top-6 left-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-[9px] font-bold px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
                       AI Agent
                    </div>
                </div>
             </motion.div>
          </div>
       </div>
    </div>
  );
}
