"use client"

import { useState, useMemo } from "react"
import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryCategories from "@/components/gallery/gallery-categories"
import GalleryGrid from "@/components/gallery/gallery-grid"
import GalleryModal from "@/components/gallery/gallery-modal"
import { categories, images } from "@/data/gallery"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleImages, setVisibleImages] = useState(12)

  const filteredImages = useMemo(() => {
    return selectedCategory === "all" ? images : images.filter((img) => img.category === selectedCategory)
  }, [selectedCategory])

  const displayedImages = useMemo(() => {
    return filteredImages.slice(0, visibleImages)
  }, [filteredImages, visibleImages])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setVisibleImages(12)
  }

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  const handleLoadMore = () => {
    setVisibleImages((prev) => prev + 8)
  }

  return (
    <div className="min-h-screen">
      <GalleryHero />
      <GalleryCategories
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <GalleryGrid
        images={filteredImages}
        displayedImages={displayedImages}
        visibleImages={visibleImages}
        totalImages={filteredImages.length}
        onImageClick={handleImageClick}
        onLoadMore={handleLoadMore}
      />
      <GalleryModal
        isOpen={selectedImage !== null}
        images={filteredImages}
        selectedIndex={selectedImage}
        onClose={handleCloseModal}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </div>
  )
}
