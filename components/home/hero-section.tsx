import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dancing_Script } from "next/font/google"

// Import font Google mềm mại
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-50 to-amber-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/modern-hair-salon.png"
          alt="Hair Salon Chính"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Title */}
        <h1
          className={`text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold text-gray-900 mb-6 ${dancingScript.className}`}
        >
          HAIR SALON{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
            CHÍNH
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 font-serif">
          Nơi tạo nên vẻ đẹp hoàn hảo cho mái tóc của bạn
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </section>
  )
}
