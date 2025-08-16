import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Users, Crown, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Dịch vụ Tóc Nam - Hair Salon Chính",
  description: "Dịch vụ cắt tóc nam chuyên nghiệp tại Hair Salon Chính. Từ cơ bản đến cao cấp, tạo kiểu sự kiện.",
}

export default function TocNamPage() {
  const services = [
    {
      name: "Cắt tóc nam cơ bản",
      description: "Tạo kiểu tóc nam hiện đại, phù hợp với khuôn mặt và phong cách cá nhân",
      price: "Từ 120.000đ - 200.000đ",
      duration: "30-45 phút",
      icon: Scissors,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Tư vấn kiểu tóc", "Cắt tạo kiểu", "Gội đầu massage", "Sấy tạo kiểu"],
    },
    {
      name: "Tóc nam chuyên nghiệp",
      description: "Dịch vụ tóc nam cao cấp với kỹ thuật hiện đại và phong cách độc đáo",
      price: "Từ 200.000đ - 400.000đ",
      duration: "45-60 phút",
      icon: Users,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Tư vấn phong cách", "Cắt tỉa chuyên nghiệp", "Tạo kiểu cao cấp", "Chăm sóc da đầu"],
    },
    {
      name: "Tạo kiểu tóc nam sự kiện",
      description: "Tạo kiểu tóc nam cho các dịp đặc biệt: cưới hỏi, công việc, tiệc tùng",
      price: "Từ 250.000đ - 500.000đ",
      duration: "45-75 phút",
      icon: Crown,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Thiết kế theo sự kiện", "Sản phẩm cao cấp", "Bền đẹp cả ngày", "Tư vấn phong cách"],
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dịch vụ Tóc Nam</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dịch vụ cắt tóc nam chuyên nghiệp với đội ngũ stylist giàu kinh nghiệm, tạo nên phong cách riêng cho phái
              mạnh
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
                        <service.icon className="w-6 h-6 text-orange-600" />
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn sàng thay đổi phong cách?</h2>
          <p className="text-xl mb-8">Đặt lịch ngay hôm nay để trải nghiệm dịch vụ tóc nam chuyên nghiệp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/booking">Đặt lịch ngay</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              <a href="tel:0123456789">Gọi ngay: 0123 456 789</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
