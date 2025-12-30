import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface RegistrationPageProps {
  onBack: () => void;
}

export function RegistrationPage({ onBack }: RegistrationPageProps) {
  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden font-sans text-white">
      
      {/* 1. Bottom Right Section (Lavender - Free Option) */}
      <div className="absolute inset-0 z-0 flex items-end justify-end bg-zinc-900">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=2070&auto=format&fit=crop" 
                alt="Lavender Field" 
                className="w-full h-full object-cover"
            />
             {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="relative z-10 p-8 md:p-16 text-right max-w-lg mb-12 md:mb-0">
             <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
             >
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">Global Waitlist</h2>
                <div className="text-3xl md:text-4xl font-light mb-6 text-white/90">Free</div>
                <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed drop-shadow-lg">
                    We'll notify you when we launch in your region. No credit card required.
                </p>
             </motion.div>
        </div>
      </div>

      {/* 2. Top Left Section (Sky - Title) */}
      <div 
        className="absolute inset-0 z-10 filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)' // Diagonal Split
        }}
      >
         <div className="absolute inset-0 bg-blue-900">
            <img 
                src="https://images.unsplash.com/photo-1507608869274-2c330136e85e?q=80&w=2564&auto=format&fit=crop" 
                alt="Sky" 
                className="w-full h-full object-cover"
            />
            {/* Gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
         </div>

         <div className="relative z-20 h-full p-8 md:p-16 flex flex-col justify-start">
             <button 
                onClick={onBack}
                className="w-fit flex items-center gap-2 text-white/80 hover:text-white transition-colors group mb-8 md:mb-12"
            >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full group-hover:bg-white/20 transition-colors shadow-lg">
                    <ArrowLeft size={20} />
                </div>
                <span className="font-mono text-sm tracking-widest uppercase shadow-black drop-shadow-md font-semibold">Back</span>
            </button>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-4 md:mt-12"
            >
                <div className="w-16 h-1 bg-white/50 mb-6 md:mb-8 backdrop-blur-sm" />
                <h1 className="text-6xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] drop-shadow-2xl">
                    BE ONE<br/>
                    OF THE<br/>
                    FIRST.
                </h1>
                <p className="mt-8 text-xl md:text-2xl text-white/90 font-medium max-w-md drop-shadow-lg">
                    Secure your spot in the future of automation.
                </p>
            </motion.div>
         </div>
      </div>
    </div>
  );
}