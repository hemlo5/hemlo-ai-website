import React from 'react';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { CursorSpotlight } from './components/ui/cursor-spotlight';
import { Box, Layers, Zap } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="relative group">
    {/* Use the CursorSpotlight here for a nice effect on hover */}
    <div className="absolute inset-0 rounded-lg overflow-hidden">
        <CursorSpotlight className="from-blue-500/20 via-purple-500/20 to-pink-500/20" size={300} />
    </div>
    
    <Card className="relative bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
          <Icon size={24} />
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-zinc-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  </div>
);

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

        {/* Features Section */}
        <section>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-zinc-400">Everything you need to create stunning 3D interfaces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Box}
              title="3D Integration"
              description="Seamlessly integrate Spline scenes directly into your React application with zero friction."
            />
            <FeatureCard 
              icon={Zap}
              title="High Performance"
              description="Optimized loading states and lazy loading ensure your app stays fast and responsive."
            />
            <FeatureCard 
              icon={Layers}
              title="Interactive"
              description="Create rich, interactive experiences that respond to user input and mouse movement."
            />
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