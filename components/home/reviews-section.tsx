import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ArrowRight } from "lucide-react"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Nguyễn Hoàng Sơn",
      avatar: "/son.jpg",
      rating: 5,
      comment: "Salon rất chuyên nghiệp, tóc mình được cắt rất đẹp. Sẽ quay lại lần sau!",
    },
    {
      name: "Trần Văn Nam",
      avatar: "/customer-avatar-man.png",
      rating: 5,
      comment: "Dịch vụ tuyệt vời, nhân viên thân thiện. Giá cả hợp lý.",
    },
    {
      name: "Lê Thị Hoa",
      avatar: "/customer-avatar-woman-2.png",
      rating: 5,
      comment: "Nhuộm tóc ở đây rất đẹp và bền màu. Rất hài lòng!",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Khách hàng nói gì về chúng tôi</h2>
          <p className="text-lg text-gray-600">Những đánh giá chân thực từ khách hàng</p>
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
            <Link href="/reviews">
              Xem thêm đánh giá <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
