import HeroSection from "@/components/home/hero-section"
import AboutSection from "@/components/home/about-section"
import ServicesSection from "@/components/home/services-section"
import GallerySection from "@/components/home/gallery-section"
import ReviewsSection from "@/components/home/reviews-section"
import CTASection from "@/components/home/cta-section"



export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <CTASection />
    </div>
  )
}
