"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { getMenHairServices, getServicesByCategoryAndType, getServiceTypesForCategory } from "@/data/service/index"
import CTASection from "@/components/shared/cta-section"
import ServiceTypeSelect from "@/components/services/service-type-select"

export default function TocNamPage() {
  const [selectedType, setSelectedType] = useState("all")
  const allServices = getMenHairServices()
  const availableTypes = getServiceTypesForCategory("toc-nam")

  const filteredServices = useMemo(() => {
    return getServicesByCategoryAndType("toc-nam", selectedType)
  }, [selectedType])

  const handleTypeChange = (typeId: string) => {
    setSelectedType(typeId)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" className="mr-4">
              <Link href="/services">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Quay lại
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Dịch vụ Tóc Nam</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dịch vụ cắt tóc nam chuyên nghiệp với đội ngũ stylist giàu kinh nghiệm, tạo nên phong cách riêng cho phái
              mạnh
            </p>
          </div>
        </div>
      </section>

      {/* Service Type Select */}
      <ServiceTypeSelect
        serviceTypes={availableTypes}
        selectedType={selectedType}
        onTypeChange={handleTypeChange}
        placeholder="Tất cả dịch vụ tóc nam"
      />

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Không có dịch vụ nào trong danh mục này.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-gray-600">
                  Hiển thị <span className="font-semibold text-orange-600">{filteredServices.length}</span> dịch vụ
                  {selectedType !== "all" && (
                    <span>
                      {" "}
                      trong danh mục{" "}
                      <span className="font-semibold text-orange-600">
                        {availableTypes.find((type) => type.id === selectedType)?.name}
                      </span>
                    </span>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative h-64 overflow-hidden rounded-t-lg">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <service.icon className="w-6 h-6 text-orange-600" />
                          </div>
                        </div>
                        {/* Service Type Badge */}
                        <div className="absolute top-4 right-4">
                          <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                            {availableTypes.find((type) => type.id === service.serviceType)?.name ||
                              service.serviceType}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Giá:</span>
                            <span className="font-semibold text-orange-600">{service.price}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">Thời gian:</span>
                            <span className="text-sm text-gray-700">{service.duration}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Bao gồm:</h4>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          asChild
                          className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                        >
                          <Link href="/booking">Đặt lịch ngay</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Sẵn sàng thay đổi phong cách?"
        description="Đặt lịch ngay hôm nay để trải nghiệm dịch vụ tóc nam chuyên nghiệp"
        primaryButton={{
          text: "Đặt lịch ngay",
          href: "/booking",
        }}
        secondaryButton={{
          text: "Gọi ngay: 0123 456 789",
          href: "tel:0123456789",
          isPhone: true,
        }}
      />
    </div>
  )
}
