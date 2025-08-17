"use client"

import { useEffect, useState } from "react"

function useCountUp(end: number, duration: number) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = end / (duration / 16) // ~60fps
    const interval = setInterval(() => {
      start += step
      if (start >= end) {
        start = end
        clearInterval(interval)
      }
      setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(interval)
  }, [end, duration])

  return count
}

export default function DaoTaoHero() {
  const students = useCountUp(500, 2000) // 2 giây
  const courses = useCountUp(15, 2000)
  const jobs = useCountUp(95, 2000)

  return (
    <section className="relative py-20 bg-gradient-to-r from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Đào tạo Học viên</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Trung tâm đào tạo nghề tóc chuyên nghiệp, nơi ươm mầm những tài năng trong ngành làm đẹp
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{students}+</div>
              <div className="text-sm text-gray-600">Học viên đã tốt nghiệp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{courses}+</div>
              <div className="text-sm text-gray-600">Khóa học đa dạng</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{jobs}%</div>
              <div className="text-sm text-gray-600">Tỷ lệ có việc làm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
