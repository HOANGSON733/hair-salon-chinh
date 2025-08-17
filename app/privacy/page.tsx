export default function ChinhSachBaoMat() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold text-center">Chính Sách Bảo Mật - Hair Salon Chính</h1>
                </div>
            </header>

            {/* Nội dung */}
            <main className="container mx-auto px-4 py-10 max-w-4xl space-y-8">
                {/* Giới thiệu */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">1. Mục đích</h2>
                    <p>
                        <strong>Hair Salon Chính</strong> cam kết bảo mật tuyệt đối thông tin cá nhân của khách hàng.
                        Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin.
                    </p>
                </section>

                {/* Thông tin thu thập */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">2. Thông tin chúng tôi thu thập</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Họ và tên, số điện thoại, email khi bạn đặt lịch hẹn.</li>
                        <li>Thông tin lịch hẹn và dịch vụ đã sử dụng.</li>
                        <li>Phản hồi hoặc đánh giá của bạn về dịch vụ.</li>
                    </ul>
                </section>

                {/* Mục đích sử dụng */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">3. Mục đích sử dụng thông tin</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Xác nhận và quản lý lịch hẹn của bạn.</li>
                        <li>Liên hệ để thông báo, nhắc lịch hoặc giới thiệu dịch vụ mới.</li>
                        <li>Cải thiện chất lượng dịch vụ và trải nghiệm khách hàng.</li>
                    </ul>
                </section>

                {/* Chia sẻ thông tin */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">4. Chia sẻ thông tin</h2>
                    <p>
                        Chúng tôi không bán hoặc trao đổi thông tin cá nhân cho bên thứ ba. Thông tin chỉ được chia sẻ
                        nếu có yêu cầu hợp pháp từ cơ quan chức năng hoặc để bảo vệ quyền lợi hợp pháp của Hair Salon Chính.
                    </p>
                </section>

                {/* Bảo mật thông tin */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">5. Bảo mật thông tin</h2>
                    <p>
                        Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ thông tin cá nhân của bạn
                        khỏi truy cập, tiết lộ hoặc sử dụng trái phép.
                    </p>
                </section>

                {/* Quyền của khách hàng */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">6. Quyền của khách hàng</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Yêu cầu xem, sửa hoặc xóa thông tin cá nhân của mình.</li>
                        <li>Yêu cầu ngừng nhận thông tin tiếp thị từ chúng tôi.</li>
                    </ul>
                </section>

                {/* Liên hệ */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">7. Liên hệ</h2>
                    <p>
                        Mọi thắc mắc hoặc góp ý xin vui lòng liên hệ qua:
                        <br />
                        📍 Địa chỉ: Khu phố 6 Thị Trấn Giồng Riềng Tỉnh Kiên Giang.
                        <br />
                        📞 Hotline: <a href="tel: 0967 100 552" className="text-blue-600 underline"> 0967 100 552</a>
                        <br />
                        📧 Email: <a href="mailto:yen22071992@gmail.com" className="text-blue-600 underline">yen22071992@gmail.com</a>
                    </p>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t mt-10">
                <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Nguyễn Hoàng Sơn. Bảo lưu mọi quyền.
                </div>
            </footer>
        </div>
    );
}
