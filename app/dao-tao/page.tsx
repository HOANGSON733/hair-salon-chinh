"use client"

import { useState, useMemo } from "react"
import DaoTaoHero from "@/components/dao-tao/dao-tao-hero"
import DaoTaoBenefits from "@/components/dao-tao/dao-tao-benefits"
import CourseCategories from "@/components/dao-tao/course-categories"
import CoursesGrid from "@/components/dao-tao/courses-grid"
import InstructorsSection from "@/components/dao-tao/instructors-section"
import DaoTaoCTA from "@/components/dao-tao/dao-tao-cta"
import { courseCategories, courses } from "@/data/courses"

export default function DaoTaoPage() {
  const [selectedCourse, setSelectedCourse] = useState("all")

  const filteredCourses = useMemo(() => {
    if (selectedCourse === "all") {
      return courses
    }
    return courses.filter((course) => course.category === selectedCourse)
  }, [selectedCourse])

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId)
  }

  return (
    <div className="min-h-screen">
      <DaoTaoHero />
      <DaoTaoBenefits />
      {/* <CourseCategories
        categories={courseCategories}
        selectedCourse={selectedCourse}
        onCourseChange={handleCourseChange}
      /> */}
      <CoursesGrid courses={courses} filteredCourses={filteredCourses} />
      <InstructorsSection />
      <DaoTaoCTA />
    </div>
  )
}
