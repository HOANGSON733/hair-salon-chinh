import { Users, Award, Clock, BookOpen } from "lucide-react"

export default function DaoTaoBenefits() {
  const benefits = [
    {
      icon: Award,
      title: "Chứng chỉ được công nhận",
      description: "Chứng chỉ hoàn thành được công nhận rộng rãi trong ngành",
    },
    {
      icon: Users,
      title: "Giảng viên giàu kinh nghiệm",
      description: "Đội ngũ giảng viên là những chuyên gia hàng đầu",
    },
    {
      icon: BookOpen,
      title: "Chương trình chuẩn quốc tế",
      description: "Giáo trình được xây dựng theo tiêu chuẩn quốc tế",
    },
    {
      icon: Clock,
      title: "Lịch học linh hoạt",
      description: "Nhiều khung giờ học phù hợp với lịch trình cá nhân",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn chúng tôi?</h2>
          <p className="text-lg text-gray-600">Những lợi ích vượt trội khi học tại Hair Salon Chính</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
