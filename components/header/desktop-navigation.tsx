"use client"

import NavigationItemComponent from "./navigation-item"
import { navigationItems } from "./navigation-data"

interface DesktopNavigationProps {
  activeDropdown: string | null
  setActiveDropdown: (dropdown: string | null) => void
}

export default function DesktopNavigation({ activeDropdown, setActiveDropdown }: DesktopNavigationProps) {
  return (
    <nav className="hidden md:flex space-x-6">
      {navigationItems.map((item) => (
        <NavigationItemComponent
          key={item.name}
          item={item}
          activeDropdown={activeDropdown}
          onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
          onMouseLeave={() => setActiveDropdown(null)}
        />
      ))}
    </nav>
  )
}
