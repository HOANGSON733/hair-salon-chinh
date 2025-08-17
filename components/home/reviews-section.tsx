import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight } from "lucide-react"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Nguyễn Thị Lan",
      avatar: "/customer-avatar-woman.png",
      rating: 5,
      comment: "Khóa học rất bổ ích, giảng viên tận tâm hướng dẫn. Sau khi tốt nghiệp đã có việc làm ổn định!",
    },
    {
      name: "Trần Văn Nam",
      avatar: "/customer-avatar-man.png",
      rating: 5,
      comment: "Chương trình đào tạo chuyên nghiệp, thực hành nhiều. Rất hài lòng với kiến thức học được.",
    },
    {
      name: "Lê Thị Hoa",
      avatar: "/customer-avatar-woman-2.png",
      rating: 5,
      comment: "Môi trường học tập tốt, trang thiết bị hiện đại. Cảm ơn thầy cô đã hỗ trợ nhiệt tình!",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Học viên nói gì về chúng tôi</h2>
          <p className="text-lg text-gray-600">Những chia sẻ từ học viên đã tốt nghiệp</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/dao-tao">
              Xem thêm chia sẻ <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
