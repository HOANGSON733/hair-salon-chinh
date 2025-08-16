"use client"

import Link from "next/link"
import DropdownMenu from "./dropdown-menu"
import type { NavigationItem } from "./navigation-data"

interface NavigationItemProps {
  item: NavigationItem
  activeDropdown: string | null
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function NavigationItemComponent({
  item,
  activeDropdown,
  onMouseEnter,
  onMouseLeave,
}: NavigationItemProps) {
  return (
    <div className="relative group" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Link
        href={item.href}
        className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-sm flex items-center"
      >
        {item.name}
        {item.dropdown && (
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>

      {item.dropdown && <DropdownMenu items={item.dropdown} isVisible={activeDropdown === item.name} />}
    </div>
  )
}
