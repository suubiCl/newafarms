import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Users, Award, Sparkles, Star, ArrowRight } from "lucide-react"
import { HeroSlider } from "@/components/hero-slider"
import { AnimatedBee, BeeTrail, DecorativeBee } from "@/components/animated-bee"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-newa-green-50/30 to-newa-amber-50/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-honey-pattern opacity-20"></div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-newa-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-newa-green-200 rounded-full opacity-30"></div>

        {/* Note: BeeSwarm in hero already provides 5 bees, so no additional bees needed here */}

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-newa-orange-100 text-newa-orange-800 border-newa-orange-200 px-6 py-2 text-sm font-bold tracking-wide">
              Why Choose Us
            </Badge>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8">
              The <span className="text-newa-green-700">Newa Farms</span>
              <br />
              <span className="text-newa-green-700 font-script text-4xl md:text-5xl">Difference</span>
              <DecorativeBee className="ml-4" size="lg" delay={1} />
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              We're dedicated to sustainable agriculture that benefits both our customers and the environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainable Practices",
                description: "Promoting co-existence between bees and crops for environmental harmony",
                color: "newa-green",
                delay: "0s",
              },
              {
                icon: Heart,
                title: "Customer Focused",
                description: "Understanding and exceeding customer needs through quality products",
                color: "newa-orange",
                delay: "0.1s",
              },
              {
                icon: Users,
                title: "Community Leadership",
                description: "Role model for youth and adults in commercial agriculture",
                color: "newa-amber",
                delay: "0.2s",
              },
              {
                icon: Award,
                title: "Innovation",
                description: "Where traditional agriculture meets modern innovation",
                color: "newa-yellow",
                delay: "0.3s",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className="group text-center p-6 border-2 border-transparent hover:border-newa-green-200 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardContent className="space-y-4">
                    <div
                      className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto ${
                        feature.color === 'newa-green' ? 'bg-gradient-to-br from-newa-green-400 to-newa-green-600' :
                        feature.color === 'newa-orange' ? 'bg-gradient-to-br from-newa-orange-400 to-newa-orange-600' :
                        feature.color === 'newa-amber' ? 'bg-gradient-to-br from-newa-amber-400 to-newa-amber-600' :
                        'bg-gradient-to-br from-newa-green-400 to-newa-green-600'
                      }`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                    <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <ArrowRight className={`w-6 h-6 ${
                        feature.color === 'newa-green' ? 'text-newa-green-600' :
                        feature.color === 'newa-orange' ? 'text-newa-orange-600' :
                        feature.color === 'newa-amber' ? 'text-newa-amber-600' :
                        'text-newa-green-600'
                      }`} />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 px-4 bg-gradient-to-r from-newa-amber-50 via-white to-newa-orange-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-16 left-16 w-40 h-40 bg-newa-yellow-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-newa-green-200 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-newa-orange-200 rounded-full opacity-25"></div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 text-sm font-bold tracking-wide">
              Our Products
            </Badge>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8">
              Premium <span className="">Bee Products</span>
              <DecorativeBee className="ml-3" size="md" delay={0.5} />
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light">
              From fresh honey to natural cosmetics, discover our range of bee-derived products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              {
                image: "/images/honey-extraction.jpeg",
                title: "Fresh Honey",
                description: "Pure, natural honey extracted using modern techniques",
                badge: "Premium",
                badgeIcon: Star,
                color: "newa-green",
                delay: "0s",
              },
              {
                image: "/images/beeswax.jpeg",
                title: "Beeswax Products",
                description: "High-quality beeswax for various applications",
                badge: "Artisan",
                badgeIcon: Sparkles,
                color: "newa-orange",
                delay: "0.2s",
              },
              {
                image: "/images/market-customer.jpeg",
                title: "Natural Cosmetics",
                description: "Organic skincare made from bee products",
                badge: "Organic",
                badgeIcon: Heart,
                color: "newa-amber",
                delay: "0.4s",
              },
            ].map((product, index) => {
              const BadgeIcon = product.badgeIcon
              return (
                <Card
                  key={index}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-newa-green-200"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={250}
                      className={`w-full h-56 ${product.title === "Natural Cosmetics" ? "object-top" : "object-cover"} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`text-white shadow-lg hover:scale-110 transition-transform duration-300 ${
                          product.color === 'newa-green' ? 'bg-newa-green-500' :
                          product.color === 'newa-orange' ? 'bg-newa-orange-500' :
                          product.color === 'newa-amber' ? 'bg-newa-amber-500' :
                          'bg-newa-green-500'
                        }`}
                      >
                        <BadgeIcon className="w-4 h-4 mr-2" />
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-display font-bold text-gray-900 mb-3`}>{product.title}</h3>
                    <p className="text-gray-600 mb-6 font-light leading-relaxed">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm text-${product.color}-600 font-bold tracking-wide`}>100% Natural</span>
                      <ArrowRight
                        className={`w-6 h-6 text-${product.color}-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0`}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bee Trail from Products to Services */}
      <BeeTrail startSection="products" endSection="services" delay={16} className="h-24 -mt-12 -mb-12 z-10" />

      {/* Services Preview */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-36 h-36 bg-newa-amber-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-newa-green-200 rounded-full opacity-25"></div>

        {/* Note: Keeping page clean with only the 5 bees from hero section */}

        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="">
              <Badge className="mb-6 bg-newa-amber-100 text-newa-amber-800 border-newa-amber-200 px-6 py-2 text-sm font-bold tracking-wide">
                Expert Services
              </Badge>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-10">
                Expert Training & <span className="">Consultancy</span>
                <DecorativeBee className="ml-2" size="md" delay={1.5} />
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light leading-relaxed">
                Learn from our experienced team through comprehensive training programs in modern beekeeping practices
                and organic skincare formulation.
              </p>
              <div className="space-y-8 mb-12">
                {[
                  {
                    title: "Beekeeping Consultancy",
                    description: "Expert advice on hive management and bee care",
                    color: "newa-amber",
                    delay: "0.6s",
                  },
                  {
                    title: "Training Programs",
                    description: "Hands-on learning in modern beekeeping techniques",
                    color: "newa-green",
                    delay: "0.8s",
                  },
                  {
                    title: "Farm Setup",
                    description: "Complete assistance in establishing your bee farm",
                    color: "newa-orange",
                    delay: "1s",
                  },
                ].map((service, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div
                      className={`w-4 h-4 bg-${service.color}-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300`}
                    ></div>
                    <div>
                      <h4 className={`font-display font-bold text-gray-900 text-xl mb-2`}>{service.title}</h4>
                      <p className="text-gray-600 font-light">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button asChild className="">
                <Link href="/services">Learn More About Our Services</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/apiary-training.jpeg"
                  alt="Beekeeping training session"
                  width={700}
                  height={500}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-newa-green-900/20 to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-8 -right-8 bg-white rounded-3xl p-6 shadow-2xl border-2 border-newa-green-200">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-newa-green-700">500+</div>
                  <div className="text-sm text-gray-600 font-semibold">Trained Farmers</div>
                </div>
              </div>

              {/* Additional Floating Elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-newa-amber-400 to-newa-orange-500 rounded-full opacity-80 shadow-xl"></div>
              <div className="absolute top-1/4 -left-4 w-16 h-16 bg-gradient-to-br from-newa-green-400 to-newa-green-600 rounded-full opacity-70 shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Bee Trail from Services to CTA */}
      <BeeTrail startSection="services" endSection="cta" delay={24} className="h-20 -mt-10 -mb-10 z-10" />

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-newa-green-600 via-newa-green-700 to-newa-amber-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-honey-pattern opacity-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-newa-orange-500/20 rounded-full translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-newa-amber-400/10 rounded-full -translate-x-32 -translate-y-32"></div>

        {/* Note: Clean design with only the 5 bees from hero section */}

        <div className="container mx-auto max-w-5xl text-center relative">
          <Badge className="mb-8 bg-white/20 text-white border-white/30 px-8 py-3 text-sm font-bold tracking-wide">
            Get Started Today
          </Badge>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-10">
            Ready to Start Your <span className="">Journey</span> with Us?
          </h2>
          <p className="text-2xl md:text-3xl text-green-100 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Join the sustainable agriculture revolution and discover the sweet success of beekeeping
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button asChild size="lg" variant="secondary" className="">
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className=" bg-transparent">
              <Link href="/services">Book a Farm Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
