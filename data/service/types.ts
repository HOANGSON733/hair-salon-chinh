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
  category: string // toc-nam, toc-nu, academy, general
  serviceType: string // cat, uon, duoi, nhuom, nail, noi-mi, cham-soc, tao-kieu, dao-tao
}

export interface ServiceCategory {
  category: string
  id: string
  services: Service[]
}

export interface ServiceType {
  id: string
  name: string
}

export interface Category {
  id: string
  name: string
}
