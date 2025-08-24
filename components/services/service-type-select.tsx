"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

interface ServiceType {
  id: string
  name: string
}

interface ServiceTypeSelectProps {
  serviceTypes: ServiceType[]
  selectedType: string
  onTypeChange: (typeId: string) => void
  placeholder?: string
}

export default function ServiceTypeSelect({
  serviceTypes,
  selectedType,
  onTypeChange,
  placeholder = "Chọn loại dịch vụ",
}: ServiceTypeSelectProps) {
  const selectedTypeName = serviceTypes.find((type) => type.id === selectedType)?.name || placeholder

  return (
    <section className="py-8 bg-white border-b sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Filter className="w-5 h-5 text-orange-600" />
            <span className="font-medium">Lọc theo loại dịch vụ:</span>
          </div>

          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger className="w-64 focus:ring-orange-500 focus:border-orange-500">
              <SelectValue placeholder={placeholder}>{selectedTypeName}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type.id} value={type.id} className="hover:bg-orange-50 focus:bg-orange-50">
                  {type.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  )
}
