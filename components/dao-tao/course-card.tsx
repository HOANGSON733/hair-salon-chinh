"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle } from "lucide-react"
import TrainingRegistrationForm from "./training-registration-form"
import type { Service } from "@/data/services"

interface CourseCardProps {
  course: Service // Sử dụng Service interface chung
}

export default function CourseCard({ course }: CourseCardProps) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  // const renderStars = (rating = 4.8) => {
  //   return (
  //     <div className="flex items-center">
  //       {[1, 2, 3, 4, 5].map((star) => (
  //         <Star key={star} className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
  //       ))}
  //       <span className="ml-1 text-sm text-gray-600">({rating})</span>
  //     </div>
  //   )
  // }

  const handleRegisterClick = () => {
    setIsFormOpen(true)
  }

  return (
    <>
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <Badge className="absolute top-3 left-3 bg-orange-500 text-white">
              {course.category === "academy" ? "Khóa học" : "Dịch vụ"}
            </Badge>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{course.name}</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

            {/* Course Info */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Học phí:</span>
                <span className="font-semibold text-orange-600">{course.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Thời gian:</span>
                <span className="text-sm text-gray-700">{course.duration}</span>
              </div>
            </div>

            {/* Rating */}
            {/* <div className="mb-4">{renderStars()}</div> */}

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Nội dung khóa học:</h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {course.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {course.features.length > 3 && (
                  <li className="text-orange-600 text-xs">+{course.features.length - 3} nội dung khác</li>
                )}
              </ul>
            </div>

            <Button
              onClick={handleRegisterClick}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
            >
              Đăng ký ngay
            </Button>
          </div>
        </CardContent>
      </Card>

      <TrainingRegistrationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} courseName={course.name} />
    </>
  )
}
