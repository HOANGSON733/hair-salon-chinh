// import {
//   Scissors,
//   Sparkles,
//   Waves,
//   Palette,
//   Crown,
//   Droplets,
//   HandHeart,
//   Brush,
//   FanIcon,
//   ShoppingBag,
//   Users,
//   Eye,
// } from "lucide-react"
// import type { LucideIcon } from "lucide-react"

// export interface Service {
//   id: number
//   name: string
//   description: string
//   price: string
//   duration: string
//   icon: LucideIcon
//   image: string
//   features: string[]
//   category: string // toc-nam, toc-nu, academy, general
//   serviceType: string // cat, uon, duoi, nhuom, nail, noi-mi, cham-soc, tao-kieu, dao-tao
// }

// export interface ServiceCategory {
//   category: string
//   id: string
//   services: Service[]
// }

// // Tất cả services trong 1 array chung
// export const allServices: Service[] = [
//   // Dịch vụ chung Hair Salon
//   {
//     id: 1,
//     name: "Cắt tóc",
//     description: "Tạo kiểu tóc hiện đại, phù hợp với gương mặt và phong cách cá nhân",
//     price: "Từ 50.000đ - 200.000đ",
//     duration: "30-45 phút",
//     icon: Scissors,
//     image: "/cuttoc.png",
//     features: ["Tư vấn kiểu tóc", "Cắt tạo kiểu", "Gội đầu massage", "Sấy tạo kiểu"],
//     category: "general",
//     serviceType: "cat",
//   },
//   {
//     id: 2,
//     name: "Uốn tóc",
//     description: "Uốn tóc tạo độ bồng bềnh, mềm mại và tự nhiên",
//     price: "Từ 500.000đ - 1.200.000đ",
//     duration: "90-120 phút",
//     icon: Waves,
//     image: "/uontoc.jpg",
//     features: ["Tư vấn kiểu uốn", "Dung dịch uốn cao cấp", "Dưỡng phục hồi", "Tạo kiểu sau uốn"],
//     category: "general",
//     serviceType: "uon",
//   },
//   {
//     id: 3,
//     name: "Duỗi tóc",
//     description: "Duỗi thẳng mượt, tự nhiên, giữ nếp lâu dài",
//     price: "Từ 600.000đ - 2.500.000đ",
//     duration: "90-120 phút",
//     icon: Droplets,
//     image: "/duoitoc.jpg",
//     features: ["Tư vấn", "Sản phẩm duỗi an toàn", "Dưỡng bóng mượt", "Bảo hành nếp tóc"],
//     category: "general",
//     serviceType: "duoi",
//   },
//   {
//     id: 4,
//     name: "Nhuộm tóc",
//     description: "Đổi màu tóc theo xu hướng mới nhất, sử dụng sản phẩm an toàn",
//     price: "Từ 300.000đ - 1.500.000đ",
//     duration: "90-150 phút",
//     icon: Palette,
//     image: "/nhuomtoc.jpg",
//     features: ["Tư vấn màu", "Thuốc nhuộm cao cấp", "Dưỡng màu tóc", "Bền đẹp lâu phai"],
//     category: "general",
//     serviceType: "nhuom",
//   },
//   {
//     id: 5,
//     name: "Tạo kiểu tóc",
//     description: "Tạo kiểu nhanh gọn cho tiệc, sự kiện, hoặc đi làm",
//     price: "Từ 50.000đ - 100.000đ",
//     duration: "30-60 phút",
//     icon: Crown,
//     image: "/taokieu.jpg",
//     features: ["Thiết kế theo yêu cầu", "Sản phẩm tạo kiểu cao cấp", "Đảm bảo bền đẹp", "Tư vấn phong cách"],
//     category: "general",
//     serviceType: "tao-kieu",
//   },
//   {
//     id: 6,
//     name: "Gội đầu & massage",
//     description: "Thư giãn, giảm căng thẳng với liệu trình gội đầu và massage",
//     price: "Từ 80.000đ - 200.000đ",
//     duration: "20-40 phút",
//     icon: HandHeart,
//     image: "/goidau.png",
//     features: ["Gội sạch sâu", "Massage đầu - cổ - vai gáy", "Tinh dầu thư giãn", "Không gian thoải mái"],
//     category: "general",
//     serviceType: "cham-soc",
//   },
//   {
//     id: 7,
//     name: "Nail - Chăm sóc móng",
//     description: "Sơn sửa móng tay/chân chuyên nghiệp, nhiều mẫu mới",
//     price: "Từ 100.000đ - 500.000đ",
//     duration: "30-60 phút",
//     icon: Brush,
//     image: "/nail.jpg",
//     features: ["Sơn gel cao cấp", "Mẫu nail đa dạng", "Chăm sóc móng khỏe", "Khử khuẩn dụng cụ"],
//     category: "general",
//     serviceType: "nail",
//   },
//   {
//     id: 8,
//     name: "Chăm sóc da mặt",
//     description: "Liệu trình làm sạch và nuôi dưỡng da mặt chuyên sâu",
//     price: "Từ 200.000đ - 600.000đ",
//     duration: "40-70 phút",
//     icon: Sparkles,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Làm sạch sâu", "Xông hơi thảo mộc", "Massage thư giãn", "Đắp mặt nạ dưỡng da"],
//     category: "general",
//     serviceType: "cham-soc",
//   },
//   {
//     id: 9,
//     name: "Bán sản phẩm chăm sóc tóc",
//     description: "Cung cấp các loại dầu gội, serum, dưỡng tóc chính hãng",
//     price: "Từ 150.000đ - 800.000đ",
//     duration: "—",
//     icon: ShoppingBag,
//     image: "/tdbuoi.png",
//     features: ["Sản phẩm chính hãng", "Tư vấn chọn sản phẩm", "Dành cho nhiều loại tóc", "Bảo hành chất lượng"],
//     category: "general",
//     serviceType: "cham-soc",
//   },
//   {
//     id: 10,
//     name: "Lột mụn",
//     description: "Làm sạch mụn cám, mụn đầu đen kết hợp mặt nạ dịu da",
//     price: "99.000đ",
//     duration: "20 phút",
//     icon: FanIcon,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Xông thảo mộc", "Mặt nạ dịu da", "Hút sạch mụn cám", "Hướng dẫn chăm sóc tại nhà"],
//     category: "general",
//     serviceType: "cham-soc",
//   },
//   {
//     id: 11,
//     name: "Lấy ráy tai",
//     description: "Vệ sinh tai an toàn bằng dụng cụ vô trùng",
//     price: "50.000đ",
//     duration: "25 phút",
//     icon: Users,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Dụng cụ vô trùng", "Nhẹ nhàng – an toàn", "Có mặt trong 60-90 phút", "Bảo hành 48h"],
//     category: "general",
//     serviceType: "cham-soc",
//   },
//   {
//     id: 12,
//     name: "Nối mi",
//     description: "Nối mi tự nhiên, dày dài, tạo đôi mắt quyến rũ",
//     price: "Từ 200.000đ - 800.000đ",
//     duration: "60-90 phút",
//     icon: Eye,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Mi tự nhiên", "Bền đẹp 3-4 tuần", "Không gây kích ứng", "Tư vấn kiểu mi phù hợp"],
//     category: "general",
//     serviceType: "noi-mi",
//   },
//   {
//     id: 13,
//     name: "Combo Cắt + Gội + Tạo kiểu",
//     description: "Trọn gói dịch vụ thư giãn dành cho phái mạnh",
//     price: "250.000đ",
//     duration: "60 phút",
//     icon: Sparkles,
//     image: "/placeholder.svg?height=250&width=350",
//     features: [
//       "Cắt tóc tạo kiểu nam tính",
//       "Gội đầu massage thư giãn",
//       "Massage đầu - vai - gáy",
//       "Sấy và tạo kiểu hoàn thiện",
//     ],
//     category: "general",
//     serviceType: "tao-kieu",
//   },

//   // Dịch vụ Tóc Nam
//   {
//     id: 14,
//     name: "Cắt tóc nam cơ bản",
//     description: "Tạo kiểu tóc nam hiện đại, phù hợp với khuôn mặt và phong cách cá nhân",
//     price: "Từ 120.000đ - 200.000đ",
//     duration: "30-45 phút",
//     icon: Scissors,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Tư vấn kiểu tóc", "Cắt tạo kiểu", "Gội đầu massage", "Sấy tạo kiểu"],
//     category: "toc-nam",
//     serviceType: "cat",
//   },
//   {
//     id: 15,
//     name: "Tóc nam chuyên nghiệp",
//     description: "Dịch vụ tóc nam cao cấp với kỹ thuật hiện đại và phong cách độc đáo",
//     price: "Từ 200.000đ - 400.000đ",
//     duration: "45-60 phút",
//     icon: Users,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Tư vấn phong cách", "Cắt tỉa chuyên nghiệp", "Tạo kiểu cao cấp", "Chăm sóc da đầu"],
//     category: "toc-nam",
//     serviceType: "cat",
//   },
//   {
//     id: 16,
//     name: "Tạo kiểu tóc nam sự kiện",
//     description: "Tạo kiểu tóc nam cho các dịp đặc biệt: cưới hỏi, công việc, tiệc tùng",
//     price: "Từ 250.000đ - 500.000đ",
//     duration: "45-75 phút",
//     icon: Crown,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Thiết kế theo sự kiện", "Sản phẩm cao cấp", "Bền đẹp cả ngày", "Tư vấn phong cách"],
//     category: "toc-nam",
//     serviceType: "tao-kieu",
//   },
//   {
//     id: 17,
//     name: "Nhuộm tóc nam",
//     description: "Nhuộm tóc nam theo xu hướng, tạo phong cách cá tính",
//     price: "Từ 300.000đ - 800.000đ",
//     duration: "90-120 phút",
//     icon: Palette,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Tư vấn màu phù hợp", "Thuốc nhuộm cao cấp", "Bảo vệ tóc", "Dưỡng màu"],
//     category: "toc-nam",
//     serviceType: "nhuom",
//   },
//   {
//     id: 18,
//     name: "Duỗi tóc nam",
//     description: "Duỗi tóc nam tự nhiên, phù hợp với phong cách hiện đại",
//     price: "Từ 400.000đ - 1.000.000đ",
//     duration: "90-120 phút",
//     icon: Droplets,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Duỗi tự nhiên", "Sản phẩm an toàn", "Bảo hành nếp", "Chăm sóc sau duỗi"],
//     category: "toc-nam",
//     serviceType: "duoi",
//   },

//   // Dịch vụ Tóc Nữ
//   {
//     id: 19,
//     name: "Cắt tóc nữ cơ bản",
//     description: "Cắt tóc nữ theo xu hướng thời trang, tôn lên vẻ đẹp tự nhiên",
//     price: "Từ 150.000đ - 300.000đ",
//     duration: "45-60 phút",
//     icon: Scissors,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Tư vấn chuyên sâu", "Cắt tạo kiểu", "Gội massage thư giãn", "Sấy tạo kiểu chuyên nghiệp"],
//     category: "toc-nu",
//     serviceType: "cat",
//   },
//   {
//     id: 20,
//     name: "Tóc nữ cao cấp",
//     description: "Dịch vụ tóc nữ premium với xu hướng thời trang quốc tế",
//     price: "Từ 300.000đ - 600.000đ",
//     duration: "60-90 phút",
//     icon: Crown,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Thiết kế cá nhân hóa", "Kỹ thuật cao cấp", "Sản phẩm premium", "Tư vấn phong cách"],
//     category: "toc-nu",
//     serviceType: "cat",
//   },
//   {
//     id: 21,
//     name: "Tạo kiểu tóc nữ sự kiện",
//     description: "Tạo kiểu tóc nữ cho các dịp đặc biệt: cưới hỏi, dạ tiệc, chụp ảnh",
//     price: "Từ 400.000đ - 800.000đ",
//     duration: "90-120 phút",
//     icon: Sparkles,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Thiết kế kiểu tóc độc đáo", "Phù hợp với trang phục", "Bền đẹp cả ngày", "Chụp ảnh thử nghiệm"],
//     category: "toc-nu",
//     serviceType: "tao-kieu",
//   },
//   {
//     id: 22,
//     name: "Uốn tóc nữ",
//     description: "Uốn tóc nữ tạo độ xoăn tự nhiên, phù hợp với nhiều kiểu dáng",
//     price: "Từ 600.000đ - 1.500.000đ",
//     duration: "120-180 phút",
//     icon: Waves,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Tư vấn kiểu uốn", "Dung dịch cao cấp", "Dưỡng phục hồi", "Bảo hành kiểu uốn"],
//     category: "toc-nu",
//     serviceType: "uon",
//   },
//   {
//     id: 23,
//     name: "Nhuộm tóc nữ",
//     description: "Nhuộm tóc nữ đa dạng màu sắc, theo xu hướng thời trang",
//     price: "Từ 400.000đ - 2.000.000đ",
//     duration: "120-180 phút",
//     icon: Palette,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Tư vấn màu chuyên nghiệp", "Thuốc nhuộm cao cấp", "Kỹ thuật highlight", "Dưỡng màu tóc"],
//     category: "toc-nu",
//     serviceType: "nhuom",
//   },
//   {
//     id: 24,
//     name: "Duỗi tóc nữ",
//     description: "Duỗi tóc nữ mượt mà, tự nhiên với công nghệ hiện đại",
//     price: "Từ 800.000đ - 3.000.000đ",
//     duration: "120-180 phút",
//     icon: Droplets,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Công nghệ duỗi hiện đại", "Sản phẩm cao cấp", "Bảo vệ tóc tối đa", "Dưỡng phục hồi"],
//     category: "toc-nu",
//     serviceType: "duoi",
//   },
//   {
//     id: 25,
//     name: "Nail nữ cao cấp",
//     description: "Dịch vụ nail chuyên nghiệp với nhiều mẫu mã đa dạng",
//     price: "Từ 200.000đ - 800.000đ",
//     duration: "60-90 phút",
//     icon: Brush,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Gel cao cấp", "Mẫu nail thời trang", "Chăm sóc móng", "Bền đẹp lâu"],
//     category: "toc-nu",
//     serviceType: "nail",
//   },
//   {
//     id: 26,
//     name: "Nối mi chuyên nghiệp",
//     description: "Nối mi tự nhiên, dày dài cho đôi mắt quyến rũ",
//     price: "Từ 300.000đ - 1.200.000đ",
//     duration: "90-120 phút",
//     icon: Eye,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Mi tự nhiên cao cấp", "Kỹ thuật chuyên nghiệp", "Bền đẹp 4-6 tuần", "Không kích ứng"],
//     category: "toc-nu",
//     serviceType: "noi-mi",
//   },
//     {
//     id: 26,
//     name: "Nối mi chuyên nghiệp",
//     description: "Nối mi tự nhiên, dày dài cho đôi mắt quyến rũ",
//     price: "Từ 300.000đ - 1.200.000đ",
//     duration: "90-120 phút",
//     icon: Eye,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Mi tự nhiên cao cấp", "Kỹ thuật chuyên nghiệp", "Bền đẹp 4-6 tuần", "Không kích ứng"],
//     category: "toc-nu",
//     serviceType: "cham-soc-phuc-hoi-toc",
//   },
//   // Hair Academy
//   {
//     id: 27,
//     name: "Khóa học cắt tóc cơ bản",
//     description: "Khóa học cắt tóc cơ bản cho người mới bắt đầu, nắm vững kiến thức nền tảng",
//     price: "Từ 2.000.000đ",
//     duration: "1 tháng",
//     icon: Users,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Lý thuyết cơ bản", "Thực hành trên mô hình", "Chứng chỉ hoàn thành", "Tài liệu học tập"],
//     category: "academy",
//     serviceType: "dao-tao",
//   },
//   {
//     id: 28,
//     name: "Khóa học nhuộm tóc chuyên nghiệp",
//     description: "Khóa học chuyên sâu về kỹ thuật nhuộm tóc, pha màu và tư vấn màu sắc",
//     price: "Từ 3.500.000đ",
//     duration: "2 tháng",
//     icon: Users,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Kỹ thuật nhuộm nâng cao", "Thực hành khách thật", "Chứng chỉ chuyên nghiệp", "Hỗ trợ thực tập"],
//     category: "academy",
//     serviceType: "dao-tao",
//   },
//   {
//     id: 29,
//     name: "Khóa học uốn duỗi tóc",
//     description: "Khóa học toàn diện về kỹ thuật uốn và duỗi tóc chuyên nghiệp",
//     price: "Từ 4.000.000đ",
//     duration: "2.5 tháng",
//     icon: Crown,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Kỹ thuật uốn duỗi hiện đại", "Thực hành nhiều", "Chứng chỉ quốc tế", "Hỗ trợ việc làm"],
//     category: "academy",
//     serviceType: "dao-tao",
//   },
//   {
//     id: 30,
//     name: "Khóa học nail chuyên nghiệp",
//     description: "Khóa học nail từ cơ bản đến nâng cao, tạo mẫu nail đa dạng",
//     price: "Từ 2.500.000đ",
//     duration: "1.5 tháng",
//     icon: Brush,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Kỹ thuật nail cơ bản", "Tạo mẫu nail nghệ thuật", "Chứng chỉ hoàn thành", "Hỗ trợ mở tiệm"],
//     category: "academy",
//     serviceType: "dao-tao",
//   },
//   {
//     id: 31,
//     name: "Khóa học nối mi chuyên nghiệp",
//     description: "Khóa học nối mi từ cơ bản đến nâng cao, kỹ thuật chuyên nghiệp",
//     price: "Từ 3.000.000đ",
//     duration: "1 tháng",
//     icon: Eye,
//     image: "/placeholder.svg?height=250&width=350",
//     features: ["Kỹ thuật nối mi an toàn", "Thực hành trên khách thật", "Chứng chỉ quốc tế", "Hỗ trợ kinh doanh"],
//     category: "academy",
//     serviceType: "dao-tao",
//   },
// ]

// // Tạo serviceCategories từ allServices để tương thích với code cũ
// export const serviceCategories: ServiceCategory[] = [
//   {
//     category: "Dịch vụ Hair Salon Chính",
//     id: "dich-vu-hair-salon-chinh",
//     services: allServices.filter((service) => service.category === "general"),
//   },
// ]

// // Service type categories for filtering
// export const serviceTypes = [
//   { id: "all", name: "Tất cả dịch vụ" },
//   { id: "cat", name: "Cắt tóc" },
//   { id: "uon", name: "Uốn tóc" },
//   { id: "duoi", name: "Duỗi tóc" },
//   { id: "nhuom", name: "Nhuộm tóc" },
//   { id: "nail", name: "Nail" },
//   { id: "noi-mi", name: "Nối mi" },
//   { id: "cham-soc", name: "Chăm sóc" },
//   { id: "tao-kieu", name: "Tạo kiểu" },
//   { id: "dao-tao", name: "Đào tạo" },
// ]

// // Helper functions sử dụng filter từ allServices
// export const getServicesByCategory = (categoryId: string): Service[] => {
//   return allServices.filter((service) => service.category === categoryId)
// }

// export const getServicesByCategoryAndType = (categoryId: string, serviceType: string): Service[] => {
//   if (serviceType === "all") {
//     return getServicesByCategory(categoryId)
//   }
//   return allServices.filter((service) => service.category === categoryId && service.serviceType === serviceType)
// }

// export const getAllServices = (): Service[] => {
//   return allServices
// }

// export const getServiceByName = (serviceName: string): Service | undefined => {
//   return allServices.find((service) => service.name === serviceName)
// }

// export const getServiceById = (serviceId: number): Service | undefined => {
//   return allServices.find((service) => service.id === serviceId)
// }

// // Specific category functions
// export const getMenHairServices = (): Service[] => {
//   return getServicesByCategory("toc-nam")
// }


// export const getChamSocPhucHoiToc = (): Service[] => {
//   return getServicesByCategory("cham-soc-phuc-hoi-toc")
// }
// export const getWomenHairServices = (): Service[] => {
//   return getServicesByCategory("toc-nu")
// }

// export const getAcademyServices = (): Service[] => {
//   return getServicesByCategory("academy")
// }

// export const getGeneralServices = (): Service[] => {
//   return getServicesByCategory("general")
// }

// // Get available service types for a category
// export const getServiceTypesForCategory = (categoryId: string): { id: string; name: string }[] => {
//   const categoryServices = getServicesByCategory(categoryId)
//   const availableTypes = [...new Set(categoryServices.map((service) => service.serviceType))]

//   const filteredTypes = serviceTypes.filter((type) => type.id === "all" || availableTypes.includes(type.id))

//   return filteredTypes
// }

// // Categories for filtering
// export const serviceCategories_list = [
//   { id: "all", name: "Tất cả dịch vụ" },
//   { id: "general", name: "Dịch vụ chung" },
//   { id: "toc-nam", name: "Tóc Nam" },
//   { id: "toc-nu", name: "Tóc Nữ" },
//   { id: "academy", name: "Academy" },
// ]
