'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Video, Mic, PhoneOff, Users, Calendar, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { Card } from './ui/card';

export function PromptAutomationDemo() {
  const [step, setStep] = useState<'idle' | 'typing' | 'processing' | 'response' | 'meeting'>('idle');
  const [inputValue, setInputValue] = useState("");
  
  const textToType = "create a meeting for me";

  useEffect(() => {
    let mounted = true;

    const runAnimation = async () => {
      while (mounted) {
        // Reset
        setStep('idle');
        setInputValue("");
        await new Promise(r => setTimeout(r, 1000));

        // Start Typing
        setStep('typing');
        for (let i = 1; i <= textToType.length; i++) {
          if (!mounted) return;
          setInputValue(textToType.slice(0, i));
          await new Promise(r => setTimeout(r, 50));
        }

        // Wait before send
        await new Promise(r => setTimeout(r, 600));

        // Send -> Processing
        setStep('processing');
        setInputValue("");
        await new Promise(r => setTimeout(r, 1200));

        // Show Response (Meeting Card)
        setStep('response');
        await new Promise(r => setTimeout(r, 2000));

        // Join Meeting
        setStep('meeting');
        await new Promise(r => setTimeout(r, 4000));
      }
    };

    runAnimation();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative flex flex-col">
      {/* Header */}
      <div className="h-12 border-b border-zinc-800 bg-zinc-900/50 flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        <div className="ml-auto text-xs text-zinc-500 font-mono">AI Assistant v2.0</div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden bg-black/20 p-6 flex flex-col">
        <AnimatePresence mode="wait">
          {step !== 'meeting' ? (
            <motion.div 
              key="chat-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col"
            >
              {/* Messages Area */}
              <div className="flex-1 space-y-4">
                {/* Initial Bot Greeting */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                    <Bot size={16} className="text-zinc-300" />
                  </div>
                  <div className="bg-zinc-800/50 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-zinc-300">
                    How can I help you today?
                  </div>
                </div>

                {/* User Message */}
                {(step === 'processing' || step === 'response') && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 flex-row-reverse"
                  >
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <User size={16} className="text-black" />
                    </div>
                    <div className="bg-white text-black rounded-2xl rounded-tr-sm px-4 py-2 text-sm font-medium">
                      {textToType}
                    </div>
                  </motion.div>
                )}

                {/* Bot Response (Meeting Card) */}
                {step === 'response' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                      <Bot size={16} className="text-zinc-300" />
                    </div>
                    <div className="space-y-2">
                      <div className="bg-zinc-800/50 border border-zinc-800 rounded-2xl rounded-tl-sm px-4 py-2 text-sm text-zinc-300">
                        I've scheduled that for you. Joining now...
                      </div>
                      <Card className="w-64 bg-zinc-900 border-zinc-700 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Calendar size={20} />
                          </div>
                          <div>
                            <div className="font-semibold text-white text-sm">Design Sync</div>
                            <div className="text-xs text-zinc-400">Project Alpha</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
                            <Clock size={12} />
                            <span>Now • 30 min</span>
                        </div>
                        <div className="w-full py-1.5 bg-white text-black text-center text-xs font-bold rounded cursor-pointer">
                            Join Meeting
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="mt-4 pt-4 border-t border-zinc-800/50">
                <div className="bg-zinc-900 border border-zinc-800 rounded-full h-12 px-4 flex items-center gap-3">
                    <div className="text-zinc-500">
                        <Bot size={18} />
                    </div>
                    <div className="flex-1 text-sm text-zinc-300">
                        {step === 'typing' && (
                            <motion.span>
                                {inputValue}
                                <span className="animate-pulse">|</span>
                            </motion.span>
                        )}
                        {step === 'idle' && <span className="text-zinc-600">Type a command...</span>}
                    </div>
                    <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-colors", inputValue.length > 0 ? "bg-white text-black" : "bg-zinc-800 text-zinc-500")}>
                        <Send size={14} />
                    </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="meeting-view"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-zinc-900 flex flex-col"
            >
                {/* Meeting Header */}
                <div className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="font-medium text-white text-sm">Design Sync</span>
                        <span className="text-zinc-500 text-xs px-2 py-0.5 bg-zinc-900 rounded border border-zinc-800">00:12</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                        <Users size={16} />
                        <span className="text-xs">4</span>
                    </div>
                </div>

                {/* Meeting Grid */}
                <div className="flex-1 p-4 grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">JD</div>
                        <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-1 rounded text-white">John Doe</div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold">AS</div>
                         <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-1 rounded text-white">Alice Smith</div>
                    </div>
                    <div className="bg-zinc-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold">MK</div>
                         <div className="absolute bottom-2 left-2 text-xs bg-black/50 px-2 py-1 rounded text-white">Mike K</div>
                    </div>
                    <div className="bg-zinc-950 border border-zinc-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                         <div className="text-zinc-500 text-sm">You</div>
                         <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                </div>

                {/* Meeting Controls */}
                <div className="h-16 bg-zinc-950 border-t border-zinc-800 flex items-center justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 cursor-pointer transition">
                        <Mic size={18} className="text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 cursor-pointer transition">
                        <Video size={18} className="text-white" />
                    </div>
                    <div className="w-12 h-10 rounded-full bg-red-500/20 text-red-500 border border-red-500/50 flex items-center justify-center hover:bg-red-500/30 cursor-pointer transition">
                        <PhoneOff size={18} />
                    </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}