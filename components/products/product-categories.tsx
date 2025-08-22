"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter } from "lucide-react"

interface Category {
  id: string
  name: string
}

interface ProductCategoriesProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
}

export default function ProductCategories({ categories, selectedCategory, onCategoryChange }: ProductCategoriesProps) {
  const selectedCategoryName =
    categories.find((category) => category.id === selectedCategory)?.name || "Tất cả sản phẩm"

  return (
    <section className="py-8 bg-white border-b sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <Filter className="w-5 h-5 text-orange-600" />
            <span className="font-medium">Lọc theo danh mục:</span>
          </div>

          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-64 focus:ring-orange-500 focus:border-orange-500">
              <SelectValue placeholder="Chọn danh mục sản phẩm">{selectedCategoryName}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id} className="hover:bg-orange-50 focus:bg-orange-50">
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results counter */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {selectedCategory !== "all" && (
              <span>
                Hiển thị sản phẩm trong danh mục{" "}
                <span className="font-semibold text-orange-600">{selectedCategoryName}</span>
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
