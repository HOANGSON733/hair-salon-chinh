import type { Service, ServiceCategory, ServiceType, Category } from "./types"
import { generalServices } from "./general-services"
import { menHairServices } from "./men-hair-services"
import { womenHairServices } from "./women-hair-services"
import { academyServices } from "./academy-services"
import { serviceTypes, serviceCategories_list } from "./service-types"
import { RestorativeCare } from "./restorative-care"

// Export types
export type { Service, ServiceCategory, ServiceType, Category }

// Combine all services (gộp luôn restorativecare)
export const allServices: Service[] = [
  ...generalServices,
  ...menHairServices,
  ...womenHairServices,
  ...academyServices,
  ...RestorativeCare,
]

// Export individual service arrays
export { generalServices, menHairServices, womenHairServices, academyServices, RestorativeCare }

// Export service types and categories
export { serviceTypes, serviceCategories_list }

// Create serviceCategories từ allServices để tương thích với code cũ
export const serviceCategories: ServiceCategory[] = [
  {
    category: "Dịch vụ Hair Salon Chính",
    id: "dich-vu-hair-salon-chinh",
    services: generalServices,
  },
]

// Helper functions
export const getServicesByCategory = (categoryId: string): Service[] => {
  return allServices.filter((service) => service.category === categoryId)
}

export const getServicesByCategoryAndType = (categoryId: string, serviceType: string): Service[] => {
  if (serviceType === "all") {
    return getServicesByCategory(categoryId)
  }
  return allServices.filter(
    (service) => service.category === categoryId && service.serviceType === serviceType
  )
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
export const getMenHairServices = (): Service[] => menHairServices
export const getWomenHairServices = (): Service[] => womenHairServices
export const getChamSocPhucHoiToc = (): Service[] => RestorativeCare
export const getAcademyServices = (): Service[] => academyServices
export const getGeneralServices = (): Service[] => generalServices

// Get available service types for a category
export const getServiceTypesForCategory = (categoryId: string): ServiceType[] => {
  const categoryServices = getServicesByCategory(categoryId)
  const availableTypes = [...new Set(categoryServices.map((service) => service.serviceType))]

  return serviceTypes.filter(
    (type) => type.id === "all" || availableTypes.includes(type.id)
  )
}
