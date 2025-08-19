"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, User, Phone, Mail, GraduationCap, Calendar, MessageSquare } from "lucide-react"

interface TrainingRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
  courseName?: string
}

export default function TrainingRegistrationForm({ isOpen, onClose, courseName }: TrainingRegistrationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: courseName || "",
    experience: "",
    goals: "",
    preferredSchedule: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const courses = [
    "Khóa học Cắt tóc Cơ bản",
    "Khóa học Nhuộm tóc Chuyên nghiệp",
    "Khóa học Tạo kiểu Sáng tạo",
    "Khóa học Quản lý Salon",
    "Khóa học Chăm sóc tóc Spa",
    "Khóa học Tóc nam Chuyên sâu",
    "Tư vấn chọn khóa học phù hợp",
  ]

  const schedules = [
    "Sáng (8:00 - 12:00)",
    "Chiều (13:00 - 17:00)",
    "Tối (18:00 - 22:00)",
    "Cuối tuần (Thứ 7 - Chủ nhật)",
    "Linh hoạt theo lịch cá nhân",
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

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: courseName || "",
      experience: "",
      goals: "",
      preferredSchedule: "",
      notes: "",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
          <CardTitle className="text-2xl text-center text-gray-900">
            {isSubmitted ? "Đăng ký thành công!" : "Đăng ký tư vấn khóa học"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cảm ơn bạn đã đăng ký!</h3>
              <p className="text-gray-600 mb-6">
                Chúng tôi sẽ liên hệ với bạn trong vòng 24h để tư vấn chi tiết về khóa học phù hợp nhất.
              </p>
              <div className="space-y-2 text-sm text-gray-700 mb-6 text-left max-w-md mx-auto">
                <p>
                  <strong>Họ tên:</strong> {formData.name}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {formData.phone}
                </p>
                <p>
                  <strong>Khóa học quan tâm:</strong> {formData.course}
                </p>
                <p>
                  <strong>Lịch học mong muốn:</strong> {formData.preferredSchedule}
                </p>
              </div>
              <Button onClick={handleClose} className="bg-gradient-to-r from-orange-500 to-amber-600">
                Đóng
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Họ tên */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-orange-600" />
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
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Số điện thoại */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-orange-600" />
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
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-orange-600" />
                    Email (tuỳ chọn)
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Nhập email của bạn"
                    className="focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Khóa học quan tâm */}
                <div className="space-y-2">
                  <Label htmlFor="course" className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-orange-600" />
                    Khóa học quan tâm *
                  </Label>
                  <select
                    id="course"
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Chọn khóa học</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Kinh nghiệm */}
                <div className="space-y-2">
                  <Label htmlFor="experience">Kinh nghiệm hiện tại</Label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Chọn mức độ kinh nghiệm</option>
                    <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                    <option value="Dưới 1 năm">Dưới 1 năm</option>
                    <option value="1-3 năm">1-3 năm</option>
                    <option value="Trên 3 năm">Trên 3 năm</option>
                  </select>
                </div>

                {/* Lịch học mong muốn */}
                <div className="space-y-2">
                  <Label htmlFor="preferredSchedule" className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                    Lịch học mong muốn *
                  </Label>
                  <select
                    id="preferredSchedule"
                    name="preferredSchedule"
                    required
                    value={formData.preferredSchedule}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Chọn lịch học</option>
                    {schedules.map((schedule) => (
                      <option key={schedule} value={schedule}>
                        {schedule}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mục tiêu học tập */}
              <div className="space-y-2">
                <Label htmlFor="goals" className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2 text-orange-600" />
                  Mục tiêu học tập
                </Label>
                <Textarea
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  placeholder="Chia sẻ mục tiêu và mong muốn của bạn về khóa học..."
                  rows={3}
                  className="focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Ghi chú */}
              <div className="space-y-2">
                <Label htmlFor="notes">Ghi chú thêm</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Câu hỏi hoặc thông tin thêm..."
                  rows={3}
                  className="focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-lg py-3"
              >
                {isSubmitting ? "Đang gửi..." : "Đăng ký tư vấn"}
              </Button>

              <p className="text-sm text-gray-600 text-center">
                Bằng cách đăng ký, bạn đồng ý với{" "}
                <Link href="/terms" className="text-orange-600 hover:underline">
                  điều khoản sử dụng
                </Link>{" "}
                và{" "}
                <Link href="/privacy" className="text-orange-600 hover:underline">
                  chính sách bảo mật
                </Link>{" "}
                của chúng tôi.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
