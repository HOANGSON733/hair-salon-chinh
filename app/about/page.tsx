import AboutHero from "@/components/about/about-hero"
import HistorySection from "@/components/about/history-section"
import AchievementsSection from "@/components/about/achievements-section"
import TeamSection from "@/components/about/team-section"
import PhilosophySection from "@/components/about/philosophy-section"

export const metadata = {
  title: "Giới thiệu - Hair Salon Chính",
  description:
    "Tìm hiểu về lịch sử, đội ngũ và triết lý phục vụ của Hair Salon Chính - salon tóc chuyên nghiệp hàng đầu.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <HistorySection />
      <AchievementsSection />
      <TeamSection />
      <PhilosophySection />
    </div>
  )
}
