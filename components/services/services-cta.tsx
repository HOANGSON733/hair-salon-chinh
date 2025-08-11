import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Không tìm thấy dịch vụ phù hợp?</h2>
        <p className="text-xl mb-8">Liên hệ với chúng tôi để được tư vấn chi tiết về các dịch vụ khác</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
            <Link href="/contact">Liên hệ tư vấn</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
          >
            <a href="tel:0123456789">Gọi ngay:0967 100 552</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
