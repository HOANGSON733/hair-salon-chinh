import Image from "next/image"

export default function HistorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lịch sử hình thành</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Hair Salon Chính được thành lập vào năm <strong>2018</strong> bởi anh <strong>Lê Xuân Chính</strong> – 
                một stylist với hơn <strong>10 năm kinh nghiệm</strong> trong ngành làm đẹp. Từ những ngày đầu chỉ 
                với một không gian nhỏ và vài ghế cắt tóc, salon đã dần khẳng định vị thế của mình.
              </p>
              <p>
                Trong suốt chặng đường phát triển, Hair Salon Chính đã phục vụ hàng chục nghìn khách hàng tại 
                TP.HCM và các khu vực lân cận. Không chỉ mang đến những kiểu tóc thời thượng, chúng tôi còn chú 
                trọng đến trải nghiệm dịch vụ và sự hài lòng của khách hàng.
              </p>
              <p>
                Năm 2022, salon mở rộng không gian hiện đại, trang bị thêm nhiều công nghệ chăm sóc tóc tiên tiến 
                như phục hồi keratin, nhuộm phủ bóng nano và tạo kiểu chuẩn quốc tế. Đội ngũ stylist trẻ trung, 
                sáng tạo cùng kinh nghiệm vững chắc đã giúp chúng tôi giữ vững niềm tin của khách hàng.
              </p>
              <p>
                Với sứ mệnh <em>“Tôn vinh vẻ đẹp và sự tự tin của mỗi khách hàng”</em>, Hair Salon Chính không ngừng 
                đổi mới để trở thành điểm đến tin cậy cho mọi phong cách tóc.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/lichsuhinhthanh.jpg"
              alt="Lịch sử Hair Salon Chính"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
