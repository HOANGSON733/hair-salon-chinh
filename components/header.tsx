"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Về chúng tôi", href: "/about" },
    {
      name: "Dịch vụ",
      href: "/services",
      dropdown: [
        { name: "Tóc Nam", href: "/services/toc-nam" },
        { name: "Tóc Nữ", href: "/services/toc-nu" },
        { name: "Academy", href: "/services/academy" },
        { name: "Nhuộm & Tạo kiểu", href: "/services#nhuom-tao-kieu" },
        { name: "Chăm sóc & Phục hồi", href: "/services/cham-soc-phuc-hoi" },
      ],
    },
    { name: "Sản phẩm", href: "/products" },
    { name: "Hình ảnh", href: "/gallery" },
    { name: "Đánh giá", href: "/reviews" },
    { name: "Liên hệ", href: "/contact" },
  ]

  const handleToggleDropdown = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className=" w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center overflow-hidden"
            >
              <Image
                src="/Logo-Chinh.png"
                alt="Logo Hair Salon Chính"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 font-medium transition-colors text-sm flex items-center px-2 py-1 rounded-md hover:bg-orange-50 hover:text-orange-600"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <a href="tel:0123456789" className="flex items-center space-x-1 text-orange-600 hover:text-orange-700">
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">0123 456 789</span>
            </a> */}
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
            >
              <Link href="/booking">Đặt lịch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="font-medium flex items-center justify-between text-gray-700 hover:text-orange-600"
                    onClick={() => !item.dropdown && handleCloseMenu()}
                  >
                    {item.name}
                    {item.dropdown && (
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          handleToggleDropdown(item.name)
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

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-sm py-1 text-gray-600 hover:text-orange-600"
                          onClick={handleCloseMenu}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                {/* <a href="tel:0123456789" className="flex items-center space-x-2 text-orange-600">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium text-sm">0123 456 789</span>
                </a> */}
                <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-600">
                  <Link href="/booking">Đặt lịch</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
