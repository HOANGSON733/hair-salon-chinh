"use client"

import { useState, useMemo } from "react"
import ProductHero from "@/components/products/product-hero"
import ProductCategories from "@/components/products/product-categories"
import ProductGrid from "@/components/products/product-grid"
import ProductFeatures from "@/components/products/product-features"
import ProductCTA from "@/components/products/product-cta"
import { categories, products } from "@/data/products"

export default function ProductsClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return products
    }
    return products.filter((product) => product.category === selectedCategory)
  }, [selectedCategory])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
  }

  return (
    <div className="min-h-screen">
      <ProductHero />
        <ProductCategories
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      <ProductGrid products={products} filteredProducts={filteredProducts} />
      <ProductFeatures />
      <ProductCTA />
    </div>
  )
}
