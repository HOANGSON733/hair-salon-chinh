import { Scissors, Sparkles, Star } from "lucide-react"

export default function AboutSection() {
  const features = [
    {
      icon: Scissors,
      title: "Chuyên nghiệp",
      description: "Đội ngũ stylist giàu kinh nghiệm, được đào tạo bài bản",
    },
    {
      icon: Sparkles,
      title: "Chất lượng",
      description: "Sử dụng sản phẩm cao cấp, an toàn cho tóc và da đầu",
    },
    {
      icon: Star,
      title: "Uy tín",
      description: "Hàng nghìn khách hàng tin tưởng và quay lại",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Về Hair Salon Chính</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Với hơn 10 năm kinh nghiệm trong ngành làm đẹp, Hair Salon Chính tự hào là địa chỉ tin cậy của hàng nghìn
            khách hàng. Chúng tôi cam kết mang đến dịch vụ chất lượng cao với đội ngũ stylist chuyên nghiệp và trang
            thiết bị hiện đại.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
