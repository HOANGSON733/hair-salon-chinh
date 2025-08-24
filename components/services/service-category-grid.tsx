import ServiceCard from "./service-card"
import type { Service } from "@/data/service/index"

interface ServiceCategoryGridProps {
  services: Service[]
  isAcademy?: boolean
}

export default function ServiceCategoryGrid({ services, isAcademy = false }: ServiceCategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
      {services.map((service, serviceIndex) => (
        <ServiceCard key={serviceIndex} service={service} isAcademy={isAcademy} />
      ))}
    </div>
  )
}
