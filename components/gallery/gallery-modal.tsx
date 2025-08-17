"use client"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { GalleryImage } from "./gallery-grid"

interface GalleryModalProps {
  isOpen: boolean
  images: GalleryImage[]
  selectedIndex: number | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function GalleryModal({ isOpen, images, selectedIndex, onClose, onNext, onPrev }: GalleryModalProps) {
  if (!isOpen || selectedIndex === null) return null

  const currentImage = images[selectedIndex]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
          <X className="w-8 h-8" />
        </button>

        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div className="relative aspect-[3/4] max-h-[80vh] max-w-[80vw]">
          <Image src={currentImage.src || "/placeholder.svg"} alt={currentImage.alt} fill className="object-contain" />
        </div>

        <div className="text-center mt-4">
          <p className="text-white text-lg">{currentImage.alt}</p>
          <p className="text-gray-300 text-sm mt-2">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  )
}
