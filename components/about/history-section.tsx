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
                Hair Salon Chính được thành lập vào năm 2014 bởi chị Lê Xuân Chính - một stylist với niềm đam mê cháy
                bỏng dành cho nghệ thuật làm tóc. Bắt đầu từ một salon nhỏ với chỉ 2 ghế cắt tóc, chúng tôi đã không
                ngừng phát triển và hoàn thiện.
              </p>
              <p>
                Qua 10 năm hoạt động, Hair Salon Chính đã trở thành một trong những địa chỉ tin cậy nhất tại TP.HCM.
                Chúng tôi tự hào đã phục vụ hơn 10,000 khách hàng và nhận được vô số lời khen ngợi.
              </p>
              <p>
                Năm 2020, chúng tôi mở rộng quy mô với không gian mới rộng rãi, hiện đại và bổ sung thêm nhiều dịch vụ
                chăm sóc tóc cao cấp. Đội ngũ stylist của chúng tôi cũng được mở rộng với những tài năng trẻ, đầy nhiệt
                huyết.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
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
