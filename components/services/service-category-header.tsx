interface ServiceCategoryHeaderProps {
  title: string
}

export default function ServiceCategoryHeader({ title }: ServiceCategoryHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
    </div>
  )
}
