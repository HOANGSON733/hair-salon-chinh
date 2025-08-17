import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"

export default function InstructorsSection() {
  const instructors = [
    {
      name: "Lê Xuân Chính",
      position: "Giám đốc & Giảng viên chính",
      experience: "15+ năm kinh nghiệm",
      specialty: "Quản lý salon, Đào tạo chuyên nghiệp",
      image: "/chinh.jpg",
      achievements: [
        "Chứng chỉ quốc tế Vidal Sassoon",
        "Top 10 Stylist Việt Nam 2020",
      ],
    },
    {
      name: "Nguyễn Thị Yến",
      position: "Giảng viên tạo mẫu tóc nữ",
      experience: "12+ năm kinh nghiệm",
      specialty: "Uốn, nhuộm, tạo kiểu tóc nữ",
      image: "/yen.jpg",
      achievements: [
        "Chứng chỉ L'Oreal Professional",
        "Giải nhì cuộc thi Hair Fashion Show 2021",
      ],
    },
    {
      name: "Nguyễn Hoàng Thái",
      position: "Giảng viên cắt tóc nam",
      experience: "10+ năm kinh nghiệm",
      specialty: "Cắt tóc nam hiện đại, Fade, Undercut",
      image: "/thai.jpg",
      achievements: [
        "Chứng chỉ Toni&Guy London",
        "Best Barber Award 2020",
      ],
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ giảng viên</h2>
          <p className="text-lg text-gray-600">Những chuyên gia hàng đầu trong ngành</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-orange-600 font-medium mb-2">{instructor.position}</p>
                <p className="text-gray-600 text-sm mb-2">{instructor.experience}</p>
                <p className="text-gray-700 text-sm mb-4">{instructor.specialty}</p>

                <div className="space-y-1">
                  {instructor.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center justify-center text-xs text-gray-600">
                      <Award className="w-3 h-3 text-orange-500 mr-1" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
