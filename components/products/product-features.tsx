import { ShoppingCart, Star, Heart, Eye } from "lucide-react"

export default function ProductFeatures() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Chính hãng 100%",
      description: "Tất cả sản phẩm đều chính hãng, có tem bảo hành",
    },
    {
      icon: Star,
      title: "Chất lượng cao",
      description: "Được tuyển chọn từ các thương hiệu uy tín",
    },
    {
      icon: Heart,
      title: "Tư vấn miễn phí",
      description: "Đội ngũ chuyên gia tư vấn sản phẩm phù hợp",
    },
    {
      icon: Eye,
      title: "Đổi trả dễ dàng",
      description: "Chính sách đổi trả trong 30 ngày",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn sản phẩm của chúng tôi?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
