"use client"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, Award, Star, ArrowUp } from "lucide-react"
import { FaTiktok } from "react-icons/fa"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-visible">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full blur-2xl"></div>
      </div>
      
      {/* Animated wave pattern with Scroll to Top Button */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500"></div>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-gray-800 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 border-2 border-orange-500"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 mx-auto" />
          </button>
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Brand Section */}
          <div className="lg:col-span-1">
            <div className="group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 relative transform transition-transform group-hover:scale-110 duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-900 to-pink-950 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-full h-full p-2">
                    <Image
                      src="/Logo-footer.png"
                      alt="Logo Hair Salon Chính"
                      fill
                      className="object-contain "
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                    Hair Salon Chính
                  </h2>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-400 ml-2">5.0</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Nơi tạo nên vẻ đẹp hoàn hảo cho mái tóc của bạn. Với đội ngũ stylist chuyên nghiệp và công nghệ hiện đại.
              </p>
              
              <div className="flex items-center space-x-2 text-sm text-orange-400 mb-6">
                <Award className="w-4 h-4" />
                <span>Chuyên nghiệp • Uy tín • Chất lượng</span>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/hairchinhsalon", color: "hover:text-blue-500" },
                  { icon: Instagram, href: "https://www.instagram.com/chinh.le.58726823/", color: "hover:text-pink-500" },
                  { icon: FaTiktok, href: "https://www.tiktok.com/@hair_salon_chinh", color: "hover:text-red-500" },
                  { icon: Youtube, href: "https://youtube.com", color: "hover:text-red-600" }
                ].map((social, index) => (
                  <Link key={index} href={social.href} target="_blank" 
                        className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:rotate-6`}>
                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
                      <social.icon className="w-5 h-5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-pink-500 rounded mr-3"></div>
              Thông tin liên hệ
            </h3>
            <ul className="space-y-4">
              {[
                { icon: MapPin, content: "Khu phố 6 Thị Trấn Giồng Riềng, Kiên Giang", href: "https://maps.google.com" },
                { icon: Phone, content: "0967 100 552", href: "tel:0967100552" },
                { icon: Mail, content: "yen22071992@gmail.com", href: "mailto:yen22071992@gmail.com" }
              ].map((item, index) => (
                <li key={index} className="group">
                  <a href={item.href} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 transform hover:translate-x-2">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                      {item.content}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Working Hours */}
            <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-orange-500 mr-2" />
                <span className="font-semibold text-orange-400">Giờ làm việc</span>
              </div>
              <p className="text-gray-300 text-sm">Thứ 2 - Chủ nhật: 8:00 - 20:00</p>
            </div>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-pink-500 rounded mr-3"></div>
              Dịch vụ nổi bật
            </h3>
            <ul className="space-y-3">
              {[
                "Cắt tóc nam/nữ",
                "Nhuộm tóc chuyên nghiệp",
                "Duỗi - Uốn tóc",
                "Phục hồi tóc hư tổn",
                "Tạo kiểu theo yêu cầu",
                "Tư vấn chăm sóc tóc"
              ].map((service, index) => (
                <li key={index}>
                  <Link href="#" className="group flex items-center text-gray-300 hover:text-orange-400 transition-all duration-300">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-pink-500 rounded mr-3"></div>
              Thanh toán online
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Chúng tôi hỗ trợ nhiều phương thức thanh toán tiện lợi và an toàn
            </p>
            
            <div className="grid grid-cols-3 gap-3 mb-6">
              {["momo", "zalopay", "vnpay", "visa", "mastercard"].map((method) => {
                const isBig = ["momo", "zalopay", "vnpay"].includes(method);
                return (
                  <div
                    key={method}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-700/50 hover:border-orange-500/50"
                    style={{ minHeight: isBig ? "60px" : "50px" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center justify-center h-full">
                      <Image
                        src={`/${method}.png`}
                        alt={method}
                        width={isBig ? 80 : 35}
                        height={isBig ? 32 : 20}
                        className="object-contain filter brightness-90 group-hover:brightness-100 transition-all rounded-xl"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* QR Code section */}
            <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                Hoặc quét mã QR để thanh toán nhanh
              </p>
              <div className="mt-3 w-24 h-24 mx-auto relative">
                <Image
                  src="/qr-code.png"
                  alt="QR Code Payment"
                  fill
                  className="object-contain"
                />  
                </div>

            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Hair Salon Chính - Thiết kế bởi{" "}
              <span className="text-orange-400 font-semibold">Nguyễn Hoàng Sơn</span>
              {" "}• Tất cả quyền được bảo lưu
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors relative group">
                Chính sách bảo mật
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors relative group">
                Điều khoản sử dụng
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}