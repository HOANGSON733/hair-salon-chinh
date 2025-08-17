import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Heart } from "lucide-react"

export default function AchievementsSection() {
  const achievements = [
    {
      icon: Award,
      title: "Top 10 Salon uy tín",
      description: "Được bình chọn trong top 10 salon uy tín nhất Kiên Giang năm 2018",
    },
    {
      icon: Users,
      title: "10,000+ khách hàng",
      description: "Phục vụ hơn 10,000 khách hàng hài lòng",
    },
    {
      icon: Clock,
      title: "15 năm kinh nghiệm",
      description: "Hơn năm hoạt động trong ngành làm đẹp",
    },
    {
      icon: Heart,
      title: "98% hài lòng",
      description: "98% khách hàng hài lòng và quay lại",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thành tựu của chúng tôi</h2>
          <p className="text-lg text-gray-600">Những con số và giải thưởng khẳng định chất lượng dịch vụ</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
