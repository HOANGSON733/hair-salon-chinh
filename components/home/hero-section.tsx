"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dancing_Script } from "next/font/google"
import { motion } from "framer-motion"

// Import font Google mềm mại
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

// Variants cho container và item (stagger)
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay giữa các phần tử con
    },
  },
}

const item = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 60, damping: 15 } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-amber-50 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/modern-hair-salon.png"
          alt="Hair Salon Chính"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        {/* Title */}
        <motion.h1
          variants={item}
          className={`text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold text-gray-900 mb-6 ${dancingScript.className}`}
        >
          HAIR SALON{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
            CHÍNH
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 font-serif"
        >
          Nơi tạo nên vẻ đẹp hoàn hảo cho mái tóc của bạn
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg px-6 sm:px-8 py-3"
          >
            <Link href="/booking">Đặt lịch ngay</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg px-6 sm:px-8 py-3 border-2 bg-transparent"
          >
            <Link href="/services">Xem dịch vụ</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
