import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, User, Award } from "lucide-react"

export default function DaoTaoCTA() {
    return (
        <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Bắt đầu hành trình nghề nghiệp của bạn</h2>
                <p className="text-xl mb-8">Đăng ký tư vấn miễn phí để chọn khóa học phù hợp nhất</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-gray-100">
                        <Link href="/booking">Đăng ký tư vấn</Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        asChild
                        className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                    >
                        <Link href="tel:0967100552">Hotline: 0967100552</Link>

                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="flex items-center justify-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>Tư vấn miễn phí 24/7</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <User className="w-5 h-5" />
                        <span>Hỗ trợ việc làm sau tốt nghiệp</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <Award className="w-5 h-5" />
                        <span>Chứng chỉ được công nhận</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
