import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function GallerySection() {
  const galleryImages = [
    "/salon1.jpg",
    "/salon2.jpg",
    "/salon3.jpg",
    "/salon4.jpg",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Thư viện ảnh</h2>
          <p className="text-lg text-gray-600">Những tác phẩm tiêu biểu của chúng tôi</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              Xem thêm ảnh <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
