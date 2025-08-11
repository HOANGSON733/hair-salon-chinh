import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"

export interface Product {
  id: number
  name: string
  brand: string
  category: string
  price: number
  originalPrice: number | null
  rating: number
  reviews: number
  image: string
  badge: string | null
  description: string
  features: string[]
  inStock: boolean
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className={`w-4 h-4 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    )
  }

  const getBadgeColor = (badge: string | null) => {
    switch (badge) {
      case "Bán chạy":
        return "bg-red-500"
      case "Mới":
        return "bg-green-500"
      case "Premium":
        return "bg-purple-500"
      case "Giảm giá":
        return "bg-orange-500"
      case "Cao cấp":
        return "bg-blue-500"
      case "Chuyên nghiệp":
        return "bg-indigo-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {product.badge && (
              <Badge className={`absolute top-3 left-3 ${getBadgeColor(product.badge)} text-white border-0`}>
                {product.badge}
              </Badge>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold bg-red-600 px-3 py-1 rounded">Hết hàng</span>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600 hover:text-orange-600" />
            </button>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-orange-50 transition-colors">
              <Eye className="w-4 h-4 text-gray-600 hover:text-orange-600" />
            </button>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wide">{product.brand}</span>
          </div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">{product.name}</h3>
          <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>

          {/* Features */}
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                <span className="text-xs text-gray-500">+{product.features.length - 2}</span>
              )}
            </div>
          </div>

          {/* Rating */}
          <div className="mb-3">
            {renderStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.reviews} đánh giá)</span>
          </div>

          {/* Price */}
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-orange-600">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-xs text-green-600 font-medium">
                Tiết kiệm {formatPrice(product.originalPrice - product.price)}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-sm"
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.inStock ? "Thêm vào giỏ" : "Hết hàng"}
            </Button>
            <Button variant="outline" className="w-full text-sm hover:bg-orange-50 bg-transparent">
              Xem chi tiết
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
