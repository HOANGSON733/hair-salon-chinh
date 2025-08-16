import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
      <span className="text-xl font-bold text-gray-900">Salon Chính</span>
    </Link>
  )
}
