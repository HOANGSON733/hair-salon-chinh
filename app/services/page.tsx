import ServicesHero from "@/components/services/services-hero"
import ServicesGrid from "@/components/services/services-grid"
import ServicesCTA from "@/components/services/services-cta"
export const metadata = {
  title: "Dịch vụ - Hair Salon Chính",
  description:
    "Khám phá đầy đủ các dịch vụ chăm sóc tóc chuyên nghiệp tại Hair Salon Chính: cắt tóc, nhuộm, uốn, chăm sóc tóc và nhiều hơn nữa.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />

    </div>
  )
}
