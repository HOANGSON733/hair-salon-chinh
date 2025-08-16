import ServiceCategoryHeader from "./service-category-header"
import ServiceCategoryGrid from "./service-category-grid"
import type { ServiceCategory } from "./services-data"

interface ServiceCategorySectionProps {
  category: ServiceCategory
}

export default function ServiceCategorySection({ category }: ServiceCategorySectionProps) {
//   const isAcademy = category.id === "academy"

  return (
    <div className="mb-16" id={category.id}>
      <ServiceCategoryHeader title={category.category} />
      <ServiceCategoryGrid services={category.services} 
    //   isAcademy={isAcademy} 
      />
    </div>
  )
}
