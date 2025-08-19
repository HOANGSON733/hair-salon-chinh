import { Calendar, User, Award } from "lucide-react"
import CTASection from "@/components/shared/cta-section"

export default function DaoTaoCTA() {
  const features = [
    { icon: Calendar, text: "Tư vấn miễn phí 24/7" },
    { icon: User, text: "Hỗ trợ việc làm sau tốt nghiệp" },
    { icon: Award, text: "Chứng chỉ được công nhận" },
  ]

  return (
    <CTASection
      title="Bắt đầu hành trình nghề nghiệp của bạn"
      description="Đăng ký tư vấn miễn phí để chọn khóa học phù hợp nhất"
      primaryButton={{
        text: "Đăng ký tư vấn",
        href: "/booking",
      }}
      secondaryButton={{
        text: "Hotline: 0967 100 552",
        href: "tel:0967100552",
        isPhone: true,
      }}
      features={features}
    />
  )
}
