import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-newa-green-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-honey-pattern opacity-5"></div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image
                src="/images/newa-logo.png"
                alt="Newa Farms Limited Logo"
                width={100}
                height={100}
                className="brightness-0 invert mb-2"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Where agriculture meets innovation! Committed to sustainable beekeeping and organic product development in
              Uganda.
            </p>
            <p className="text-newa-amber-400 font-medium text-sm italic">"Fostering harmony between bees and crops"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-newa-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-newa-green-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-newa-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-newa-green-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-newa-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-newa-green-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-newa-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-newa-green-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-newa-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-newa-orange-400">Products</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300 hover:text-newa-amber-400 transition-colors duration-300 cursor-pointer">
                Fresh Honey
              </li>
              <li className="text-gray-300 hover:text-newa-amber-400 transition-colors duration-300 cursor-pointer">
                Bee Propolis
              </li>
              <li className="text-gray-300 hover:text-newa-amber-400 transition-colors duration-300 cursor-pointer">
                Beeswax
              </li>
              <li className="text-gray-300 hover:text-newa-amber-400 transition-colors duration-300 cursor-pointer">
                Natural Cosmetics
              </li>
              <li className="text-gray-300 hover:text-newa-amber-400 transition-colors duration-300 cursor-pointer">
                Honey Wine
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-newa-green-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-newa-green-600 rounded-lg flex items-center justify-center group-hover:bg-newa-green-500 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  newafarmm@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-newa-amber-600 rounded-lg flex items-center justify-center group-hover:bg-newa-amber-500 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  +256 772 477917
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-newa-orange-600 rounded-lg flex items-center justify-center group-hover:bg-newa-orange-500 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">
                  Uganda
                </span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-semibold text-sm mb-3 text-newa-amber-400">Direct Contact:</h4>
              <div className="space-y-1">
                <p className="text-gray-300 text-sm font-medium">Rebecca Akello</p>
                <p className="text-gray-400 text-xs">rebeccaabolet@gmail.com</p>
                <p className="text-gray-400 text-xs">+256 788501212</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {new Date().getFullYear()} Newa Farms Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="text-newa-green-400">Sustainable Agriculture</span>
            <span className="text-gray-500">•</span>
            <span className="text-newa-amber-400">Environmental Protection</span>
            <span className="text-gray-500">•</span>
            <span className="text-newa-orange-400">Community Development</span>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-xs">
              Developed by{" "}
              <Link
                href="https://cavemotions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-newa-amber-400 transition-colors duration-300"
              >
                Cave Motions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
