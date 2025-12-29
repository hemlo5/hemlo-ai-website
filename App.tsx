import React from 'react';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { EmailClientDemo } from './components/EmailClientDemo';
import { MovieDownloadDemo } from './components/MovieDownloadDemo';
import { MeetingManagerDemo } from './components/MeetingManagerDemo';
import { CodingVibeDemo } from './components/CodingVibeDemo';
import { TravelAgentDemo } from './components/TravelAgentDemo';
import { PersonalShopperDemo } from './components/PersonalShopperDemo';
import { GooeyText } from './components/ui/gooey-text-morphing';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
            SplineUI
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">Features</a>
            <a href="#" className="hover:text-white transition-colors">Showcase</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
            <button className="px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-zinc-200 transition-colors">
              Download
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto space-y-32">
        
        {/* Hero Section */}
        <section className="w-full">
          <SplineSceneBasic />
        </section>

        {/* Automation Section */}
        <section className="flex flex-col gap-12">
          {/* Centered Title with Gooey Animation */}
          <div className="text-center w-full mx-auto flex flex-col items-center justify-center gap-2 mb-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white/50">
              Just a prompt for
            </h2>
            <div className="h-28 w-full relative">
                 <GooeyText 
                    texts={['Meetings', 'Downloads', 'Flights', 'Every digital task']} 
                    className="h-full w-full"
                    textClassName="text-4xl md:text-6xl font-bold leading-tight text-white"
                 />
            </div>
          </div>
          
          {/* Feature Grid: 6 Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* 1. Email Automation */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <EmailClientDemo />
            </div>
            
            {/* 2. Movie Download Automation */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <MovieDownloadDemo />
            </div>

            {/* 3. Meeting Manager */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <MeetingManagerDemo />
            </div>

            {/* 4. Coding Vibe */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <CodingVibeDemo />
            </div>

            {/* 5. Travel Agent */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <TravelAgentDemo />
            </div>

            {/* 6. Personal Shopper */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <PersonalShopperDemo />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full flex flex-col items-center justify-center text-center py-24 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950 pointer-events-none" />
             <div className="relative z-10 max-w-4xl px-6">
                 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm mb-8 backdrop-blur-sm">
                     <Sparkles size={16} className="text-yellow-400" />
                     <span>Limitless Automation</span>
                 </div>
                 <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-8 leading-tight tracking-tight">
                     Ask it to do anything.
                 </h2>
                 <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                     Create a workflow out of any prompt, which you can fire anytime. The only limit is your imagination.
                 </p>
                 <button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-950/80 gap-2">
                        Create Workflow
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                 </button>
             </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-8 pb-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© 2024 SplineUI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </footer>

      </main>
    </div>
  );
}