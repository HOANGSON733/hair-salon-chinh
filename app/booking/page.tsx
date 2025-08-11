"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone, Mail, Scissors } from "lucide-react"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    "Cắt tóc nam",
    "Cắt tóc nữ",
    "Nhuộm tóc thời trang",
    "Nhuộm highlight/lowlight",
    "Uốn tóc xoăn",
    "Ép tóc thẳng",
    "Phục hồi tóc hư tổn",
    "Dưỡng tóc cao cấp",
    "Tạo kiểu sự kiện",
  ]

  const timeSlots = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Đặt lịch thành công!</h2>
            <p className="text-gray-600 mb-6">
              Cảm ơn bạn đã đặt lịch tại Hair Salon Chính. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác
              nhận lịch hẹn.
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-6">
              <p>
                <strong>Họ tên:</strong> {formData.name}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {formData.phone}
              </p>
              <p>
                <strong>Dịch vụ:</strong> {formData.service}
              </p>
              <p>
                <strong>Ngày:</strong> {formData.date}
              </p>
              <p>
                <strong>Giờ:</strong> {formData.time}
              </p>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  service: "",
                  date: "",
                  time: "",
                  notes: "",
                })
              }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Đặt lịch mới
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Đặt lịch hẹn</h1>
            <p className="text-xl text-gray-600">Chọn dịch vụ và thời gian phù hợp với bạn</p>
            <p className="text-xl mb-8">
              Đặt lịch ngay hôm nay để trải nghiệm dịch vụ chuyên nghiệp tại Hair Salon Chính
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-gray-900">Thông tin đặt lịch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Họ tên */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-pink-600" />
                      Họ và tên *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên của bạn"
                      className="focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  {/* Số điện thoại */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-pink-600" />
                      Số điện thoại *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Nhập số điện thoại"
                      className="focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-pink-600" />
                      Email (tuỳ chọn)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Nhập email của bạn"
                      className="focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  {/* Dịch vụ */}
                  <div className="space-y-2">
                    <Label htmlFor="service" className="flex items-center">
                      <Scissors className="w-4 h-4 mr-2 text-pink-600" />
                      Dịch vụ cần đặt *
                    </Label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Chọn dịch vụ</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Ngày */}
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-pink-600" />
                      Ngày hẹn *
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  {/* Giờ */}
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-pink-600" />
                      Giờ hẹn *
                    </Label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                    >
                      <option value="">Chọn giờ</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Ghi chú */}
                <div className="space-y-2">
                  <Label htmlFor="notes">Ghi chú</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Ghi chú thêm về yêu cầu của bạn (tuỳ chọn)"
                    rows={4}
                    className="focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg py-3"
                >
                  {isSubmitting ? "Đang gửi..." : "Đặt lịch ngay"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Hoặc liên hệ trực tiếp với chúng tôi:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:0123456789" className="flex items-center text-pink-600 hover:text-pink-700 font-medium">
                <Phone className="w-4 h-4 mr-2" />
               0967 100 552
              </a>
              <span className="hidden sm:block text-gray-400">|</span>
              <a
                href="mailto:yen22071992@gmail.com"
                className="flex items-center text-pink-600 hover:text-pink-700 font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                yen22071992@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
