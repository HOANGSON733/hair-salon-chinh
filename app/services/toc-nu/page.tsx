import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { getWomenHairServices } from "@/data/services"
import CTASection from "@/components/shared/cta-section"

export const metadata = {
  title: "Dịch vụ Tóc Nữ - Hair Salon Chính",
  description: "Dịch vụ cắt tóc nữ chuyên nghiệp tại Hair Salon Chính. Từ cơ bản đến cao cấp, tạo kiểu sự kiện.",
}

export default function TocNuPage() {
  const services = getWomenHairServices()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="mr-4">
              <Link href="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dịch vụ Tóc Nữ</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dịch vụ cắt tóc nữ chuyên nghiệp với xu hướng thời trang quốc tế, tôn vinh vẻ đẹp tự nhiên của phái đẹp
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        {service.icon && <service.icon className="w-6 h-6 text-orange-600" />}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Giá:</span>
                        <span className="font-semibold text-orange-600">{service.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Thời gian:</span>
                        <span className="text-sm text-gray-700">{service.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Bao gồm:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                    >
                      <Link href="/booking">Đặt lịch ngay</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Sẵn sàng tỏa sáng với mái tóc mới?"
        description="Đặt lịch ngay hôm nay để trải nghiệm dịch vụ tóc nữ chuyên nghiệp"
        primaryButton={{
          text: "Đặt lịch ngay",
          href: "/booking",
        }}
        secondaryButton={{
          text: "Gọi ngay: 0967100552",
          href: "tel:0967100552",
          isPhone: true,
        }}
      />
    </div>
  )
}
