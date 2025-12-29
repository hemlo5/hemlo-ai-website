'use client'

import React from "react";
import { SplineScene } from "./ui/spline";
import { Card } from "./ui/card"
import { Spotlight } from "./ui/spotlight"
import { AnimatedText } from "./ui/animated-shiny-text";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden border-zinc-800">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          
          <AnimatedText 
            text="HEMLO"
            className="justify-start py-0 mb-2"
            textClassName="text-6xl md:text-8xl font-black"
            gradientColors="linear-gradient(90deg, #71717a, #ffffff, #71717a)"
            gradientAnimationDuration={3}
            hoverEffect={true}
          />

          <p className="mt-2 text-neutral-300 max-w-lg text-lg">
            your personal ai butler
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition">
              Get Started
            </button>
            <button className="px-6 py-3 rounded-full border border-neutral-700 text-white font-semibold hover:bg-neutral-900 transition">
              View Gallery
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[300px] md:min-h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}