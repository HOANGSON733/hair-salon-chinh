import ServiceCategorySection from "./service-category-section"
import { serviceCategories } from "@/data/service/index"

const getCategoryId = (categoryName: string) => {
  const idMap: { [key: string]: string } = {
    "Dịch vụ Tóc Nam": "toc-nam",
    // "Dịch vụ Tóc Nữ": "toc-nu",
    // "Hair Academy": "academy",
    // "Dịch vụ Nhuộm & Tạo kiểu": "nhuom-tao-kieu",
    // "Dịch vụ Chăm sóc & Phục hồi": "cham-soc-phuc-hoi",
  }
  return idMap[categoryName] || categoryName.toLowerCase().replace(/\s+/g, "-")
}

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceCategories.map((category, categoryIndex) => (
          <ServiceCategorySection key={categoryIndex} category={category} />
        ))}
      </div>
    </section>
  )
}
