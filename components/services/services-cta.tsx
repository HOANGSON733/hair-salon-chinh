import CTASection from "@/components/shared/cta-section"

export default function ServicesCTA() {
  return (
    <CTASection
      title="Không tìm thấy dịch vụ phù hợp?"
      description="Liên hệ với chúng tôi để được tư vấn chi tiết về các dịch vụ khác"
      primaryButton={{
        text: "Liên hệ tư vấn",
        href: "/contact",
      }}
      secondaryButton={{
        text: "Gọi ngay: 0967100552",
        href: "tel:0967100552",
        isPhone: true,
      }}
    />
  )
}
