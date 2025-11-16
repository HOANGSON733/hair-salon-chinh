"use client"

import { useState } from "react"
import { Phone, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
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
    { name: "Đào tạo", href: "/dao-tao" },
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
        <div className="flex justify-between items-center py-3 md:py-4">
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
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="text-gray-700 font-medium transition-all duration-200 text-sm lg:text-base flex items-center px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {item.dropdown.map((dropdownItem, index) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-orange-600 transition-all duration-150 first:rounded-t-xl last:rounded-b-xl"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/booking"
              className="px-5 py-2.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm"
            >
              Đặt lịch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
            }`}
          style={{ top: "64px" }}
        >
          <div className="h-full overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-1">
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={`transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm mb-2">
                    <a
                      href={item.href}
                      className="font-semibold flex items-center justify-between text-gray-800 hover:text-orange-600 px-4 py-4 transition-colors"
                      onClick={(e) => {
                        if (item.dropdown) {
                          e.preventDefault()
                          handleToggleDropdown(item.name)
                        } else {
                          handleCloseMenu()
                        }
                      }}
                    >
                      <span className="text-base">{item.name}</span>
                      {item.dropdown && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180 text-orange-600" : "text-gray-400"
                            }`}
                        />
                      )}
                    </a>

                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.name ? "max-h-26 opacity-100" : "max-h-0 opacity-0"
                          }`}
                      >
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-4 pb-2">
                          {item.dropdown.map((dropdownItem, dropIndex) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block py-3 px-3 text-sm text-gray-700 hover:text-orange-600 border-b border-orange-100 last:border-b-0 transition-colors rounded-lg hover:bg-white/50"
                              onClick={handleCloseMenu}
                            >
                              <span className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                                {dropdownItem.name}
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Mobile CTA Section */}
              <div
                className={`pt-6 space-y-3 transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${navigation.length * 50}ms` }}
              >
                <a
                  href="tel:0967100552"
                  className="flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-xl font-medium hover:from-gray-100 hover:to-gray-200 transition-all shadow-sm"
                  onClick={handleCloseMenu}
                >
                  <Phone className="w-5 h-5 text-orange-600" />
                  <span>0967100552</span>
                </a>
                <a
                  href="/booking"
                  className="block text-center px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-amber-700 transition-all"
                  onClick={handleCloseMenu}
                >
                  Đặt lịch ngay
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Overlay backdrop for mobile menu */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            style={{ top: "64px" }}
            onClick={handleCloseMenu}
          />
        )}
      </div>
    </header>
  )
}