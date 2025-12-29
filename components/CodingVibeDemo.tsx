import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Zap, Code2 } from 'lucide-react';

export function CodingVibeDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let mounted = true;
    const loop = async () => {
      while (mounted) {
        setStep(0); // Prompt
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(1); // Architect AI
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) return;
        setStep(2); // Coder AI
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    loop();
    return () => { mounted = false; };
  }, []);

  return (
    <Card className="w-full h-[400px] md:h-[500px] bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 overflow-hidden relative group transition-colors duration-300">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 via-white to-white dark:from-blue-950/20 dark:via-zinc-950 dark:to-zinc-950 opacity-50" />
       
       <div className="relative z-0 h-full w-full flex items-center justify-center pb-24 md:pb-32 px-4">
          <div className="w-full max-w-[340px] bg-zinc-900 dark:bg-black/80 border border-zinc-700 dark:border-zinc-800 rounded-lg overflow-hidden font-mono text-xs shadow-2xl">
             <div className="h-8 bg-zinc-800 dark:bg-zinc-900 border-b border-zinc-700 dark:border-zinc-800 flex items-center px-3 gap-2">
                 <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                 </div>
                 <div className="ml-2 text-zinc-400 dark:text-zinc-500">vibe-coder — zsh</div>
             </div>
             <div className="p-4 h-[240px] overflow-hidden relative">
                 <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div 
                            key="prompt"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="space-y-2"
                        >
                            <div className="text-green-400">➜  ~ <span className="text-white">create a landing page for crypto app</span></div>
                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                                className="text-zinc-500 mt-2"
                            >
                                Analyzing request...
                            </motion.div>
                        </motion.div>
                    )}

                    {step === 1 && (
                        <motion.div 
                            key="architect"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="space-y-3"
                        >
                             <div className="flex items-center gap-2 text-blue-400 border-b border-blue-900/30 pb-2">
                                 <Cpu size={14} />
                                 <span className="font-bold">Architect AI</span>
                             </div>
                             <div className="text-zinc-300 space-y-1">
                                 <div>> Defining component structure</div>
                                 <div>> Selecting Framer Motion</div>
                                 <div>> Generating prompt for Coder AI...</div>
                             </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div 
                            key="coder"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="space-y-3"
                        >
                             <div className="flex items-center gap-2 text-purple-400 border-b border-purple-900/30 pb-2">
                                 <Zap size={14} />
                                 <span className="font-bold">Coder AI</span>
                             </div>
                             <div className="text-zinc-400 opacity-50 text-[10px] leading-tight">
                                 {`import React from 'react';
export function CryptoHero() {
  return (
    <div className="relative">
       <h1 className="text-6xl">Future</h1>
       <motion.div animate={{ y: 10 }}>`}
                             </div>
                             <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                                className="mt-4 bg-zinc-800 dark:bg-zinc-900 border border-zinc-700 rounded p-3"
                             >
                                 <div className="flex items-center justify-between text-white mb-2">
                                     <span className="font-bold">Preview</span>
                                     <Code2 size={12} />
                                 </div>
                                 <div className="h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md opacity-80" />
                             </motion.div>
                        </motion.div>
                    )}
                 </AnimatePresence>
             </div>
          </div>
       </div>

       <div className="absolute bottom-0 left-0 right-0 z-20 h-1/2 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-2 leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-lg">
                It vibe codes for you
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg max-w-lg font-medium drop-shadow-sm dark:drop-shadow-md">
                Now even prompts are given by AI to other AI.
            </p>
        </div>
    </Card>
  )
}