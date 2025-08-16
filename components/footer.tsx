import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"
import { FaTiktok } from "react-icons/fa";
import Image from "next/image"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Slogan */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/Logo-footer.png"
                  alt="Logo Hair Salon Chính"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Hair Salon Chính</span>
            </div>
            <p className="text-gray-300 mb-4">
              Nơi tạo nên vẻ đẹp hoàn hảo cho mái tóc của bạn. Chuyên nghiệp - Uy tín - Chất lượng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <FaTiktok className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Thư viện ảnh
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Đặt lịch
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-gray-300">Khu phố 6 Thị Trấn Giồng Riềng Tỉnh Kiên Giang. </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <a href="tel:0123456789" className="text-gray-300 hover:text-orange-500">
                  0967 100 552
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:yen22071992@gmail.com" className="text-gray-300 hover:text-orange-500">
                  yen22071992@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Hair Salon Chính. Tất cả quyền được bảo lưu. |
            <Link href="/privacy" className="hover:text-orange-500 ml-1">
              Chính sách bảo mật
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-orange-500 ml-1">
              Điều khoản sử dụng
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
