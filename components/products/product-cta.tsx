import CTASection from "@/components/shared/cta-section"

export default function ProductCTA() {
  return (
    <CTASection
      title="Cần tư vấn sản phẩm?"
      description="Liên hệ với chúng tôi để được tư vấn sản phẩm phù hợp nhất cho tóc của bạn"
      primaryButton={{
        text: "Tư vấn miễn phí",
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
