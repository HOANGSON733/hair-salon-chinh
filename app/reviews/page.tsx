"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, User, Calendar } from "lucide-react"

export default function ReviewsPage() {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Nguyễn Hoàng ",
      avatar: "/son.jpg",
      rating: 5,
      comment:
        "Salon rất chuyên nghiệp, tóc mình được cắt rất đẹp. Nhân viên thân thiện, tư vấn nhiệt tình. Sẽ quay lại lần sau!",
      date: "2024-01-15",
      service: "Cắt tóc nữ",
    },
    {
      id: 2,
      name: "Trần Văn Nam",
      avatar: "/customer-avatar-man.png",
      rating: 5,
      comment: "Dịch vụ tuyệt vời, nhân viên thân thiện. Giá cả hợp lý, chất lượng cao. Rất hài lòng với kiểu tóc mới.",
      date: "2024-01-12",
      service: "Cắt tóc nam",
    },
    {
      id: 3,
      name: "Lê Thị Hoa",
      avatar: "/customer-avatar-woman-2.png",
      rating: 5,
      comment: "Nhuộm tóc ở đây rất đẹp và bền màu. Stylist tư vấn màu rất phù hợp với da. Rất hài lòng!",
      date: "2024-01-10",
      service: "Nhuộm tóc",
    },
    {
      id: 4,
      name: "Phạm Minh Tuấn",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      comment: "Salon đẹp, sạch sẽ. Stylist cắt tóc khéo tay. Thời gian chờ hơi lâu nhưng kết quả đáng giá.",
      date: "2024-01-08",
      service: "Cắt tóc nam",
    },
    {
      id: 5,
      name: "Võ Thị Mai",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment: "Uốn tóc ở đây rất đẹp, tự nhiên. Tóc không bị khô hay hư tổn. Nhân viên tư vấn rất chi tiết.",
      date: "2024-01-05",
      service: "Uốn tóc",
    },
    {
      id: 6,
      name: "Hoàng Văn Đức",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment: "Lần đầu đến salon này và rất ấn tượng. Dịch vụ chuyên nghiệp, giá cả phải chăng. Sẽ giới thiệu bạn bè.",
      date: "2024-01-03",
      service: "Cắt tóc nam",
    },
  ])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({
      ...prev,
      rating,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const review = {
      id: reviews.length + 1,
      name: newReview.name,
      avatar: "/placeholder.svg?height=60&width=60",
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split("T")[0],
      service: "Dịch vụ mới",
    }

    setReviews((prev) => [review, ...prev])
    setNewReview({ name: "", rating: 5, comment: "" })
    setIsSubmitting(false)
  }

  const renderStars = (rating: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            } ${interactive ? "cursor-pointer hover:text-yellow-400" : ""}`}
            onClick={interactive && onRatingChange ? () => onRatingChange(star) : undefined}
          />
        ))}
      </div>
    )
  }

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Đánh giá khách hàng</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Những chia sẻ chân thực từ khách hàng đã trải nghiệm dịch vụ tại Hair Salon Chính
            </p>

            {/* Rating Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
              <div className="text-3xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}/5</div>
              {renderStars(Math.round(averageRating))}
              <p className="text-gray-600 mt-2">Dựa trên {reviews.length} đánh giá</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tất cả đánh giá ({reviews.length})</h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(review.date).toLocaleDateString("vi-VN")}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                          {renderStars(review.rating)}
                          <span className="text-sm text-gray-600">• {review.service}</span>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Chia sẻ trải nghiệm của bạn</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="reviewName" className="flex items-center mb-2">
                      <User className="w-4 h-4 mr-2 text-orange-500" />
                      Họ và tên *
                    </Label>
                    <Input
                      id="reviewName"
                      name="name"
                      type="text"
                      required
                      value={newReview.name}
                      onChange={handleInputChange}
                      placeholder="Nhập họ và tên của bạn"
                      className="focus:ring-pink-500 focus:border-pink-500"
                    />
                  </div>

                  <div>
                    <Label className="block mb-2">Đánh giá *</Label>
                    {renderStars(newReview.rating, true, handleRatingChange)}
                  </div>

                  <div>
                    <Label htmlFor="reviewComment">Nhận xét *</Label>
                    <Textarea
                      id="reviewComment"
                      name="comment"
                      required
                      value={newReview.comment}
                      onChange={handleInputChange}
                      placeholder="Chia sẻ trải nghiệm của bạn tại salon..."
                      rows={4}
                      className="focus:ring-pink-500 focus:border-pink-500 mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi đánh giá"}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Lưu ý:</strong> Đánh giá của bạn sẽ được kiểm duyệt trước khi hiển thị công khai. Chúng tôi
                    rất trân trọng những chia sẻ chân thực từ khách hàng.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
