import Link from "next/link"
import { Search } from "lucide-react"

export function Header() {
  return (
    <header className="bg-purple-700 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          GB Whatsapp
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="hover:text-purple-200">
            Home
          </Link>
          <Link href="#" className="hover:text-purple-200">
            Categories
          </Link>
          <Link href="#" className="hover:text-purple-200">
            About
          </Link>
          <Link href="#" className="hover:text-purple-200">
            Contact
          </Link>
          <Link href="#" className="hover:text-purple-200">
            Blog
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Download</button>
          <button className="text-white hover:text-purple-200">
            <Search size={24} />
          </button>
        </div>
      </div>
    </header>
  )
}

