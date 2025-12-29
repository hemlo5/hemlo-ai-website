import React from 'react';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { EmailClientDemo } from './components/EmailClientDemo';
import { MovieDownloadDemo } from './components/MovieDownloadDemo';
import { GooeyText } from './components/ui/gooey-text-morphing';

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

      <main className="pt-24 pb-16 px-4 md:px-6 max-w-7xl mx-auto space-y-24">
        
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
          
          {/* Feature Grid: Side-by-Side Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Column: Email Automation */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <EmailClientDemo />
            </div>
            
            {/* Right Column: Movie Download Automation */}
            <div className="relative group">
               <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700"></div>
               <MovieDownloadDemo />
            </div>
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