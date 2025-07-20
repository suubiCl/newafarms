"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Sparkles, Award } from "lucide-react"
import { BeeSwarm } from "@/components/animated-bee"

const slides = [
  {
    id: 1,
    title: "Where Agriculture Meets Innovation",
    subtitle: "Sustainable Beekeeping Excellence",
    description:
      "Discover the perfect harmony between bees and crops through our innovative agricultural practices that benefit both nature and productivity.",
    image: "/images/honey-bottles.jpeg",
    cta: "Explore Our Products",
    ctaLink: "/products",
    accent: "Premium Honey Products",
    accentIcon: Award,
    gradient: "from-newa-green-600 via-newa-green-700 to-newa-green-800",
  },
  {
    id: 2,
    title: "Expert Training & Consultancy",
    subtitle: "Learn from the Best",
    description:
      "Master modern beekeeping techniques and organic skincare formulation through our comprehensive training programs led by industry experts.",
    image: "/images/rebecca-products.jpeg",
    cta: "Book Training",
    ctaLink: "/services",
    accent: "Professional Development",
    accentIcon: Play,
    gradient: "from-newa-orange-500 via-newa-orange-600 to-newa-amber-600",
  },
  {
    id: 3,
    title: "Natural Beauty Solutions",
    subtitle: "Bee-Powered Cosmetics",
    description:
      "Experience the power of nature with our organic skincare line crafted from premium bee products for radiant, healthy skin.",
    image: "/images/cosmetics-display.jpeg",
    cta: "Shop Cosmetics",
    ctaLink: "/products",
    accent: "100% Natural Ingredients",
    accentIcon: Sparkles,
    gradient: "from-newa-amber-500 via-newa-yellow-500 to-newa-orange-500",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative h-[80vh] min-h-[600px] max-h-[800px] overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-100">
      {/* Creative Gold Background */}
      <div className="absolute inset-0">
        {/* Honeycomb and Bees Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/honeycomb-bees.jpg"
            alt="Honeycomb with bees background"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>

        {/* Primary gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/50 via-amber-300/40 to-orange-200/50"></div>

        {/* Animated gold waves */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent transform -skew-y-12 animate-pulse"></div>
          <div className="absolute top-20 left-0 w-full h-full bg-gradient-to-r from-transparent via-amber-400/20 to-transparent transform skew-y-6 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Golden geometric shapes */}
        <div className="absolute top-16 left-8 w-40 h-40 bg-gradient-to-br from-yellow-300/30 to-amber-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-12 w-32 h-32 bg-gradient-to-br from-amber-300/40 to-orange-300/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-24 left-1/4 w-48 h-48 bg-gradient-to-br from-yellow-200/25 to-amber-300/35 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-gradient-to-br from-orange-200/30 to-yellow-300/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        {/* Floating golden particles */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full animate-bounce opacity-70 shadow-lg"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full animate-pulse opacity-60 shadow-lg"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-3/4 right-1/5 w-3 h-3 bg-gradient-to-br from-orange-300 to-yellow-400 rounded-full animate-bounce opacity-65 shadow-md" style={{animationDelay: '0.5s'}}></div>

        {/* Golden mesh pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #f59e0b 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Subtle golden texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 via-transparent to-amber-100/20"></div>

        {/* Golden shimmer effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent animate-gold-shimmer"></div>
        </div>

        {/* Animated Bee Swarm */}
        <BeeSwarm className="opacity-60" />
      </div>

      {slides.map((slide, index) => {
        const IconComponent = slide.accentIcon
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            {/* Clean background without gradient */}
            <div className="absolute inset-0 bg-white/5"></div>

            <div className="container mx-auto px-4 h-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full py-8">
                {/* Content */}
                <div className="space-y-6 animate-fade-in-up relative">
                  {/* Decorative line */}
                  <div className="absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-newa-green-500 to-newa-amber-500 rounded-full opacity-60"></div>

                  {/* Accent Badge */}
                  <div className="inline-flex items-center space-x-3 bg-white/98 backdrop-blur-md px-6 py-3 rounded-xl shadow-2xl border-2 border-amber-200/50 hover:border-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-amber-800 tracking-wide">{slide.accent}</span>
                  </div>

                  {/* Main Content */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full shadow-sm"></div>
                      <h2 className="text-xs font-bold text-amber-700 uppercase tracking-[0.2em] font-mono bg-amber-50/80 px-3 py-1 rounded-md border border-amber-200/50">
                        {slide.subtitle}
                      </h2>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
                      <span className="bg-gradient-to-r from-amber-900 via-yellow-800 to-amber-900 bg-clip-text text-transparent drop-shadow-sm">
                        {slide.title}
                      </span>
                    </h1>

                    <div className="relative">
                      <p className="text-lg md:text-xl text-amber-900/80 leading-relaxed max-w-xl font-light pl-4 border-l-2 border-amber-400/60 bg-white/30 backdrop-blur-sm rounded-r-lg py-2 pr-4">
                        {slide.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <div className="relative group">
                      <Button
                        asChild
                        className="relative overflow-hidden bg-gradient-to-r from-newa-green-600 to-newa-green-700 hover:from-newa-green-700 hover:to-newa-green-800 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 px-8 py-4 text-base font-semibold rounded-xl border border-newa-green-500"
                      >
                        <Link href={slide.ctaLink} className="flex items-center space-x-2">
                          <span>{slide.cta}</span>
                          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-90 transition-transform duration-300">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        </Link>
                      </Button>
                      <div className="absolute inset-0 bg-gradient-to-r from-newa-amber-500 to-newa-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <Button
                        asChild
                        variant="outline"
                        className="relative overflow-hidden border-2 border-newa-orange-400 text-newa-orange-600 hover:text-white bg-white/95 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 px-8 py-4 text-base font-semibold rounded-xl"
                      >
                        <Link href="/about" className="flex items-center space-x-2">
                          <span>Learn Our Story</span>
                          <div className="w-1 h-1 bg-newa-orange-500 rounded-full group-hover:w-4 group-hover:h-4 transition-all duration-300"></div>
                        </Link>
                      </Button>
                      <div className="absolute inset-0 bg-gradient-to-r from-newa-orange-500 to-newa-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left rounded-xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative animate-fade-in-right lg:justify-self-end" style={{ animationDelay: "0.3s" }}>
                  {/* Background decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-newa-amber-200 to-newa-orange-300 rounded-full opacity-20 blur-lg"></div>
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-newa-green-200 to-newa-green-400 rounded-full opacity-30 blur-md"></div>

                  {/* Main image container */}
                  <div className="relative group">
                    {/* Image frame */}
                    <div className="relative rounded-2xl overflow-hidden shadow-xl transform group-hover:scale-[1.02] transition-all duration-500 bg-white p-2">
                      <div className="rounded-xl overflow-hidden relative">
                        <Image
                          src={slide.image || "/placeholder.svg"}
                          alt={slide.title}
                          width={600}
                          height={500}
                          className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Elegant overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Floating elements */}
                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                          <div className="w-4 h-4 bg-gradient-to-br from-newa-green-500 to-newa-amber-500 rounded-md"></div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner elements */}
                    <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-newa-green-400 rounded-tl-md opacity-60"></div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-newa-amber-400 rounded-br-md opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-md hover:bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center group transform hover:scale-110 border-2 border-white/50 hover:border-newa-green-200"
        aria-label="Previous slide"
      >
        <div className="relative">
          <ChevronLeft className="w-6 h-6 text-newa-green-700 group-hover:text-newa-green-800 transition-all duration-300 transform group-hover:-translate-x-0.5" />
          <div className="absolute inset-0 w-6 h-6 bg-newa-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-md hover:bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center justify-center group transform hover:scale-110 border-2 border-white/50 hover:border-newa-green-200"
        aria-label="Next slide"
      >
        <div className="relative">
          <ChevronRight className="w-6 h-6 text-newa-green-700 group-hover:text-newa-green-800 transition-all duration-300 transform group-hover:translate-x-0.5" />
          <div className="absolute inset-0 w-6 h-6 bg-newa-green-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 transform hover:scale-110 ${
              index === currentSlide
                ? "w-8 h-3 bg-gradient-to-r from-newa-green-600 to-newa-amber-500 shadow-md"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Modern Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-white to-gray-200">
        <div
          className="h-full bg-gradient-to-r from-newa-green-600 via-newa-amber-500 to-newa-orange-500 transition-all duration-1000 relative overflow-hidden"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
