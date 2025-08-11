import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamSection() {
  const team = [
    {
      name: "Lê Xuân Chính",
      position: "Giám đốc & Stylist trưởng",
      experience: "15 năm kinh nghiệm",
      specialty: "Chuyên về cắt tóc và tạo kiểu",
      image: "/chinh.jpg",
    },
    {
      name: "Nguyễn Thị Yến",
      position: "Stylist chính",
      experience: "10 năm kinh nghiệm",
      specialty: "Chuyên về nhuộm và uốn tóc",
      image: "/yen.jpg",
    },
    {
      name: "Nguyễn Hoàng Thái",
      position: "BarBer",
      experience: "8 năm kinh nghiệm",
      specialty: "Chuyên về tạo kiểu nam",
      image: "/thai.jpg",
    },
    {
      name: "Lê Thị Hương",
      position: "Stylist",
      experience: "6 năm kinh nghiệm",
      specialty: "Chuyên về chăm sóc và phục hồi tóc ",
      image: "/placeholder.svg?height=300&width=250",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ stylist chuyên nghiệp</h2>
          <p className="text-lg text-gray-600">Gặp gỡ những nghệ sĩ tóc tài năng của chúng tôi</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden rounded-t-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                  <p className="text-gray-700 text-sm">{member.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
