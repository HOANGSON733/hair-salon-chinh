import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, ArrowLeft, BookOpen, Award, Clock } from "lucide-react"
import { getAcademyServices } from "@/data/services"
import CTASection from "@/components/shared/cta-section"

export const metadata = {
  title: "Hair Academy - Hair Salon Chính",
  description: "Học viện đào tạo nghề tóc chuyên nghiệp tại Hair Salon Chính. Khóa học từ cơ bản đến chuyên gia.",
}

export default function AcademyPage() {
  const courses = getAcademyServices()

  const benefits = [
    {
      icon: BookOpen,
      title: "Chương trình chuẩn quốc tế",
      description: "Giáo trình được xây dựng theo tiêu chuẩn quốc tế, cập nhật xu hướng mới nhất",
    },
    {
      icon: Users,
      title: "Giảng viên giàu kinh nghiệm",
      description: "Đội ngũ giảng viên là những stylist hàng đầu với nhiều năm kinh nghiệm",
    },
    {
      icon: Award,
      title: "Chứng chỉ được công nhận",
      description: "Chứng chỉ hoàn thành khóa học được công nhận rộng rãi trong ngành",
    },
    {
      icon: Clock,
      title: "Lịch học linh hoạt",
      description: "Thời gian học linh hoạt, phù hợp với lịch trình cá nhân của học viên",
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hair Academy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Học viện đào tạo nghề tóc chuyên nghiệp, nơi ươm mầm những tài năng trong ngành làm đẹp
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn Hair Academy?</h2>
            <p className="text-lg text-gray-600">Những lợi ích vượt trội khi học tại Hair Academy</p>
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

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Các khóa học</h2>
            <p className="text-lg text-gray-600">Chọn khóa học phù hợp với trình độ và mục tiêu của bạn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <course.icon className="w-6 h-6 text-orange-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Học phí:</span>
                        <span className="font-semibold text-orange-600">{course.price}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Thời gian:</span>
                        <span className="text-sm text-gray-700">{course.duration}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Nội dung khóa học:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {course.features.map((feature, idx) => (
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
                      <Link href="/booking">Đăng ký khóa học</Link>
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
        title="Bắt đầu hành trình nghề nghiệp của bạn"
        description="Đăng ký ngay hôm nay để trở thành stylist chuyên nghiệp"
        primaryButton={{
          text: "Đăng ký ngay",
          href: "/booking",
        }}
        secondaryButton={{
          text: "Tư vấn: 0967100552",
          href: "tel:0967100552",
          isPhone: true,
        }}
      />
    </div>
  )
}
