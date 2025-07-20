"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import {
  Star,
  Sparkles,
  Heart,
  Award,
  Leaf,
  Droplets,
  Shield,
  Zap,
  Mail,
  Calendar,
  Wine,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { AnimatedBee, DecorativeBee } from "@/components/animated-bee"

export default function ProductsPage() {
  // Core product categories with their items
  const productCategories = {
    honey: {
      title: "Pure Honey Collection",
      description: "Golden treasures from our sustainable apiaries",
      icon: Droplets,
      color: "newa-amber",
      gradient: "from-newa-amber-400 to-newa-orange-500",
      products: [
        {
          name: "Raw Wildflower Honey",
          description: "Unfiltered honey with complex floral notes from Uganda's diverse wildflowers",
          image: "/images/honey-bottles.jpeg",
          price: "From $15",
          features: ["100% Raw", "Unfiltered", "Local Wildflowers", "Rich Enzymes"],
          benefits: ["Natural Energy", "Immune Support", "Antioxidant Rich"]
        },
        {
          name: "Premium Acacia Honey",
          description: "Light, delicate honey with mild sweetness and slow crystallization",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.06.44 PM.jpeg",
          price: "From $18",
          features: ["Light Color", "Mild Flavor", "Slow Crystallization", "Premium Grade"],
          benefits: ["Gentle Sweetness", "Long Shelf Life", "Perfect for Tea"]
        },
        {
          name: "Golden Forest Honey",
          description: "Rich, amber honey harvested from forest flowers with deep, complex flavors",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.06.44 PM (1).jpeg",
          price: "From $20",
          features: ["Forest Flowers", "Rich Amber Color", "Complex Flavor", "Seasonal Harvest"],
          benefits: ["Unique Taste Profile", "Natural Minerals", "Antioxidant Rich"]
        }
      ]
    },
    beeswax: {
      title: "Natural Beeswax",
      description: "Pure, golden beeswax for countless applications",
      icon: Sparkles,
      color: "newa-yellow",
      gradient: "from-newa-yellow-400 to-newa-amber-500",
      products: [
        {
          name: "Premium Beeswax Blocks",
          description: "High-quality, filtered beeswax perfect for crafts, cosmetics, and candles",
          image: "/images/beeswax.jpeg",
          price: "From $12",
          features: ["100% Pure", "Filtered", "Natural Color", "Versatile Use"],
          benefits: ["Eco-Friendly", "Natural Preservative", "Long-Lasting"]
        },
        {
          name: "Artisan Beeswax Pellets",
          description: "Convenient beeswax pellets that melt easily for cosmetic formulations and DIY projects",
          image: "/images/Products/cave_Untitled-2-05.jpeg",
          price: "From $15",
          features: ["Easy to Melt", "Uniform Size", "Quick Dissolving", "Cosmetic Grade"],
          benefits: ["Convenient Use", "Even Melting", "Professional Quality"]
        },
        {
          name: "Raw Honeycomb Wax",
          description: "Unprocessed beeswax straight from the hive, perfect for traditional applications",
          image: "/images/Products/cave_Untitled-2-06.jpeg",
          price: "From $18",
          features: ["Completely Raw", "Unfiltered", "Natural Impurities", "Authentic Texture"],
          benefits: ["Maximum Purity", "Natural Properties", "Traditional Form"]
        },
        {
          name: "Beeswax Craft Sheets",
          description: "Thin, flexible beeswax sheets ideal for candle rolling and artistic projects",
          image: "/images/Products/cave_Untitled-2-10.jpeg",
          price: "From $8",
          features: ["Flexible Sheets", "Easy to Work", "Various Sizes", "Craft-Ready"],
          benefits: ["No Melting Required", "Beginner Friendly", "Creative Freedom"]
        },
        {
          name: "Natural Beeswax Cakes",
          description: "Traditional beeswax cakes perfect for furniture polish and leather care",
          image: "/images/Products/cave_Untitled-2-11.jpeg",
          price: "From $10",
          features: ["Traditional Shape", "Multi-Purpose", "Natural Polish", "Long-Lasting"],
          benefits: ["Furniture Care", "Leather Treatment", "Natural Shine"]
        },
        {
          name: "Premium Beeswax Rounds",
          description: "Perfectly shaped beeswax rounds for professional candle making and crafts",
          image: "/images/Products/cave_Untitled-2-13.jpeg",
          price: "From $14",
          features: ["Perfect Shape", "Professional Grade", "Consistent Quality", "Easy Handling"],
          benefits: ["Professional Results", "Uniform Burning", "Craft Excellence"]
        }
      ]
    },
    propolis: {
      title: "Raw Bee Propolis",
      description: "Nature's powerful protective resin",
      icon: Shield,
      color: "newa-green",
      gradient: "from-newa-green-400 to-newa-green-600",
      products: [
        {
          name: "Raw Propolis Extract",
          description: "Concentrated bee propolis with powerful antimicrobial properties",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.08.43 PM.jpeg",
          price: "From $25",
          features: ["Raw Extract", "High Potency", "Natural Antibiotic", "Immune Support"],
          benefits: ["Antimicrobial", "Anti-inflammatory", "Wound Healing"]
        }
      ]
    },
    venom: {
      title: "Bee Venom Syrup",
      description: "Therapeutic bee venom for natural healing",
      icon: Zap,
      color: "newa-orange",
      gradient: "from-newa-orange-400 to-newa-orange-600",
      products: [
        {
          name: "Therapeutic Bee Venom Syrup",
          description: "Carefully prepared bee venom syrup for therapeutic applications",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.15.34 PM.jpeg",
          price: "From $45",
          features: ["Controlled Dosage", "Therapeutic Grade", "Natural Pain Relief", "Anti-inflammatory"],
          benefits: ["Pain Management", "Arthritis Support", "Immune Modulation"]
        }
      ]
    },
    wine: {
      title: "Honey Wine (Mead)",
      description: "Ancient fermented honey beverages",
      icon: Wine,
      color: "newa-amber",
      gradient: "from-newa-amber-500 to-newa-orange-500",
      products: [
        {
          name: "Traditional Honey Wine",
          description: "Artisanal mead fermented from our premium honey using traditional methods",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.18.16 PM.jpeg",
          price: "From $35",
          features: ["Traditional Recipe", "Natural Fermentation", "Premium Honey", "Aged to Perfection"],
          benefits: ["Probiotic Properties", "Antioxidant Rich", "Smooth Finish"]
        }
      ]
    },
    cosmetics: {
      title: "Bee Products Cosmetics",
      description: "Natural beauty products powered by bee ingredients",
      icon: Heart,
      color: "newa-green",
      gradient: "from-newa-green-400 to-newa-amber-400",
      products: [
        {
          name: "Honey & Propolis Soap",
          description: "Gentle cleansing bar with moisturizing honey and protective propolis",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.19.05 PM.jpeg",
          price: "From $8",
          features: ["Natural Ingredients", "Moisturizing", "Antibacterial", "Gentle Formula"],
          benefits: ["Deep Cleansing", "Skin Protection", "Natural Glow"]
        },
        {
          name: "Honey Face Serum",
          description: "Anti-aging serum with honey enzymes for radiant, youthful skin",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.19.39 PM.jpeg",
          price: "From $22",
          features: ["Honey Enzymes", "Anti-Aging", "Hydrating", "Natural Glow"],
          benefits: ["Reduces Fine Lines", "Boosts Collagen", "Radiant Skin"]
        },
        {
          name: "Beeswax Lip Balm",
          description: "Nourishing lip protection with pure beeswax and natural oils",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.20.14 PM.jpeg",
          price: "From $5",
          features: ["Pure Beeswax", "Natural Oils", "Long-Lasting", "Healing Properties"],
          benefits: ["Lip Protection", "Smooth Application", "Natural Healing"]
        },
        {
          name: "Honey Body Butter",
          description: "Rich, creamy moisturizer with honey and shea butter for silky skin",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.21.01 PM.jpeg",
          price: "From $18",
          features: ["Deep Moisturizing", "Honey & Shea", "Non-Greasy", "Natural Fragrance"],
          benefits: ["Silky Skin", "Long-Lasting Moisture", "Skin Repair"]
        },
        {
          name: "Honey Lip Gloss",
          description: "Natural lip gloss with honey for shine and nourishment",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.21.54 PM.jpeg",
          price: "From $12",
          features: ["Natural Honey", "Glossy Finish", "Nourishing", "Subtle Sweetness"],
          benefits: ["Natural Shine", "Lip Nourishment", "Smooth Texture"]
        },
        {
          name: "Honey Lip Scrub",
          description: "Gentle exfoliating scrub with honey crystals for smooth lips",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.22.23 PM.jpeg",
          price: "From $10",
          features: ["Honey Crystals", "Gentle Exfoliation", "Natural Sweetness", "Moisturizing"],
          benefits: ["Smooth Lips", "Natural Exfoliation", "Sweet Taste"]
        },
        {
          name: "Honey Body Scrub",
          description: "Luxurious body scrub with honey and natural exfoliants for smooth skin",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.24.22 PM.jpeg",
          price: "From $20",
          features: ["Natural Exfoliants", "Honey Infused", "Moisturizing", "Spa Quality"],
          benefits: ["Smooth Skin", "Deep Exfoliation", "Natural Glow"]
        },
        {
          name: "Honey Lotion Collection",
          description: "Daily moisturizing lotions enriched with honey and natural botanicals",
          image: "/images/Products/WhatsApp Image 2025-07-12 at 7.24.57 PM.jpeg",
          price: "From $15",
          features: ["Daily Use", "Honey Enriched", "Natural Botanicals", "Fast Absorbing"],
          benefits: ["Daily Moisture", "Soft Skin", "Natural Protection"]
        }
      ]
    }
  }

  // Featured products for hero section
  const featuredProducts = [
    {
      name: "Premium Wildflower Honey",
      description: "Our signature raw honey, carefully extracted to preserve all natural enzymes and nutrients from Uganda's diverse wildflowers",
      image: "/images/honey-bottles.jpeg",
      category: "Premium Honey",
      badge: "Bestseller",
      icon: Star,
      color: "newa-amber",
      features: ["100% Raw", "Unfiltered", "Local Wildflowers", "Rich in Antioxidants"],
      price: "From $15"
    },
    {
      name: "Natural Beeswax Collection",
      description: "High-quality, filtered beeswax perfect for cosmetics, candles, and various artisanal applications",
      image: "/images/beeswax.jpeg",
      category: "Raw Materials",
      badge: "Artisan Grade",
      icon: Sparkles,
      color: "newa-yellow",
      features: ["Premium Quality", "Multi-Purpose", "Natural Preservative", "Eco-Friendly"],
      price: "From $12"
    },
    {
      name: "Bee Products Cosmetics",
      description: "Luxurious bee-derived cosmetics crafted for natural beauty and skin health",
      image: "/images/cosmetics-display.jpeg",
      category: "Beauty & Wellness",
      badge: "Organic Certified",
      icon: Heart,
      color: "newa-green",
      features: ["Chemical-Free", "Dermatologist Tested", "All Skin Types", "Sustainable Packaging"],
      price: "From $8"
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Products"
        subtitle="Nature's Finest"
        description="Discover our comprehensive range of premium bee-derived products, from golden honey to therapeutic remedies and natural cosmetics, all crafted with care and commitment to quality."
        badge="Product Collection"
        backgroundImage="/images/honeycomb-bees.jpg"
        gradient="from-newa-amber-600 via-newa-orange-600 to-newa-green-600"
      />

      <div className="py-16 px-4 relative overflow-hidden">
        {/* Creative Animated Bees */}
        <AnimatedBee size="md" delay={1} duration={22} path="curved" direction="right-to-left" showTrail={false} className="top-1/5 right-0 w-full h-26" />
        <AnimatedBee size="lg" delay={3} duration={18} path="circle" showTrail={false} className="bottom-1/3 left-1/4 w-52 h-52" />
        <AnimatedBee size="sm" delay={5} duration={15} path="zigzag" showTrail={false} className="top-2/3 right-1/3 w-2/3 h-18" />
        <AnimatedBee size="md" delay={7} duration={20} path="straight" direction="left-to-right" showTrail={false} className="bottom-1/5 left-0 w-3/4 h-22" />
        <AnimatedBee size="sm" delay={9} duration={25} path="curved" direction="left-to-right" showTrail={false} className="top-1/3 left-1/6 w-1/2 h-20" />
        <AnimatedBee size="md" delay={11} duration={19} path="circle" showTrail={false} className="top-1/2 right-1/6 w-44 h-44" />
        <AnimatedBee size="sm" delay={13} duration={17} path="straight" direction="right-to-left" showTrail={false} className="bottom-2/3 right-1/4 w-1/3 h-16" />
        <AnimatedBee size="lg" delay={15} duration={24} path="zigzag" showTrail={false} className="top-1/4 left-1/3 w-2/3 h-28" />
        <AnimatedBee size="sm" delay={17} duration={21} path="curved" direction="right-to-left" showTrail={false} className="bottom-1/4 right-1/5 w-1/2 h-18" />

        <div className="container mx-auto max-w-7xl relative">
          {/* Hero Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-newa-amber-100 text-newa-amber-800 border-newa-amber-200 px-8 py-3 font-bold text-lg">
                Premium Collection
              </Badge>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8">
                Nature's <span className="text-newa-amber-600">Golden</span> Treasures
                <DecorativeBee className="ml-4" size="lg" delay={1.5} />
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
                From our sustainable apiaries to your home, experience the pure essence of nature's most precious gifts.
                Each product is carefully crafted to bring you the finest quality bee products Uganda has to offer.
              </p>
            </div>

            {/* Featured Products Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {featuredProducts.map((product, index) => {
                const IconComponent = product.icon
                return (
                  <Card
                    key={index}
                    className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-gradient-to-br from-white to-gray-50"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={350}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className={`text-white shadow-lg px-3 py-2 ${
                          product.color === 'newa-green' ? 'bg-newa-green-500' :
                          product.color === 'newa-orange' ? 'bg-newa-orange-500' :
                          product.color === 'newa-amber' ? 'bg-newa-amber-500' :
                          'bg-newa-green-500'
                        }`}>
                          <IconComponent className="w-4 h-4 mr-2" />
                          {product.badge}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <Badge variant="outline" className={`mb-3 ${
                          product.color === 'newa-green' ? 'text-newa-green-700 border-newa-green-200' :
                          product.color === 'newa-orange' ? 'text-newa-orange-700 border-newa-orange-200' :
                          product.color === 'newa-amber' ? 'text-newa-amber-700 border-newa-amber-200' :
                          'text-newa-green-700 border-newa-green-200'
                        }`}>
                          {product.category}
                        </Badge>
                        <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{product.name}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs text-gray-700">
                              <CheckCircle className={`w-3 h-3 mr-2 flex-shrink-0 ${
                                product.color === 'newa-green' ? 'text-newa-green-500' :
                                product.color === 'newa-orange' ? 'text-newa-orange-500' :
                                product.color === 'newa-amber' ? 'text-newa-amber-500' :
                                'text-newa-green-500'
                              }`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

          </section>

          {/* Product Gallery */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-8 py-3 font-bold text-lg">
                Complete Collection
              </Badge>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8">
                Our <span className="text-newa-green-600">Product</span> Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
                Discover the beauty and quality of our bee products through this visual showcase
              </p>
            </div>

            {/* Masonry Gallery */}
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {/* Collect all unique images from all categories */}
              {(() => {
                const allImages = []
                const seenImages = new Set()

                // Collect unique images from all product categories
                Object.values(productCategories).forEach(category => {
                  category.products.forEach(product => {
                    if (!seenImages.has(product.image)) {
                      allImages.push({
                        image: product.image,
                        name: product.name
                      })
                      seenImages.add(product.image)
                    }
                  })
                })

                return allImages.map((product, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid mb-6 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 bg-newa-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))
              })()}
            </div>
          </section>

          {/* Why Choose Our Products */}
          <section className="mb-24">
            <div className="bg-gradient-to-br from-newa-green-50 via-white to-newa-amber-50 rounded-3xl p-12">
              <div className="text-center mb-12">
                <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-3 font-bold">
                  Why Choose Newa
                </Badge>
                <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">
                  Quality You Can <span className="text-newa-green-600">Trust</span>
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Every product is crafted with care, using sustainable practices and traditional methods passed down through generations
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Award,
                    title: "Premium Quality",
                    description: "100% natural and sustainably sourced from our own apiaries",
                    color: "newa-amber"
                  },
                  {
                    icon: Shield,
                    title: "Trusted Brand",
                    description: "Years of expertise in beekeeping and product development",
                    color: "newa-green"
                  },
                  {
                    icon: Heart,
                    title: "Customer Care",
                    description: "Dedicated support and satisfaction guarantee",
                    color: "newa-orange"
                  },
                  {
                    icon: Leaf,
                    title: "Eco-Friendly",
                    description: "Sustainable practices that protect our environment",
                    color: "newa-yellow"
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 ${
                      item.color === 'newa-green' ? 'bg-gradient-to-br from-newa-green-400 to-newa-green-600' :
                      item.color === 'newa-orange' ? 'bg-gradient-to-br from-newa-orange-400 to-newa-orange-600' :
                      item.color === 'newa-amber' ? 'bg-gradient-to-br from-newa-amber-400 to-newa-amber-600' :
                      item.color === 'newa-yellow' ? 'bg-gradient-to-br from-newa-yellow-400 to-newa-yellow-600' :
                      'bg-gradient-to-br from-newa-green-400 to-newa-green-600'
                    }`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-display font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-newa-amber-100 text-newa-amber-800 border-newa-amber-200 px-6 py-3 font-bold">
                  Our Process
                </Badge>
                <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
                  From Hive to <span className="text-newa-amber-600">Home</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Every product follows our time-tested process that ensures the highest quality while maintaining the natural integrity of bee products.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Sustainable Beekeeping",
                      description: "We maintain healthy bee colonies using eco-friendly practices that respect natural bee behavior",
                      color: "newa-amber",
                    },
                    {
                      step: "2",
                      title: "Careful Harvesting",
                      description: "Products are harvested with minimal impact on bee colonies, ensuring their continued health",
                      color: "newa-green",
                    },
                    {
                      step: "3",
                      title: "Quality Processing",
                      description: "Modern techniques preserve natural properties and purity while meeting safety standards",
                      color: "newa-orange",
                    },
                    {
                      step: "4",
                      title: "Customer Delivery",
                      description: "Products reach customers with full traceability and quality assurance guarantees",
                      color: "newa-yellow",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-10 h-10 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                        item.color === 'newa-green' ? 'bg-newa-green-500' :
                        item.color === 'newa-orange' ? 'bg-newa-orange-500' :
                        item.color === 'newa-amber' ? 'bg-newa-amber-500' :
                        item.color === 'newa-yellow' ? 'bg-newa-yellow-500' :
                        'bg-newa-green-500'
                      }`}>
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-newa-amber-200 to-newa-orange-200 rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative">
                  <Image
                    src="/images/honey-extraction.jpeg"
                    alt="Honey extraction process"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl w-full"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-newa-green-600 via-newa-amber-600 to-newa-orange-600"></div>
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            </div>

            <div className="relative text-center p-16 text-white">
              <Badge className="mb-8 bg-white/20 text-white border-white/30 px-8 py-3 font-bold text-lg">
                Get Started Today
              </Badge>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                Ready to Experience <span className="text-newa-yellow-200">Nature's Best?</span>
              </h2>
              <p className="text-xl md:text-2xl mb-12 text-green-100 max-w-4xl mx-auto font-light leading-relaxed">
                Contact us today to learn more about our premium bee products or to place an order for your home or business.
                Join thousands of satisfied customers who trust Newa Farms for quality and authenticity.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  <Link href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-newa-green-600 bg-transparent px-8 py-4 text-lg"
                >
                  <Link href="/services">
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Farm Visit
                  </Link>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Premium Quality</h4>
                  <p className="text-green-100 text-sm">100% natural and sustainably sourced</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Trusted Brand</h4>
                  <p className="text-green-100 text-sm">Years of expertise in beekeeping</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Customer Care</h4>
                  <p className="text-green-100 text-sm">Dedicated support and satisfaction</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
