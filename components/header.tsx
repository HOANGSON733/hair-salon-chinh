"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Sản phẩm", href: "/products" },
    { name: "Hình ảnh", href: "/gallery" },
    { name: "Đánh giá", href: "/reviews" },
    { name: "Liên hệ", href: "/contact" },
   
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {/* <a href="tel:0967100552" className="flex items-center space-x-1 text-orange-600 hover:text-orange-700">
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">0967 100 552</span>
            </a> */}
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
            >
              <Link href="/booking">Đặt lịch</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Slide from right */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Menu content */}
        <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t">
            {/* <a href="tel:0967100552" className="flex items-center space-x-2 text-orange-600">
              <Phone className="w-4 h-4" />
              <span className="font-medium text-sm">0967 100 552</span>
            </a> */}
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-amber-600 w-full mt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/booking">Đặt lịch</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
