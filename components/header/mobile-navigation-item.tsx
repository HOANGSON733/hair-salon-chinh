"use client"

import Link from "next/link"
import MobileDropdown from "./mobile-dropdown"
import type { NavigationItem } from "./navigation-data"

interface MobileNavigationItemProps {
  item: NavigationItem
  activeDropdown: string | null
  onToggleDropdown: (itemName: string) => void
  onItemClick: () => void
}

export default function MobileNavigationItem({
  item,
  activeDropdown,
  onToggleDropdown,
  onItemClick,
}: MobileNavigationItemProps) {
  return (
    <div>
      <Link
        href={item.href}
        className="text-gray-700 hover:text-orange-600 font-medium flex items-center justify-between"
        onClick={() => !item.dropdown && onItemClick()}
      >
        {item.name}
        {item.dropdown && (
          <button
            onClick={(e) => {
              e.preventDefault()
              onToggleDropdown(item.name)
            }}
            className="p-1"
          >
            <svg
              className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </Link>

      {item.dropdown && (
        <MobileDropdown items={item.dropdown} isVisible={activeDropdown === item.name} onItemClick={onItemClick} />
      )}
    </div>
  )
}
