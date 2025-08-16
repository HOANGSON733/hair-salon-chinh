"use client"

import { Menu, X } from "lucide-react"

interface MobileMenuButtonProps {
  isOpen: boolean
  onToggle: () => void
}

export default function MobileMenuButton({ isOpen, onToggle }: MobileMenuButtonProps) {
  return (
    <button className="md:hidden" onClick={onToggle}>
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  )
}
