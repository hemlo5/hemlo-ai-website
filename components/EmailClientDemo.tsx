import React, { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Sparkles, Paperclip } from 'lucide-react';

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 25); // Typing speed
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

export function EmailClientDemo() {
  const [step, setStep] = useState(0); // 0: idle, 1: typing, 2: sending, 3: success

  useEffect(() => {
    let mounted = true;
    const runAnimationLoop = async () => {
      while (mounted) {
        // Step 1: Start Typing
        setStep(1);
        await new Promise(r => setTimeout(r, 3000)); // Wait for typing to finish

        if (!mounted) return;

        // Step 2: Send
        setStep(2);
        await new Promise(r => setTimeout(r, 800)); // Wait for exit animation

        if (!mounted) return;

        // Step 3: Success State
        setStep(3);
        await new Promise(r => setTimeout(r, 1500)); // Show success

        if (!mounted) return;
        
        // Reset
        setStep(0); 
        await new Promise(r => setTimeout(r, 500)); // Brief pause before restart
      }
    };

    runAnimationLoop();
    return () => { mounted = false; };
  }, []);

  return (
    <Card className="w-full h-[400px] md:h-[500px] bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 overflow-hidden relative group transition-colors duration-300">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-100 via-white to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-950 opacity-50" />
        
        {/* Animation Container - Centered and pushed up slightly to avoid text overlap */}
        <div className="relative z-0 h-full w-full flex items-center justify-center pb-24 md:pb-32 px-4">
             <AnimatePresence mode="wait">
                 {(step === 0 || step === 1) && (
                     <motion.div 
                        key="compose-card"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                        className="w-full max-w-[340px] bg-zinc-50/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
                     >
                        {/* Header */}
                        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3 bg-zinc-50/50 dark:bg-zinc-900/50">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-500/20 dark:border-indigo-500/30">
                                AI
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-0.5">Generating Draft</div>
                                <div className="text-xs text-zinc-900 dark:text-zinc-300 truncate font-medium">Subject: Q3 Performance Review</div>
                            </div>
                            <Paperclip size={14} className="text-zinc-400 dark:text-zinc-600" />
                        </div>
                        
                        {/* Body */}
                        <div className="p-5 h-40 font-mono text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed overflow-hidden relative">
                             {step === 0 && (
                               <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500">
                                 <Sparkles size={14} className="animate-pulse" />
                                 <span>Thinking...</span>
                               </div>
                             )}
                             {step >= 1 && (
                                <div className="text-zinc-900 dark:text-zinc-100">
                                   <TypingText text="Hi Team, I've analyzed the Q3 data. Revenue is up 15% YoY. I've attached the full report for tomorrow's sync." />
                                   <span className="inline-block w-1.5 h-4 bg-indigo-500 ml-1 align-middle animate-pulse" />
                                </div>
                             )}
                        </div>

                        {/* Footer / Send Button */}
                        <div className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-full text-xs font-bold shadow-lg shadow-black/5 dark:shadow-white/10">
                                <span>Send</span>
                                <Send size={12} className={step === 1 ? "animate-pulse" : ""} />
                            </div>
                        </div>
                     </motion.div>
                 )}
                 
                 {step === 2 && (
                     <motion.div
                        key="sending-card"
                        initial={{ y: 0, opacity: 1, scale: 1 }}
                        animate={{ y: -300, opacity: 0, scale: 0.9, rotate: 2 }}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                        className="w-full max-w-[340px] bg-zinc-50/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden absolute"
                     >
                        {/* Static visual of the card for smooth exit transition */}
                        <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3 bg-zinc-50/50 dark:bg-zinc-900/50">
                            <div className="w-8 h-8 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-xs font-bold border border-indigo-500/20 dark:border-indigo-500/30">AI</div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-0.5">Generating Draft</div>
                                <div className="text-xs text-zinc-900 dark:text-zinc-300 truncate font-medium">Subject: Q3 Performance Review</div>
                            </div>
                            <Paperclip size={14} className="text-zinc-400 dark:text-zinc-600" />
                        </div>
                        <div className="p-5 h-40 font-mono text-sm text-zinc-900 dark:text-zinc-100 leading-relaxed">
                            Hi Team, I've analyzed the Q3 data. Revenue is up 15% YoY. I've attached the full report for tomorrow's sync.
                        </div>
                        <div className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex justify-end">
                            <div className="flex items-center gap-2 px-4 py-1.5 bg-white text-black rounded-full text-xs font-bold shadow-lg">
                                <span>Send</span>
                                <Send size={12} />
                            </div>
                        </div>
                     </motion.div>
                 )}

                 {step === 3 && (
                    <motion.div
                        key="success-icon"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0 }}
                        className="absolute flex flex-col items-center gap-3 bg-white/80 dark:bg-zinc-900/80 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
                    >
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20 dark:border-emerald-500/50 text-emerald-600 dark:text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                            <Check size={24} strokeWidth={3} />
                        </div>
                        <div className="text-zinc-900 dark:text-white font-semibold text-sm">Sent Successfully</div>
                    </motion.div>
                 )}
             </AnimatePresence>
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-1/2 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent dark:from-black dark:via-black/80 dark:to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight tracking-tight drop-shadow-sm dark:drop-shadow-lg">
                It does your emails
            </h3>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg max-w-lg font-medium drop-shadow-sm dark:drop-shadow-md">
                Seamlessly drafted by AI, perfectly timed for you.
            </p>
        </div>
    </Card>
  );
}