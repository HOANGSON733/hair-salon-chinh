import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng thay đổi diện mạo?</h2>
        <p className="text-xl mb-8">Đặt lịch ngay hôm nay để trải nghiệm dịch vụ chuyên nghiệp tại Hair Salon Chính</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
            <Link href="/booking">Đặt lịch ngay</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3 bg-transparent"
          >
            <a href="tel:0967100552">Gọi ngay:0967 100 552</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
