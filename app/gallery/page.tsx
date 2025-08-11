"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleImages, setVisibleImages] = useState(12)

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "haircut", name: "Cắt tóc" },
    { id: "coloring", name: "Nhuộm màu" },
    { id: "perm", name: "Uốn/Ép" },
    { id: "treatment", name: "Chăm sóc tóc" },
  ]

  const images = [
  { id: 1, category: "haircut", src: "https://images.unsplash.com/photo-1504087697492-238a6bf49ce8?w=600&h=800&fit=crop", alt: "Kiểu tóc hiện đại 1" },
  { id: 2, category: "coloring", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop", alt: "Nhuộm tóc vàng" },
  { id: 3, category: "perm", src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop", alt: "Uốn tóc xoăn" },
  { id: 4, category: "treatment", src: "https://images.unsplash.com/photo-1616394584738-23e2294829fc?w=600&h=800&fit=crop", alt: "Kết quả chăm sóc tóc" },
  { id: 5, category: "haircut", src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop", alt: "Kiểu tóc bob" },
  { id: 6, category: "coloring", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop", alt: "Nhuộm ombre" },
  { id: 7, category: "perm", src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop", alt: "Ép tóc thẳng" },
  { id: 8, category: "haircut", src: "https://images.unsplash.com/photo-1595421514288-1356b5a8a8b6?w=600&h=800&fit=crop", alt: "Tóc layer" },
  { id: 9, category: "coloring", src: "https://images.unsplash.com/photo-1505159940484-eb2b9f6c0f2f?w=600&h=800&fit=crop", alt: "Nhuộm highlight" },
  { id: 10, category: "treatment", src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop", alt: "Ủ tóc phục hồi" },
  { id: 11, category: "haircut", src: "https://images.unsplash.com/photo-1616394584738-23e2294829fc?w=600&h=800&fit=crop", alt: "Tóc pixie" },
  { id: 12, category: "coloring", src: "https://images.unsplash.com/photo-1616394584738-23e2294829fc?w=600&h=800&fit=crop", alt: "Kỹ thuật balayage" },
  { id: 13, category: "perm", src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop", alt: "Uốn sóng biển" },
  { id: 14, category: "haircut", src: "https://images.unsplash.com/photo-1595421514288-1356b5a8a8b6?w=600&h=800&fit=crop", alt: "Tóc fade nam" },
  { id: 15, category: "coloring", src: "https://images.unsplash.com/photo-1505159940484-eb2b9f6c0f2f?w=600&h=800&fit=crop", alt: "Nhuộm màu pastel" },
  { id: 16, category: "treatment", src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop", alt: "Điều trị keratin" },
  { id: 17, category: "haircut", src: "https://images.unsplash.com/photo-1504087697492-238a6bf49ce8?w=600&h=800&fit=crop", alt: "Tóc dài layer" },
  { id: 18, category: "coloring", src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=800&fit=crop", alt: "Nhuộm tóc đỏ" },
  { id: 19, category: "perm", src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=800&fit=crop", alt: "Uốn xoăn nhẹ" },
  { id: 20, category: "haircut", src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=800&fit=crop", alt: "Kiểu tóc shag" },
]


  const filteredImages = selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)

  const displayedImages = filteredImages.slice(0, visibleImages)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const loadMore = () => {
    setVisibleImages((prev) => prev + 8)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Thư viện ảnh</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những tác phẩm tóc đẹp được tạo ra bởi đội ngũ stylist chuyên nghiệp của chúng tôi
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setVisibleImages(12)
                }}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                    : "hover:bg-pink-50"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openModal(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Xem chi tiết</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleImages < filteredImages.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} variant="outline" size="lg" className="hover:bg-pink-50 bg-transparent">
                Xem thêm ảnh
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="relative aspect-[3/4] max-h-[80vh] max-w-[80vw]">
              <Image
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-white text-lg">{filteredImages[selectedImage].alt}</p>
              <p className="text-gray-300 text-sm mt-2">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
