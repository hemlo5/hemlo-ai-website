'use client'

import React, { useEffect } from "react";
import { Card } from "./ui/card"
import { AnimatedHemloTitle } from "./ui/animated-hemlo-title";
import { Spotlight } from "./ui/spotlight";

export function SplineSceneBasic() {
  
  useEffect(() => {
    // Dynamically load the Spline Viewer script
    const scriptId = "spline-viewer-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.12.32/build/spline-viewer.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-zinc-800 shadow-2xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-50"
        fill="white"
      />
      
      {/* Optimized Background - Static Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/20 via-zinc-900/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center text-left items-start pl-8 md:pl-16">
          <AnimatedHemloTitle className="text-left text-5xl md:text-7xl lg:text-8xl pb-2 bg-[linear-gradient(90deg,#FFF_0%,#888_50%,#FFF_100%)]" />
          
          <p className="mt-4 text-neutral-300 max-w-lg text-lg md:text-xl font-medium">
             Your every digital task is now done by Hemlo.
             <br/>
             <span className="text-sm text-neutral-500 font-normal mt-2 block">
                Interact with the bot on the right →
             </span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3.5 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition shadow-lg active:scale-95">
              Get Started
            </button>
            <button className="px-8 py-3.5 rounded-full border border-neutral-700 bg-black/50 backdrop-blur-md text-white font-semibold hover:bg-neutral-900 transition shadow-lg">
              View Gallery
            </button>
          </div>
        </div>

        {/* Right content - Spline Viewer Web Component */}
        <div className="flex-1 relative h-[400px] md:h-full w-full flex items-center justify-center">
            {/* @ts-ignore */}
            <spline-viewer 
                loading-anim-type="spinner-small-dark" 
                url="https://prod.spline.design/cRDm5AVK7sAKdpco/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
            ></spline-viewer>
        </div>
      </div>
    </Card>
  )
}