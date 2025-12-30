'use client'

import React from "react";
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
import { AnimatedText } from "./ui/animated-shiny-text";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[800px] md:h-[600px] bg-white dark:bg-black/[0.96] relative overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-none transition-colors duration-300">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center items-center text-center">
          
          <AnimatedText 
            text="HEMLO"
            className="justify-center py-0 mb-2"
            textClassName="text-[100px] sm:text-[180px] font-black leading-none tracking-tighter"
            // Use CSS variables defined in index.html to adapt to theme
            gradientColors="linear-gradient(90deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))"
            gradientAnimationDuration={2}
            hoverEffect={false}
          />

          <p className="mt-2 text-zinc-600 dark:text-white max-w-lg text-lg text-center font-medium">
            Your every digital task is now done by Hemlo
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-zinc-700 dark:hover:bg-neutral-200 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full border border-zinc-300 dark:border-neutral-700 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-neutral-900 transition">
              View Gallery
            </button>
          </div>
        </div>

        {/* Right content - Robot restored on all devices */}
        <div className="flex-1 relative min-h-[400px] md:min-h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}