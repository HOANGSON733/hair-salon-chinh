"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react"
import { FaTiktok } from "react-icons/fa";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", contact: "", message: "" })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hãy liên hệ với Hair Salon Chính để được tư vấn và đặt lịch hẹn
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Thông tin liên hệ</h2>

            <div className="space-y-6">
              {/* Address */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Địa chỉ</h3>
                      <p className="text-gray-600">
                        Khu Phố 6, Thị Trán Giồng Riềng, Huyện Giồng Riềng<br />
                        Tỉnh Kiên Giang
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Số điện thoại</h3>
                      <a href="tel:0123456789" className="text-orange-500 hover:text-orange-700 font-medium">
                        0967 100 552
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Bấm để gọi trực tiếp (miễn phí từ mobile)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <a
                        href="mailto:yen22071992@gmail.com"
                        className="text-orange-500 hover:text-orange-700 font-medium"
                      >
                        yen22071992@gmail.com
                      </a>
                      <p className="text-gray-600 text-sm mt-1">Gửi email để được tư vấn chi tiết</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Giờ hoạt động</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Thứ 2 - Thứ 6: 8:00 - 20:00</p>
                        <p>Thứ 7 - Chủ nhật: 8:00 - 21:00</p>
                        <p className="text-sm text-orange-500 mt-2">* Nhận đặt lịch trước 24h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Theo dõi chúng tôi</h3>
                  <div className="flex space-x-4">
                    {/* Facebook */}
                    <a
                      href="#"
                      className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>

                    {/* Instagram */}
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-orange-500 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>

                    {/* TikTok */}
                    <a
                      href="#"
                      className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                    >
                      <FaTiktok className="w-5 h-5" />
                    </a>

                    {/* YouTube */}
                    <a
                      href="#"
                      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>

              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Gửi tin nhắn cho chúng tôi</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Gửi tin nhắn thành công!</h3>
                    <p className="text-gray-600 mb-4">
                      Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Gửi tin nhắn khác
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="contactName">Họ và tên *</Label>
                      <Input
                        id="contactName"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nhập họ và tên của bạn"
                        className="focus:ring-pink-500 focus:border-pink-500 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactInfo">Số điện thoại hoặc Email *</Label>
                      <Input
                        id="contactInfo"
                        name="contact"
                        type="text"
                        required
                        value={formData.contact}
                        onChange={handleInputChange}
                        placeholder="Nhập số điện thoại hoặc email"
                        className="focus:ring-pink-500 focus:border-pink-500 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contactMessage">Nội dung tin nhắn *</Label>
                      <Textarea
                        id="contactMessage"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Nhập nội dung bạn muốn gửi..."
                        rows={5}
                        className="focus:ring-pink-500 focus:border-pink-500 mt-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg py-3"
                    >
                      {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Vị trí salon
          </h2>
          <Card className="overflow-hidden p-0">
            <CardContent className="p-0">
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.6436607422036!2d105.32112972729267!3d9.909072218000093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0bf5376740b8d%3A0x1cfff090f93003ad!2sHair%20Salon%20Ch%C3%ADnh!5e0!3m2!1svi!2s!4v1754841203182!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="text-center py-4 bg-gray-50">
                <MapPin className="w-5 h-5 inline-block text-gray-600 mr-2" />
                <span className="text-gray-700">
                  Khu Phố 6, Thị Trán Giồng Riềng, Huyện Giồng Riềng, Tỉnh Kiên Giang
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
