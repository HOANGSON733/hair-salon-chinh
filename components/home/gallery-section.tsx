import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { images } from "@/data/gallery"

export default function GallerySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Thư viện ảnh
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(0, 4).map((img, index) => (
            <div key={img.id} className="relative h-64 overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div><div className="text-center mt-8">
        <Button asChild variant="outline" size="lg">
          <Link href="/gallery">
            Xem thêm ảnh <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>
  )
}


