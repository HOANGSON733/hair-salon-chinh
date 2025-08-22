import type { ServiceType, Category } from "./types"

// Service type categories for filtering
export const serviceTypes: ServiceType[] = [
  { id: "all", name: "Tất cả dịch vụ" },
  { id: "cat", name: "Cắt tóc" },
  { id: "uon", name: "Uốn tóc" },
  { id: "duoi", name: "Duỗi tóc" },
  { id: "nhuom", name: "Nhuộm tóc" },
  { id: "nail", name: "Nail" },
  { id: "noi-mi", name: "Nối mi" },
  { id: "cham-soc", name: "Chăm sóc" },
  { id: "tao-kieu", name: "Tạo kiểu" },
  { id: "dao-tao", name: "Đào tạo" },
  { id: "khac", name: "Khác" },
  { id: "cham-soc-phuc-hoi-toc", name: "Chăm sóc & Phục hồi tóc" },
]

// Categories for filtering
export const serviceCategories_list: Category[] = [
  { id: "all", name: "Tất cả dịch vụ" },
  { id: "general", name: "Dịch vụ chung" },
  { id: "toc-nam", name: "Tóc Nam" },
  { id: "toc-nu", name: "Tóc Nữ" },
  { id: "academy", name: "Academy" },
  { id: "cham-soc-phuc-hoi-toc", name: "Chăm sóc & Phục hồi tóc" },
]
