import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { getAllServices } from "@/data/service/index"

export default function ServicesSection() {
  // Lấy 4 dịch vụ đầu tiên
  const featuredServices = getAllServices().slice(0, 4)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dịch vụ nổi bật</h2>
          <p className="text-lg text-gray-600">Khám phá các dịch vụ chăm sóc tóc chuyên nghiệp của chúng tôi</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <service.icon className="w-6 h-6 text-orange-600 mr-2" />
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-lg font-bold text-orange-600 mb-4">{service.price}</p>
                  <Button asChild className="w-full">
                    <Link href="/booking">Đặt ngay</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">
              Xem tất cả dịch vụ <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
