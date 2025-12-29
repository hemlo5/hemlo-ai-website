import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Play, Check, Film, Wifi } from 'lucide-react';

export function MovieDownloadDemo() {
  const [step, setStep] = useState(0); // 0: idle, 1: downloading, 2: complete
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    const runAnimationLoop = async () => {
      while (mounted) {
        // Step 0: Idle
        setStep(0);
        setProgress(0);
        await new Promise(r => setTimeout(r, 2000));
        
        if (!mounted) return;

        // Step 1: Downloading
        setStep(1);
        const duration = 2000;
        const interval = 20;
        const steps = duration / interval;
        
        for (let i = 0; i <= steps; i++) {
            if (!mounted) return;
            setProgress((i / steps) * 100);
            await new Promise(r => setTimeout(r, interval));
        }

        if (!mounted) return;

        // Step 2: Complete
        setStep(2);
        await new Promise(r => setTimeout(r, 3000));
      }
    };

    runAnimationLoop();
    return () => { mounted = false; };
  }, []);

  return (
    <Card className="w-full h-[400px] md:h-[500px] bg-zinc-950 border-zinc-800 overflow-hidden relative group">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/20 via-zinc-950 to-zinc-950 opacity-50" />
        
        {/* Content Container */}
        <div className="relative z-0 h-full w-full flex items-center justify-center pb-24 md:pb-32 px-4">
             <div className="w-full max-w-[320px] bg-zinc-900/90 border border-zinc-800 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                {/* Movie Poster Area */}
                <div className="h-40 bg-black relative overflow-hidden group/poster">
                    <img 
                        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop" 
                        alt="Movie Poster"
                        className="w-full h-full object-cover opacity-80 group-hover/poster:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10">
                        4K HDR
                    </div>
                </div>

                {/* Movie Info */}
                <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                        <div>
                            <h4 className="text-zinc-100 font-bold text-lg leading-tight">Cyberpunk Horizons</h4>
                            <div className="text-zinc-500 text-xs mt-1 flex items-center gap-2">
                                <span>2024</span> • <span>Sci-Fi</span> • <span>2h 15m</span>
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
                             <Film size={14} />
                        </div>
                    </div>

                    {/* Action Area */}
                    <div className="mt-4 bg-zinc-950 rounded-lg p-3 border border-zinc-800/50">
                        <AnimatePresence mode="wait">
                            {step === 0 && (
                                <motion.div 
                                    key="idle"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="flex items-center justify-between"
                                >
                                    <span className="text-xs text-zinc-400">8.4 GB</span>
                                    <div className="flex items-center gap-2 text-xs font-semibold bg-white text-black px-3 py-1.5 rounded-full shadow-lg shadow-white/5">
                                        <Download size={12} />
                                        <span>Download</span>
                                    </div>
                                </motion.div>
                            )}
                            
                            {step === 1 && (
                                <motion.div 
                                    key="downloading"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    className="space-y-2"
                                >
                                    <div className="flex justify-between text-[10px] font-medium text-zinc-300">
                                        <div className="flex items-center gap-1.5">
                                            <Wifi size={10} className="text-indigo-400" />
                                            <span className="animate-pulse">Downloading...</span>
                                        </div>
                                        <span>{Math.round(progress)}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div 
                                            className="h-full bg-indigo-500 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ ease: "linear" }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-[10px] text-zinc-600 font-mono">
                                        <span>85.2 MB/s</span>
                                        <span>~45s remaining</span>
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div 
                                    key="complete"
                                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-1.5 text-emerald-500 text-xs font-medium">
                                        <Check size={12} />
                                        <span>Ready to watch</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-bold bg-white text-black px-4 py-1.5 rounded-full cursor-pointer hover:scale-105 transition-transform">
                                        <Play size={10} fill="currentColor" />
                                        <span>Play Now</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
             </div>
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
                It downloads movies
            </h3>
            <p className="text-zinc-300 text-lg max-w-lg font-medium drop-shadow-md">
                Finds, downloads, and organizes your entertainment automatically.
            </p>
        </div>
    </Card>
  );
}