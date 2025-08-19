import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTAButtons() {
  return (
    <div className="hidden md:flex items-center space-x-3">
      <a href="tel:0967100552" className="flex items-center space-x-1 text-orange-600 hover:text-orange-700">
        <Phone className="w-4 h-4" />
        <span className="font-medium text-sm">0967100552</span>
      </a>
      <Button
        asChild
        size="sm"
        className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
      >
        <Link href="/booking">Đặt lịch</Link>
      </Button>
    </div>
  )
}
