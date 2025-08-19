import {
  Scissors,
  Sparkles,
  Waves,
  Palette,
  Crown,
  Droplets,
  HandHeart,
  Brush,
  FanIcon,
  ShoppingBag,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: number
  name: string
  description: string
  price: string
  duration: string
  icon: LucideIcon
  image: string
  features: string[]
  category: string // Thêm field category để phân loại
}

export interface ServiceCategory {
  category: string
  id: string
  services: Service[]
}

// Tất cả services trong 1 array chung
export const allServices: Service[] = [
  // Dịch vụ chung Hair Salon
  {
    id: 1,
    name: "Cắt tóc",
    description: "Tạo kiểu tóc hiện đại, phù hợp với gương mặt và phong cách cá nhân",
    price: "Từ 50.000đ - 200.000đ",
    duration: "30-45 phút",
    icon: Scissors,
    image: "/cuttoc.png",
    features: ["Tư vấn kiểu tóc", "Cắt tạo kiểu", "Gội đầu massage", "Sấy tạo kiểu"],
    category: "general",
  },
  {
    id: 2,
    name: "Uốn tóc",
    description: "Uốn tóc tạo độ bồng bềnh, mềm mại và tự nhiên",
    price: "Từ 500.000đ - 1.200.000đ",
    duration: "90-120 phút",
    icon: Waves,
    image: "/uontoc.jpg",
    features: ["Tư vấn kiểu uốn", "Dung dịch uốn cao cấp", "Dưỡng phục hồi", "Tạo kiểu sau uốn"],
    category: "general",
  },
  {
    id: 3,
    name: "Duỗi tóc",
    description: "Duỗi thẳng mượt, tự nhiên, giữ nếp lâu dài",
    price: "Từ 600.000đ - 2.500.000đ",
    duration: "90-120 phút",
    icon: Droplets,
    image: "/duoitoc.jpg",
    features: ["Tư vấn", "Sản phẩm duỗi an toàn", "Dưỡng bóng mượt", "Bảo hành nếp tóc"],
    category: "general",
  },
  {
    id: 4,
    name: "Nhuộm tóc",
    description: "Đổi màu tóc theo xu hướng mới nhất, sử dụng sản phẩm an toàn",
    price: "Từ 300.000đ - 1.500.000đ",
    duration: "90-150 phút",
    icon: Palette,
    image: "/nhuomtoc.jpg",
    features: ["Tư vấn màu", "Thuốc nhuộm cao cấp", "Dưỡng màu tóc", "Bền đẹp lâu phai"],
    category: "general",
  },
  {
    id: 5,
    name: "Tạo kiểu tóc",
    description: "Tạo kiểu nhanh gọn cho tiệc, sự kiện, hoặc đi làm",
    price: "Từ 50.000đ - 100.000đ",
    duration: "30-60 phút",
    icon: Crown,
    image: "/taokieu.jpg",
    features: ["Thiết kế theo yêu cầu", "Sản phẩm tạo kiểu cao cấp", "Đảm bảo bền đẹp", "Tư vấn phong cách"],
    category: "general",
  },
  {
    id: 6,
    name: "Gội đầu & massage",
    description: "Thư giãn, giảm căng thẳng với liệu trình gội đầu và massage",
    price: "Từ 80.000đ - 200.000đ",
    duration: "20-40 phút",
    icon: HandHeart,
    image: "/goidau.png",
    features: ["Gội sạch sâu", "Massage đầu - cổ - vai gáy", "Tinh dầu thư giãn", "Không gian thoải mái"],
    category: "general",
  },
  {
    id: 7,
    name: "Nail - Chăm sóc móng",
    description: "Sơn sửa móng tay/chân chuyên nghiệp, nhiều mẫu mới",
    price: "Từ 100.000đ - 500.000đ",
    duration: "30-60 phút",
    icon: Brush,
    image: "/nail.jpg",
    features: ["Sơn gel cao cấp", "Mẫu nail đa dạng", "Chăm sóc móng khỏe", "Khử khuẩn dụng cụ"],
    category: "general",
  },
  {
    id: 8,
    name: "Chăm sóc da mặt",
    description: "Liệu trình làm sạch và nuôi dưỡng da mặt chuyên sâu",
    price: "Từ 200.000đ - 600.000đ",
    duration: "40-70 phút",
    icon: Sparkles,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Làm sạch sâu", "Xông hơi thảo mộc", "Massage thư giãn", "Đắp mặt nạ dưỡng da"],
    category: "general",
  },
  {
    id: 9,
    name: "Bán sản phẩm chăm sóc tóc",
    description: "Cung cấp các loại dầu gội, serum, dưỡng tóc chính hãng",
    price: "Từ 150.000đ - 800.000đ",
    duration: "—",
    icon: ShoppingBag,
    image: "/tdbuoi.png",
    features: ["Sản phẩm chính hãng", "Tư vấn chọn sản phẩm", "Dành cho nhiều loại tóc", "Bảo hành chất lượng"],
    category: "general",
  },
  {
    id: 10,
    name: "Lột mụn",
    description: "Làm sạch mụn cám, mụn đầu đen kết hợp mặt nạ dịu da",
    price: "99.000đ",
    duration: "20 phút",
    icon: FanIcon,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Xông thảo mộc", "Mặt nạ dịu da", "Hút sạch mụn cám", "Hướng dẫn chăm sóc tại nhà"],
    category: "general",
  },
  {
    id: 11,
    name: "Lấy ráy tai",
    description: "Vệ sinh tai an toàn bằng dụng cụ vô trùng",
    price: "50.000đ",
    duration: "25 phút",
    icon: Users,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Dụng cụ vô trùng", "Nhẹ nhàng – an toàn", "Có mặt trong 60-90 phút", "Bảo hành 48h"],
    category: "general",
  },
  {
    id: 12,
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
    category: "general",
  },

  // Dịch vụ Tóc Nam
  {
    id: 13,
    name: "Cắt tóc nam cơ bản",
    description: "Tạo kiểu tóc nam hiện đại, phù hợp với khuôn mặt và phong cách cá nhân",
    price: "Từ 120.000đ - 200.000đ",
    duration: "30-45 phút",
    icon: Scissors,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Tư vấn kiểu tóc", "Cắt tạo kiểu", "Gội đầu massage", "Sấy tạo kiểu"],
    category: "toc-nam",
  },
  {
    id: 14,
    name: "Tóc nam chuyên nghiệp",
    description: "Dịch vụ tóc nam cao cấp với kỹ thuật hiện đại và phong cách độc đáo",
    price: "Từ 200.000đ - 400.000đ",
    duration: "45-60 phút",
    icon: Users,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Tư vấn phong cách", "Cắt tỉa chuyên nghiệp", "Tạo kiểu cao cấp", "Chăm sóc da đầu"],
    category: "toc-nam",
  },
  {
    id: 15,
    name: "Tạo kiểu tóc nam sự kiện",
    description: "Tạo kiểu tóc nam cho các dịp đặc biệt: cưới hỏi, công việc, tiệc tùng",
    price: "Từ 250.000đ - 500.000đ",
    duration: "45-75 phút",
    icon: Crown,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Thiết kế theo sự kiện", "Sản phẩm cao cấp", "Bền đẹp cả ngày", "Tư vấn phong cách"],
    category: "toc-nam",
  },

  // Dịch vụ Tóc Nữ
  {
    id: 16,
    name: "Cắt tóc nữ cơ bản",
    description: "Cắt tóc nữ theo xu hướng thời trang, tôn lên vẻ đẹp tự nhiên",
    price: "Từ 150.000đ - 300.000đ",
    duration: "45-60 phút",
    icon: Scissors,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Tư vấn chuyên sâu", "Cắt tạo kiểu", "Gội massage thư giãn", "Sấy tạo kiểu chuyên nghiệp"],
    category: "toc-nu",
  },
  {
    id: 17,
    name: "Tóc nữ cao cấp",
    description: "Dịch vụ tóc nữ premium với xu hướng thời trang quốc tế",
    price: "Từ 300.000đ - 600.000đ",
    duration: "60-90 phút",
    icon: Crown,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Thiết kế cá nhân hóa", "Kỹ thuật cao cấp", "Sản phẩm premium", "Tư vấn phong cách"],
    category: "toc-nu",
  },
  {
    id: 18,
    name: "Tạo kiểu tóc nữ sự kiện",
    description: "Tạo kiểu tóc nữ cho các dịp đặc biệt: cưới hỏi, dạ tiệc, chụp ảnh",
    price: "Từ 400.000đ - 800.000đ",
    duration: "90-120 phút",
    icon: Sparkles,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Thiết kế kiểu tóc độc đáo", "Phù hợp với trang phục", "Bền đẹp cả ngày", "Chụp ảnh thử nghiệm"],
    category: "toc-nu",
  },

  // Hair Academy
  {
    id: 19,
    name: "Khóa học cơ bản",
    description: "Khóa học cắt tóc cơ bản cho người mới bắt đầu, nắm vững kiến thức nền tảng",
    price: "Từ 2.000.000đ",
    duration: "1 tháng",
    icon: Users,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Lý thuyết cơ bản", "Thực hành trên mô hình", "Chứng chỉ hoàn thành", "Tài liệu học tập"],
    category: "academy",
  },
  {
    id: 20,
    name: "Khóa học nâng cao",
    description: "Khóa học chuyên sâu về kỹ thuật cắt tóc, nhuộm và tạo kiểu chuyên nghiệp",
    price: "Từ 3.500.000đ",
    duration: "2 tháng",
    icon: Users,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Kỹ thuật nâng cao", "Thực hành khách thật", "Chứng chỉ chuyên nghiệp", "Hỗ trợ thực tập"],
    category: "academy",
  },
  {
    id: 21,
    name: "Khóa học chuyên gia",
    description: "Khóa học toàn diện để trở thành stylist chuyên nghiệp với đầy đủ kỹ năng",
    price: "Từ 5.000.000đ",
    duration: "3 tháng",
    icon: Crown,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Toàn diện tất cả kỹ thuật", "Quản lý salon", "Chứng chỉ quốc tế", "Hỗ trợ việc làm"],
    category: "academy",
  },

{
    id: 22,
    name: "Phục hồi tóc cơ bản",
    description: "Dịch vụ phục hồi tóc hư tổn nhẹ, giúp tóc mềm mượt tự nhiên",
    price: "Từ 200.000đ - 400.000đ",
    duration: "45-60 phút",
    category: "cham-soc-phuc-hoi",
    icon: Scissors,
    image: "/placeholder.svg?height=250&width=350",
    features: [
      "Gội xả chuyên dụng",
      "Ủ dưỡng phục hồi",
      "Massage da đầu",
      "Sấy tạo kiểu nhẹ nhàng",
    ],
  },
  {
    id: 23,
    name: "Phục hồi tóc chuyên sâu",
    description: "Phục hồi tóc hư tổn nặng bằng công nghệ hiện đại",
    price: "Từ 500.000đ - 800.000đ",
    duration: "60-90 phút",
    category: "cham-soc-phuc-hoi",
    icon: Crown,
    image: "/placeholder.svg?height=250&width=350",
    features: [
      "Liệu trình keratin/ collagen",
      "Dưỡng chất cao cấp",
      "Kỹ thuật chuyên nghiệp",
      "Tư vấn chăm sóc tại nhà",
    ],
  },
  {
    id: 24,
    name: "Liệu trình phục hồi premium",
    description: "Phục hồi tóc cao cấp dành cho tóc tẩy, tóc nhuộm nhiều lần",
    price: "Từ 900.000đ - 1.500.000đ",
    duration: "90-120 phút",
    category: "cham-soc-phuc-hoi",
    icon: Sparkles,
    image: "/placeholder.svg?height=250&width=350",
    features: [
      "Tinh chất nhập khẩu",
      "Công nghệ phục hồi chuyên sâu",
      "Kết quả lâu dài",
      "Phù hợp mọi loại tóc",
    ],
  },
  
]

// Tạo serviceCategories từ allServices để tương thích với code cũ
export const serviceCategories: ServiceCategory[] = [
  {
    category: "Dịch vụ Hair Salon Chính",
    id: "dich-vu-hair-salon-chinh",
    services: allServices.filter((service) => service.category === "general"),
  },
]

// Helper functions sử dụng filter từ allServices
export const getServicesByCategory = (categoryId: string): Service[] => {
  return allServices.filter((service) => service.category === categoryId)
}

export const getAllServices = (): Service[] => {
  return allServices
}

export const getServiceByName = (serviceName: string): Service | undefined => {
  return allServices.find((service) => service.name === serviceName)
}

export const getServiceById = (serviceId: number): Service | undefined => {
  return allServices.find((service) => service.id === serviceId)
}

// Specific category functions
export const getMenHairServices = (): Service[] => {
  return getServicesByCategory("toc-nam")
}

export const getWomenHairServices = (): Service[] => {
  return getServicesByCategory("toc-nu")
}

export const getAcademyServices = (): Service[] => {
  return getServicesByCategory("academy")
}
export const getChamSocPhucHoiToc = (): Service[] => {
  return getServicesByCategory("cham-soc-phuc-hoi")
}

export const getGeneralServices = (): Service[] => {
  return getServicesByCategory("general")
}

// Categories for filtering
export const serviceCategories_list = [
  { id: "all", name: "Tất cả dịch vụ" },
  { id: "general", name: "Dịch vụ chung" },
  { id: "toc-nam", name: "Tóc Nam" },
  { id: "toc-nu", name: "Tóc Nữ" },
  { id: "academy", name: "Academy" },
]
