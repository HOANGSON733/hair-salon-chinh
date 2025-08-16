import { Scissors, Sparkles, Waves, Palette, Crown, Droplets, HandHeart, Brush, FanIcon, ShoppingBag, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceFeature {
    name: string
    description: string
}

export interface Service {
    name: string
    description: string
    price: string
    duration: string
    icon: LucideIcon
    image: string
    features: string[]
}

export interface ServiceCategory {
    category: string
    id: string
    services: Service[]
}

export const serviceCategories: ServiceCategory[] = [
    {
        category: "Dịch vụ Hair Salon Chính",
        id: "dich-vu-hair-salon-chinh",
        services: [
            {
                name: "Cắt tóc",
                description: "Tạo kiểu tóc hiện đại, phù hợp với gương mặt và phong cách cá nhân",
                price: "Từ 50.000đ - 200.000đ",
                duration: "30-45 phút",
                icon: Scissors,
                image: "/cuttoc.png",
                features: ["Tư vấn kiểu tóc", "Cắt tạo kiểu", "Gội đầu massage", "Sấy tạo kiểu"],
            },
            {
                name: "Uốn tóc",
                description: "Uốn tóc tạo độ bồng bềnh, mềm mại và tự nhiên",
                price: "Từ 500.000đ - 1.200.000đ",
                duration: "90-120 phút",
                icon: Waves,
                image: "/uontoc.jpg",
                features: ["Tư vấn kiểu uốn", "Dung dịch uốn cao cấp", "Dưỡng phục hồi", "Tạo kiểu sau uốn"],
            },
            {
                name: "Duỗi tóc",
                description: "Duỗi thẳng mượt, tự nhiên, giữ nếp lâu dài",
                price: "Từ 600.000đ - 2.500.000đ",
                duration: "90-120 phút",
                icon: Droplets,
                image: "/duoitoc.jpg",
                features: ["Tư vấn", "Sản phẩm duỗi an toàn", "Dưỡng bóng mượt", "Bảo hành nếp tóc"],
            },
            {
                name: "Nhuộm tóc",
                description: "Đổi màu tóc theo xu hướng mới nhất, sử dụng sản phẩm an toàn",
                price: "Từ 300.000đ - 1.500.000đ",
                duration: "90-150 phút",
                icon: Palette,
                image: "/nhuomtoc.jpg",
                features: ["Tư vấn màu", "Thuốc nhuộm cao cấp", "Dưỡng màu tóc", "Bền đẹp lâu phai"],
            },
            {
                name: "Tạo kiểu tóc",
                description: "Tạo kiểu nhanh gọn cho tiệc, sự kiện, hoặc đi làm",
                price: "Từ 50.000đ - 100.000đ",
                duration: "30-60 phút",
                icon: Crown,
                image: "/taokieu.jpg",
                features: ["Thiết kế theo yêu cầu", "Sản phẩm tạo kiểu cao cấp", "Đảm bảo bền đẹp", "Tư vấn phong cách"],
            },
            {
                name: "Gội đầu & massage",
                description: "Thư giãn, giảm căng thẳng với liệu trình gội đầu và massage",
                price: "Từ 80.000đ - 200.000đ",
                duration: "20-40 phút",
                icon: HandHeart,
                image: "/goidau.png",
                features: ["Gội sạch sâu", "Massage đầu - cổ - vai gáy", "Tinh dầu thư giãn", "Không gian thoải mái"],
            },
            {
                name: "Nail - Chăm sóc móng",
                description: "Sơn sửa móng tay/chân chuyên nghiệp, nhiều mẫu mới",
                price: "Từ 100.000đ - 500.000đ",
                duration: "30-60 phút",
                icon: Brush,
                image: "/nail.jpg",
                features: ["Sơn gel cao cấp", "Mẫu nail đa dạng", "Chăm sóc móng khỏe", "Khử khuẩn dụng cụ"],
            },
            {
                name: "Chăm sóc da mặt",
                description: "Liệu trình làm sạch và nuôi dưỡng da mặt chuyên sâu",
                price: "Từ 200.000đ - 600.000đ",
                duration: "40-70 phút",
                icon: Sparkles,
                image: "/placeholder.svg?height=250&width=350",
                features: ["Làm sạch sâu", "Xông hơi thảo mộc", "Massage thư giãn", "Đắp mặt nạ dưỡng da"],
            },
            {
                name: "Bán sản phẩm chăm sóc tóc",
                description: "Cung cấp các loại dầu gội, serum, dưỡng tóc chính hãng",
                price: "Từ 150.000đ - 800.000đ",
                duration: "—",
                icon: ShoppingBag,
                image: "/tdbuoi.png",
                features: ["Sản phẩm chính hãng", "Tư vấn chọn sản phẩm", "Dành cho nhiều loại tóc", "Bảo hành chất lượng"],
            },
            {
                name: "Lột mụn",
                description: "Làm sạch mụn cám, mụn đầu đen kết hợp mặt nạ dịu da",
                price: "99.000đ",
                duration: "20 phút",
                icon: FanIcon,
                image: "/placeholder.svg?height=250&width=350",
                features: ["Xông thảo mộc", "Mặt nạ dịu da", "Hút sạch mụn cám", "Hướng dẫn chăm sóc tại nhà"],
            },
            {
                name: "Lấy ráy tai",
                description: "Vệ sinh tai an toàn bằng dụng cụ vô trùng",
                price: "50.000đ",
                duration: "25 phút",
                icon: Users,
                image: "/placeholder.svg?height=250&width=350",
                features: ["Dụng cụ vô trùng", "Nhẹ nhàng – an toàn", "Có mặt trong 60-90 phút", "Bảo hành 48h"],
            },
            {
                name: "Đào tạo học viên",
                description: "Khóa học cắt, uốn, nhuộm, chăm sóc tóc chuyên nghiệp dành cho học viên muốn theo nghề",
                price: "Liên hệ",
                duration: "3 - 6 tháng",
                icon: Users, // hoặc GraduationCap nếu muốn đổi icon cho hợp hơn
                image: "/daotaohocvien.jpg",
                features: [
                    "Giảng viên nhiều kinh nghiệm",
                    "Thực hành trực tiếp trên mẫu thật",
                    "Hỗ trợ việc làm sau khóa học",
                    "Cấp chứng chỉ hoàn thành"
                ],
            },
            {
                name: "Combo Cắt + Gội + Tạo kiểu",
                description: "Trọn gói dịch vụ thư giãn dành cho phái mạnh",
                price: "250.000đ",
                duration: "60 phút",
                icon: Sparkles,
                image: "/placeholder.svg?height=250&width=350",
                features: [
                    "Cắt tóc tạo kiểu nam tính",
                    "Gội đầu massage thư giãn",
                    "Massage đầu - vai - gáy",
                    "Sấy và tạo kiểu hoàn thiện",
                    
                ],
            },

        ],
    },
    //   {
    //     category: "Dịch vụ Tóc Nữ",
    //     id: "toc-nu",
    //     services: [
    //       {
    //         name: "Cắt tóc nữ cơ bản",
    //         description: "Cắt tóc nữ theo xu hướng thời trang, tôn lên vẻ đẹp tự nhiên",
    //         price: "Từ 150.000đ - 300.000đ",
    //         duration: "45-60 phút",
    //         icon: Scissors,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Tư vấn chuyên sâu", "Cắt tạo kiểu", "Gội massage thư giãn", "Sấy tạo kiểu chuyên nghiệp"],
    //       },
    //       {
    //         name: "Tóc nữ cao cấp",
    //         description: "Dịch vụ tóc nữ premium với xu hướng thời trang quốc tế",
    //         price: "Từ 300.000đ - 600.000đ",
    //         duration: "60-90 phút",
    //         icon: Crown,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Thiết kế cá nhân hóa", "Kỹ thuật cao cấp", "Sản phẩm premium", "Tư vấn phong cách"],
    //       },
    //       {
    //         name: "Tạo kiểu tóc nữ sự kiện",
    //         description: "Tạo kiểu tóc nữ cho các dịp đặc biệt: cưới hỏi, dạ tiệc, chụp ảnh",
    //         price: "Từ 400.000đ - 800.000đ",
    //         duration: "90-120 phút",
    //         icon: Sparkles,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Thiết kế kiểu tóc độc đáo", "Phù hợp với trang phục", "Bền đẹp cả ngày", "Chụp ảnh thử nghiệm"],
    //       },
    //       {
    //         name: "Tạo kiểu tóc nữ sự kiện",
    //         description: "Tạo kiểu tóc nữ cho các dịp đặc biệt: cưới hỏi, dạ tiệc, chụp ảnh",
    //         price: "Từ 400.000đ - 800.000đ",
    //         duration: "90-120 phút",
    //         icon: Sparkles,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Thiết kế kiểu tóc độc đáo", "Phù hợp với trang phục", "Bền đẹp cả ngày", "Chụp ảnh thử nghiệm"],
    //       },
    //     ],
    //   },
    //   {
    //     category: "Hair Academy",
    //     id: "academy",
    //     services: [
    //       {
    //         name: "Khóa học cơ bản",
    //         description: "Khóa học cắt tóc cơ bản cho người mới bắt đầu, nắm vững kiến thức nền tảng",
    //         price: "Từ 2.000.000đ",
    //         duration: "1 tháng",
    //         icon: GraduationCap,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Lý thuyết cơ bản", "Thực hành trên mô hình", "Chứng chỉ hoàn thành", "Tài liệu học tập"],
    //       },
    //       {
    //         name: "Khóa học nâng cao",
    //         description: "Khóa học chuyên sâu về kỹ thuật cắt tóc, nhuộm và tạo kiểu chuyên nghiệp",
    //         price: "Từ 3.500.000đ",
    //         duration: "2 tháng",
    //         icon: Users,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Kỹ thuật nâng cao", "Thực hành khách thật", "Chứng chỉ chuyên nghiệp", "Hỗ trợ thực tập"],
    //       },
    //       {
    //         name: "Khóa học chuyên gia",
    //         description: "Khóa học toàn diện để trở thành stylist chuyên nghiệp với đầy đủ kỹ năng",
    //         price: "Từ 5.000.000đ",
    //         duration: "3 tháng",
    //         icon: Crown,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Toàn diện tất cả kỹ thuật", "Quản lý salon", "Chứng chỉ quốc tế", "Hỗ trợ việc làm"],
    //       },
    //     ],
    //   },
    //   {
    //     category: "Dịch vụ Nhuộm & Tạo kiểu",
    //     id: "nhuom-tao-kieu",
    //     services: [
    //       {
    //         name: "Nhuộm tóc thời trang",
    //         description: "Nhuộm màu tóc theo xu hướng, an toàn và bền màu",
    //         price: "Từ 300.000đ - 800.000đ",
    //         duration: "2-3 giờ",
    //         icon: Palette,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Tư vấn màu phù hợp", "Nhuộm chuyên nghiệp", "Chăm sóc sau nhuộm", "Bảo hành màu"],
    //       },
    //       {
    //         name: "Nhuộm highlight/lowlight",
    //         description: "Tạo điểm nhấn cho mái tóc với kỹ thuật highlight chuyên nghiệp",
    //         price: "Từ 400.000đ - 1.000.000đ",
    //         duration: "3-4 giờ",
    //         icon: Zap,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: [
    //           "Thiết kế màu cá nhân",
    //           "Kỹ thuật highlight cao cấp",
    //           "Chăm sóc tóc sau nhuộm",
    //           "Tạo kiểu hoàn thiện",
    //         ],
    //       },
    //       {
    //         name: "Uốn tóc xoăn",
    //         description: "Tạo độ xoăn tự nhiên, bền đẹp với công nghệ uốn hiện đại",
    //         price: "Từ 250.000đ - 600.000đ",
    //         duration: "2-3 giờ",
    //         icon: Waves,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Tư vấn độ xoăn phù hợp", "Uốn công nghệ mới", "Chăm sóc tóc sau uốn", "Hướng dẫn chăm sóc tại nhà"],
    //       },
    //     ],
    //   },
    //   {
    //     category: "Dịch vụ Chăm sóc & Phục hồi",
    //     id: "cham-soc-phuc-hoi",
    //     services: [
    //       {
    //         name: "Ép tóc thẳng",
    //         description: "Ép tóc thẳng mượt, tự nhiên với công nghệ ion âm",
    //         price: "Từ 200.000đ - 500.000đ",
    //         duration: "1.5-2.5 giờ",
    //         icon: Zap,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Ép ion âm cao cấp", "Bảo vệ tóc tối đa", "Kết quả bền lâu", "Tóc mượt tự nhiên"],
    //       },
    //       {
    //         name: "Phục hồi tóc hư tổn",
    //         description: "Điều trị chuyên sâu cho tóc khô, xơ, hư tổn nặng",
    //         price: "Từ 200.000đ - 400.000đ",
    //         duration: "60-90 phút",
    //         icon: Sparkles,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Chẩn đoán tình trạng tóc", "Điều trị chuyên sâu", "Mask phục hồi cao cấp", "Tư vấn chăm sóc"],
    //       },
    //       {
    //         name: "Dưỡng tóc cao cấp",
    //         description: "Chăm sóc tóc với các sản phẩm dưỡng cao cấp nhập khẩu",
    //         price: "Từ 150.000đ - 350.000đ",
    //         duration: "45-60 phút",
    //         icon: Crown,
    //         image: "/placeholder.svg?height=250&width=350",
    //         features: ["Sản phẩm cao cấp", "Massage da đầu thư giãn", "Dưỡng ẩm chuyên sâu", "Tạo độ bóng tự nhiên"],
    //       },
    //     ],
    //   },
]
