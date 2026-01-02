"use client"

import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function AnimatedHemloTitle({ className }: { className?: string }) {
  return (
    <motion.h1
      className={cn(
        "text-[40px] sm:text-[70px] md:text-[90px] font-black leading-none tracking-tighter pb-4",
        "bg-clip-text text-transparent",
        "bg-[linear-gradient(90deg,#000_0%,#888_50%,#000_100%)]",
        "dark:bg-[linear-gradient(90deg,#FFF_0%,#888_50%,#FFF_100%)]",
        "bg-[length:200%_auto]",
        className
      )}
      initial={{ backgroundPosition: "0 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      HEMLO
    </motion.h1>
  )
}
