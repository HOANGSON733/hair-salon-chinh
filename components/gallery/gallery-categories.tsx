"use client"

import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
}

interface GalleryCategoriesProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
}

export default function GalleryCategories({ categories, selectedCategory, onCategoryChange }: GalleryCategoriesProps) {
  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  : "hover:bg-pink-50"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
