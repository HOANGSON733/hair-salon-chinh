import Link from "next/link"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import MobileNavigationItem from "./mobile-navigation-item"
import { navigationItems } from "./navigation-data"

interface MobileNavigationProps {
  isOpen: boolean
  activeDropdown: string | null
  onToggleDropdown: (itemName: string) => void
  onClose: () => void
}

export default function MobileNavigation({ isOpen, activeDropdown, onToggleDropdown, onClose }: MobileNavigationProps) {
  if (!isOpen) return null

  return (
    <div className="md:hidden py-4 border-t">
      <nav className="flex flex-col space-y-4">
        {navigationItems.map((item) => (
          <MobileNavigationItem
            key={item.name}
            item={item}
            activeDropdown={activeDropdown}
            onToggleDropdown={onToggleDropdown}
            onItemClick={onClose}
          />
        ))}
        <div className="flex flex-col space-y-2 pt-4 border-t">
          <a href="tel:0967100552" className="flex items-center space-x-2 text-orange-600">
            <Phone className="w-4 h-4" />
            <span className="font-medium text-sm">0967100552</span>
          </a>
          <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-600">
            <Link href="/booking">Đặt lịch</Link>
          </Button>
        </div>
      </nav>
    </div>
  )
}
