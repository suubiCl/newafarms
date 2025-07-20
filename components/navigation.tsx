"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl border-b border-newa-green-200 sticky top-0 z-50">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
              <Image
                src="/images/newa-logo.png"
                alt="Newa Farms Limited Logo"
                width={160}
                height={160}
                className="transition-transform group-hover:scale-105"
              />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-newa-green-800 font-semibold transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-newa-orange-500 via-newa-amber-500 to-newa-orange-600 hover:from-newa-orange-600 hover:via-newa-amber-600 hover:to-newa-orange-700 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 bg-size-200 animate-gradient-shift"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-newa-green-50 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {isOpen ? (
                <X className="w-6 h-6 text-newa-green-800 animate-spin" />
              ) : (
                <Menu className="w-6 h-6 text-newa-green-800 animate-pulse" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-newa-green-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-newa-green-800 font-semibold transition-all duration-300 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-newa-green-50 hover:to-newa-orange-50 transform hover:translate-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-newa-orange-500 to-newa-amber-500 hover:from-newa-orange-600 hover:to-newa-amber-600 text-white mx-4 animate-scale-in"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
