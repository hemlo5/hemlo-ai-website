import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Sparkles, Mail, Globe, Zap, ShieldCheck } from 'lucide-react';
import { Card } from './ui/card';
import { AnimatedText } from './ui/animated-shiny-text';

interface RegistrationPageProps {
  onBack: () => void;
}

export function RegistrationPage({ onBack }: RegistrationPageProps) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white p-4 md:p-8 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={onBack}
            className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>
          <div className="ml-auto text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-500">
            HEMLO
          </div>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-zinc-900 dark:text-white">Choose your access level</h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg">Join the revolution in digital automation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Option 1: Early Access (Paid) - Hero Theme Applied */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="relative group"
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse"></div>
            
            <Card className="h-full relative overflow-hidden border-transparent bg-white dark:bg-black rounded-3xl shadow-2xl flex flex-col">
              {/* Shine effect inside */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 pointer-events-none" />
              
              <div className="p-8 relative z-10 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                      <Zap className="text-indigo-500" size={24} />
                   </div>
                   <div className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg shadow-indigo-500/20 flex items-center gap-1">
                      <Sparkles size={12} />
                      EARLY BIRD
                   </div>
                </div>

                <div className="mb-2 -ml-1">
                   <AnimatedText 
                      text="First 1000 Users"
                      className="py-0 justify-start"
                      textClassName="text-2xl md:text-3xl font-bold text-left"
                      gradientColors="linear-gradient(90deg, #6366f1, #a855f7, #ec4899)"
                      gradientAnimationDuration={3}
                   />
                </div>
                
                <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                   Get immediate access to the beta and help shape the future of Hemlo.
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-zinc-900 dark:text-white">$5</span>
                  <span className="text-zinc-500 dark:text-zinc-400">/ one-time</span>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                   <span>Secure My Spot</span>
                   <ArrowLeft className="rotate-180" size={18} />
                </button>

                <div className="mt-8 space-y-4">
                   <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check size={16} className="text-indigo-500" />
                      <span>Instant Access to Beta v1.0</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check size={16} className="text-indigo-500" />
                      <span>"Early Adopter" Profile Badge</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check size={16} className="text-indigo-500" />
                      <span>Lifetime Discount on Pro Plans</span>
                   </div>
                   <div className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <Check size={16} className="text-indigo-500" />
                      <span>Direct Developer Support</span>
                   </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Option 2: Worldwide (Free) - Clean Theme */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
              <div className="p-8">
                 <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
                      <Globe className="text-zinc-600 dark:text-zinc-400" size={24} />
                   </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">Global Launch</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-6 text-sm">
                   Join the waitlist to be notified when Hemlo is available worldwide.
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-zinc-900 dark:text-white">Free</span>
                  <span className="text-zinc-500 dark:text-zinc-400">/ registration</span>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase">Email Address</label>
                     <div className="relative">
                        <input 
                           type="email" 
                           placeholder="you@example.com" 
                           className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:ring-2 focus:ring-zinc-500 transition-all text-zinc-900 dark:text-white"
                        />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                     </div>
                  </div>
                  
                  <button className="w-full py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg">
                     Join Waitlist
                  </button>

                  <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white dark:bg-zinc-950 px-2 text-zinc-500">Or continue with</span>
                      </div>
                  </div>

                  <button className="w-full py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
                     <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                     </svg>
                     Google
                  </button>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
        
        <div className="mt-12 text-center text-sm text-zinc-500 flex items-center justify-center gap-2">
            <ShieldCheck size={14} />
            <span>Secure payment processing powered by Stripe. No hidden fees.</span>
        </div>

      </div>
    </div>
  );
}