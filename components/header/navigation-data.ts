export interface NavigationItem {
  name: string
  href: string
  dropdown?: DropdownItem[]
}

export interface DropdownItem {
  name: string
  href: string
}

export const navigationItems: NavigationItem[] = [
  { name: "Trang chủ", href: "/" },
  { name: "Về chúng tôi", href: "/about" },
  {
    name: "Dịch vụ",
    href: "/services",
    dropdown: [
      { name: "Tóc Nam", href: "/services/toc-nam" },
      { name: "Tóc Nữ", href: "/services/toc-nu" },
      { name: "Academy", href: "/services/academy" },
      { name: "Nhuộm & Tạo kiểu", href: "/services#nhuom-tao-kieu" },
      { name: "Chăm sóc & Phục hồi", href: "/services#cham-soc-phuc-hoi" },
    ],
  },
  { name: "Sản phẩm", href: "/products" },
  { name: "Hình ảnh", href: "/gallery" },
  { name: "Đánh giá", href: "/reviews" },
  { name: "Liên hệ", href: "/contact" },
]
