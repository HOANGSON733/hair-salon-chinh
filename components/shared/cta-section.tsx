import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface CTAFeature {
  icon: LucideIcon
  text: string
}

interface CTASectionProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
    isPhone?: boolean
  }
  features?: CTAFeature[]
  bgGradient?: string
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
  bgGradient = "bg-gradient-to-r from-orange-500 to-amber-600",
}: CTASectionProps) {
  return (
    <section className={`py-16 ${bgGradient} text-white`}>
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
            <Link href={primaryButton.href}>{primaryButton.text}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
          >
            {secondaryButton.isPhone ? (
              <a href={secondaryButton.href}>{secondaryButton.text}</a>
            ) : (
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            )}
          </Button>
        </div>

        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <feature.icon className="w-5 h-5" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
