import CourseCard from "./course-card"
import type { Service } from "@/data/services"

interface CoursesGridProps {
  courses: Service[] // Sử dụng Service[] thay vì Course[]
  filteredCourses: Service[]
}

export default function CoursesGrid({ courses, filteredCourses }: CoursesGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Các khóa học</h2>
          <p className="text-lg text-gray-600">Chọn khóa học phù hợp với trình độ và mục tiêu của bạn</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
