import ProductCard, { type Product } from "./product-card"
import { Button } from "@/components/ui/button"

interface ProductGridProps {
  products: Product[]
  filteredProducts: Product[]
}

export default function ProductGrid({ products, filteredProducts }: ProductGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-pink-50 bg-transparent">
            Xem thêm sản phẩm
          </Button>
        </div>
      </div>
    </section>
  )
}
