"use client"

import { motion } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/app/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export default function HeroSection({
  badge = "Pronosticon",
  title1 = "Descubre tus",
  title2 = "Resultados de Lotería",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-bgpink z-10">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green shadow-lg border border-green/80 mb-8 md:mb-12"
          >
            <span className="text-base font-bold text-white tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-bgpurple to-purple drop-shadow-md">{title1}</span>
              <br />
              <motion.span
                initial={{ textShadow: "0 0 0px rgba(249, 205, 146, 0)" }}
                animate={{ 
                  textShadow: [
                    "0 0 4px rgba(249, 205, 146, 0.3)",
                    "0 0 8px rgba(249, 205, 146, 0.5)",
                    "0 0 4px rgba(249, 205, 146, 0.3)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-orange via-purple to-orange",
                  pacifico.className,
                  "relative"
                )}
              >
                {title2}
                <span className="absolute -inset-1 bg-gradient-to-r from-orange/10 via-purple/5 to-orange/10 blur-xl -z-10"></span>
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-orange/20 blur-md"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-orange/20 blur-md"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-purple/20 blur-md"></div>
    </div>
  )
}
