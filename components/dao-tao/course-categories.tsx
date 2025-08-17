"use client"

import { Button } from "@/components/ui/button"

interface Category {
  id: string
  name: string
}

interface CourseCategoriesProps {
  categories: Category[]
  selectedCourse: string
  onCourseChange: (courseId: string) => void
}

export default function CourseCategories({ categories, selectedCourse, onCourseChange }: CourseCategoriesProps) {
  return (
    <section className="py-8 bg-gray-50 border-b sticky top-[73px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCourse === category.id ? "default" : "outline"}
              onClick={() => onCourseChange(category.id)}
              className={
                selectedCourse === category.id
                  ? "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700"
                  : "hover:bg-orange-50 border-orange-200 text-gray-700 hover:text-orange-600 hover:border-orange-300 bg-transparent"
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
