"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export interface GalleryImage {
  id: number
  category: string
  src: string
  alt: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  displayedImages: GalleryImage[]
  visibleImages: number
  totalImages: number
  onImageClick: (index: number) => void
  onLoadMore: () => void
}

export default function GalleryGrid({
  images,
  displayedImages,
  visibleImages,
  totalImages,
  onImageClick,
  onLoadMore,
}: GalleryGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => onImageClick(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Xem chi tiết</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < totalImages && (
          <div className="text-center mt-12">
            <Button onClick={onLoadMore} variant="outline" size="lg" className="hover:bg-pink-50 bg-transparent">
              Xem thêm ảnh
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
