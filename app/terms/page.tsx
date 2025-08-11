export default function DieuKhoan() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-center">Điều Khoản Sử Dụng - Hair Salon Chính</h1>
        </div>
      </header>

      {/* Nội dung */}
      <main className="container mx-auto px-4 py-10 max-w-4xl space-y-8">
        {/* Giới thiệu */}
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Giới thiệu</h2>
          <p>
            Cảm ơn bạn đã tin tưởng và lựa chọn <strong>Hair Salon Chính</strong>. Khi truy cập hoặc đặt lịch
            tại website của chúng tôi, bạn đồng ý tuân thủ các điều khoản được nêu dưới đây để đảm bảo
            trải nghiệm tốt nhất cho cả hai bên.
          </p>
        </section>

        {/* Đặt lịch & hủy lịch */}
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Đặt lịch & Hủy lịch</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Vui lòng đặt lịch trước ít nhất 1 giờ để chúng tôi chuẩn bị tốt nhất cho bạn.</li>
            <li>Nếu muốn hủy hoặc thay đổi lịch, vui lòng thông báo trước tối thiểu 30 phút.</li>
            <li>Trong trường hợp bạn không đến đúng giờ mà không báo trước, lịch hẹn có thể bị hủy.</li>
          </ul>
        </section>

        {/* Quyền & nghĩa vụ của khách hàng */}
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Quyền và nghĩa vụ của khách hàng</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nhận dịch vụ đúng như đã thỏa thuận và tư vấn trước khi thực hiện.</li>
            <li>Thanh toán đầy đủ sau khi sử dụng dịch vụ.</li>
            <li>Tôn trọng nhân viên và khách hàng khác trong salon.</li>
          </ul>
        </section>

        {/* Quyền & nghĩa vụ của Hair Salon Chính */}
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Quyền và nghĩa vụ của Hair Salon Chính</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Cung cấp dịch vụ với chất lượng tốt nhất và đúng như cam kết.</li>
            <li>Bảo mật thông tin cá nhân và lịch hẹn của khách hàng.</li>
            <li>Từ chối phục vụ trong trường hợp khách hàng có hành vi thiếu tôn trọng hoặc vi phạm nội quy.</li>
          </ul>
        </section>

        {/* Sản phẩm & dịch vụ */}
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Sản phẩm & Dịch vụ</h2>
          <p>
            Chúng tôi sử dụng các sản phẩm chính hãng, an toàn cho tóc và da đầu. Mọi yêu cầu đặc biệt
            sẽ được tư vấn và thống nhất trước khi thực hiện.
          </p>
        </section>

        {/* Thay đổi điều khoản */}
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Thay đổi điều khoản</h2>
          <p>
            Hair Salon Chính có quyền điều chỉnh điều khoản sử dụng khi cần thiết. Các thay đổi sẽ được
            cập nhật trên website và áp dụng ngay khi đăng tải.
          </p>
        </section>

        {/* Liên hệ */}
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Liên hệ</h2>
          nav
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Hair Salon Chính. Bảo lưu mọi quyền.
        </div>
      </footer>
    </div>
  );
}
