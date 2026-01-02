import React from "react";
import { cn } from "../../lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 animate-spotlight overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-50 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, ${
            fill || "var(--spotlight-fill)"
          }, transparent 80%)`,
          transform: "translate(-50%, -50%) rotate(-45deg) scale(0.8)",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};