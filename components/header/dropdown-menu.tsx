import Link from "next/link"
import type { DropdownItem } from "./navigation-data"

interface DropdownMenuProps {
  items: DropdownItem[]
  isVisible: boolean
}

export default function DropdownMenu({ items, isVisible }: DropdownMenuProps) {
  if (!isVisible) return null

  return (
    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
