"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold">ServeB2B</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/#services" className="text-gray-300 hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/articles" className="text-gray-300 hover:text-blue-400 transition-colors">
            Articles
          </Link>
          <Link href="/#contact" className="text-gray-300 hover:text-blue-400 transition-colors">
            Contact
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </nav>
      </div>
    </header>
  )
}
