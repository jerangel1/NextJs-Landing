"use client"

import { motion } from "framer-motion"
import { Pacifico, Montserrat } from "next/font/google"
import { cn } from "@/app/lib/utils"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-montserrat",
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
    <div className="relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden bg-bgpink">
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-purple shadow-lg border border-gold mb-8 md:mb-12"
          >
            <span className="text-base font-bold text-white tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-bgpurple to-purple drop-shadow-md ",
                montserrat.className,
              )}>{title1}</span>
              <br />
              <motion.span
                initial={{ backgroundPosition: "200% center" }}
                animate={{ 
                  backgroundPosition: ["-200% center", "200% center"]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className={cn(
                  "inline-block bg-[length:200%_auto] bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#9B4DCA] to-[#FFD700] font-bold",
                  montserrat.className,
                  "relative"
                )}
                style={{
                  WebkitTextStroke: "1px rgba(255,215,0,0.1)"
                }}
              >
                {title2}
                <span className="absolute -inset-1 bg-gradient-to-r from-[#FFD700]/10 via-[#9B4DCA]/5 to-[#FFD700]/10 blur-xl -z-10"></span>
              </motion.span>
            </h1>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#FFD700]/20 blur-md"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-[#FFD700]/20 blur-md"></div>
      <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-[#9B4DCA]/20 blur-md"></div>
    </div>
  )
}
