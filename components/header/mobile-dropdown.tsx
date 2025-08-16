"use client"

import Link from "next/link"
import type { DropdownItem } from "./navigation-data"

interface MobileDropdownProps {
  items: DropdownItem[]
  isVisible: boolean
  onItemClick: () => void
}

export default function MobileDropdown({ items, isVisible, onItemClick }: MobileDropdownProps) {
  if (!isVisible) return null

  return (
    <div className="mt-2 ml-4 space-y-2">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="block text-sm text-gray-600 hover:text-orange-600 py-1"
          onClick={onItemClick}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
