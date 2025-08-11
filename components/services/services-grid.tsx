import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Palette, Waves, Sparkles, Crown, Zap } from "lucide-react"

export default function ServicesGrid() {
  const services = [
    {
      name: "Cắt tóc nam",
      description: "Tạo kiểu tóc nam hiện đại, phù hợp với khuôn mặt và phong cách cá nhân",
      price: "Từ 120.000đ - 200.000đ",
      duration: "30-45 phút",
      icon: Scissors,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Tư vấn kiểu tóc", "Cắt tạo kiểu", "Gội đầu massage", "Sấy tạo kiểu"],
    },
    {
      name: "Cắt tóc nữ",
      description: "Cắt tóc nữ theo xu hướng thời trang, tôn lên vẻ đẹp tự nhiên",
      price: "Từ 150.000đ - 300.000đ",
      duration: "45-60 phút",
      icon: Scissors,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Tư vấn chuyên sâu", "Cắt tạo kiểu", "Gội massage thư giãn", "Sấy tạo kiểu chuyên nghiệp"],
    },
    {
      name: "Nhuộm tóc thời trang",
      description: "Nhuộm màu tóc theo xu hướng, an toàn và bền màu",
      price: "Từ 300.000đ - 800.000đ",
      duration: "2-3 giờ",
      icon: Palette,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Tư vấn màu phù hợp", "Nhuộm chuyên nghiệp", "Chăm sóc sau nhuộm", "Bảo hành màu"],
    },
    {
      name: "Nhuộm highlight/lowlight",
      description: "Tạo điểm nhấn cho mái tóc với kỹ thuật highlight chuyên nghiệp",
      price: "Từ 400.000đ - 1.000.000đ",
      duration: "3-4 giờ",
      icon: Zap,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Thiết kế màu cá nhân", "Kỹ thuật highlight cao cấp", "Chăm sóc tóc sau nhuộm", "Tạo kiểu hoàn thiện"],
    },
    {
      name: "Uốn tóc xoăn",
      description: "Tạo độ xoăn tự nhiên, bền đẹp với công nghệ uốn hiện đại",
      price: "Từ 250.000đ - 600.000đ",
      duration: "2-3 giờ",
      icon: Waves,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Tư vấn độ xoăn phù hợp", "Uốn công nghệ mới", "Chăm sóc tóc sau uốn", "Hướng dẫn chăm sóc tại nhà"],
    },
    {
      name: "Ép tóc thẳng",
      description: "Ép tóc thẳng mượt, tự nhiên với công nghệ ion âm",
      price: "Từ 200.000đ - 500.000đ",
      duration: "1.5-2.5 giờ",
      icon: Zap,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Ép ion âm cao cấp", "Bảo vệ tóc tối đa", "Kết quả bền lâu", "Tóc mượt tự nhiên"],
    },
    {
      name: "Phục hồi tóc hư tổn",
      description: "Điều trị chuyên sâu cho tóc khô, xơ, hư tổn nặng",
      price: "Từ 200.000đ - 400.000đ",
      duration: "60-90 phút",
      icon: Sparkles,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Chẩn đoán tình trạng tóc", "Điều trị chuyên sâu", "Mask phục hồi cao cấp", "Tư vấn chăm sóc"],
    },
    {
      name: "Dưỡng tóc cao cấp",
      description: "Chăm sóc tóc với các sản phẩm dưỡng cao cấp nhập khẩu",
      price: "Từ 150.000đ - 350.000đ",
      duration: "45-60 phút",
      icon: Crown,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Sản phẩm cao cấp", "Massage da đầu thư giãn", "Dưỡng ẩm chuyên sâu", "Tạo độ bóng tự nhiên"],
    },
    {
      name: "Tạo kiểu sự kiện",
      description: "Tạo kiểu tóc cho các dịp đặc biệt: cưới hỏi, tiệc tùng",
      price: "Từ 300.000đ - 800.000đ",
      duration: "60-120 phút",
      icon: Crown,
      image: "/placeholder.svg?height=250&width=350",
      features: ["Thiết kế kiểu tóc độc đáo", "Phù hợp với trang phục", "Bền đẹp cả ngày", "Chụp ảnh thử nghiệm"],
    },
  ]

  return (
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
  )
}
