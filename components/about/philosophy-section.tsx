import Image from "next/image"

export default function PhilosophySection() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image src="/trietly.jpg" alt="Triết lý phục vụ" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Triết lý phục vụ</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Chất lượng là ưu tiên hàng đầu:</strong>
                Chúng tôi chỉ sử dụng những sản phẩm chăm sóc tóc cao cấp, an toàn và hiệu quả nhất từ các thương hiệu
                uy tín trên thế giới.
              </p>
              <p>
                <strong className="text-gray-900">Tư vấn chuyên nghiệp:</strong>
                Mỗi khách hàng đều được tư vấn kỹ lưỡng về kiểu tóc phù hợp với khuôn mặt, phong cách và tính cách cá
                nhân.
              </p>
              <p>
                <strong className="text-gray-900">Dịch vụ tận tâm:</strong>
                Chúng tôi luôn lắng nghe và thấu hiểu mong muốn của khách hàng để mang đến trải nghiệm dịch vụ tốt nhất.
              </p>
              <p>
                <strong className="text-gray-900">Không ngừng học hỏi:</strong>
                Đội ngũ stylist thường xuyên tham gia các khóa đào tạo để cập nhật xu hướng và kỹ thuật mới nhất trong
                ngành.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
