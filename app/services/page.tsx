import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Wrench, Eye, Home, ArrowRight, Star, Award } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { AnimatedBee, DecorativeBee } from "@/components/animated-bee"

export default function ServicesPage() {
  const services = [
    {
      icon: BookOpen,
      title: "Beekeeping Consultancy",
      description:
        "Expert advice on setting up and managing bee hives, including site selection, hive placement, and colony management strategies.",
      features: ["Site Assessment", "Hive Management", "Disease Prevention", "Seasonal Planning"],
      color: "newa-amber",
      delay: "0s",
    },
    {
      icon: Users,
      title: "Training in Modern Beekeeping Practices",
      description:
        "Comprehensive hands-on training programs covering contemporary beekeeping techniques and best practices.",
      features: ["Practical Training", "Equipment Usage", "Safety Protocols", "Certification"],
      color: "newa-green",
      delay: "0.2s",
    },
    {
      icon: Wrench,
      title: "Training in Organic Skincare Formulation",
      description:
        "Learn to create natural cosmetics and skincare products using bee-derived ingredients and organic materials.",
      features: ["Product Formulation", "Quality Control", "Packaging", "Market Preparation"],
      color: "newa-orange",
      delay: "0.4s",
    },
    {
      icon: Eye,
      title: "Farm Visits",
      description:
        "Educational tours of our sustainable farming operations, showcasing the harmony between bees and crops.",
      features: ["Guided Tours", "Educational Sessions", "Q&A with Experts", "Hands-on Experience"],
      color: "newa-yellow",
      delay: "0.6s",
    },
    {
      icon: Home,
      title: "Farm Set Up",
      description: "Complete assistance in establishing your own bee farm, from initial planning to operational setup.",
      features: ["Planning & Design", "Equipment Supply", "Installation", "Ongoing Support"],
      color: "newa-green",
      delay: "0.8s",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        subtitle="Expert Training & Support"
        description="Comprehensive training, consultancy, and support services to help you succeed in sustainable beekeeping and organic product development."
        badge="Professional Services"
        backgroundImage="/images/apiary-training.jpeg"
        gradient="from-newa-orange-600 via-newa-green-600 to-newa-amber-600"
      />

      <div className="py-20 px-4 relative overflow-hidden">
        {/* Animated Bees for Services Page */}
        <AnimatedBee size="md" delay={1} duration={18} path="curved" direction="left-to-right" className="top-1/4 left-0 w-full h-24" />
        <AnimatedBee size="sm" delay={3} duration={15} path="circle" className="bottom-1/3 right-1/4 w-40 h-40" />
        <AnimatedBee size="lg" delay={5} duration={22} path="zigzag" className="top-2/3 left-1/3 w-2/3 h-20" />
        <AnimatedBee size="md" delay={7} duration={19} path="curved" direction="right-to-left" className="bottom-1/5 right-0 w-3/4 h-26" />
        <AnimatedBee size="sm" delay={9} duration={16} path="straight" direction="left-to-right" className="top-1/6 right-1/3 w-1/2 h-16" />
        <AnimatedBee size="md" delay={11} duration={24} path="circle" className="top-1/2 left-1/5 w-44 h-44" />
        <AnimatedBee size="sm" delay={13} duration={20} path="curved" direction="right-to-left" className="bottom-2/3 left-1/4 w-2/3 h-18" />
        <AnimatedBee size="lg" delay={15} duration={17} path="zigzag" className="top-3/4 right-1/5 w-1/2 h-24" />
        <AnimatedBee size="sm" delay={17} duration={21} path="straight" direction="left-to-right" className="bottom-1/4 left-1/6 w-1/3 h-14" />

        <div className="container mx-auto max-w-6xl relative">
          {/* Services Grid */}
          <section className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 font-bold tracking-wide">
                Our Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Comprehensive <span className="text-newa-green-600">Agricultural</span> Solutions
                <DecorativeBee className="ml-3" size="md" delay={2} />
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                From expert consultancy to hands-on training, we provide everything you need to succeed in sustainable
                agriculture
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className="group p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-newa-green-200 animate-fade-in"
                    style={{ animationDelay: service.delay }}
                  >
                    <CardHeader className="pb-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl font-display font-bold text-gray-900 group-hover:text-newa-green-700 transition-colors duration-300">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 font-light leading-relaxed">{service.description}</p>
                      <div className="space-y-4">
                        <h4 className="font-display font-semibold text-gray-900 text-sm">What's Included:</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className={`w-6 h-6 text-${service.color}-600 animate-bounce-gentle`} />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Training Highlight */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-6 bg-newa-amber-100 text-newa-amber-800 border-newa-amber-200 px-6 py-2 font-bold tracking-wide">
                  Training Excellence
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                  Hands-On <span className="text-newa-amber-600">Learning</span> Experience
                </h2>
                <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                  Our training programs combine theoretical knowledge with practical, hands-on experience. Learn
                  directly from our experienced team in real farm conditions with personalized guidance.
                </p>
                <div className="space-y-6 mb-10">
                  {[
                    {
                      title: "Expert Instructors",
                      description: "Learn from professionals with years of experience in sustainable agriculture",
                      color: "newa-amber",
                    },
                    {
                      title: "Real-World Application",
                      description: "Practice in actual farm conditions with live bee colonies and equipment",
                      color: "newa-green",
                    },
                    {
                      title: "Ongoing Support",
                      description: "Continued guidance and mentorship even after training completion",
                      color: "newa-orange",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div
                        className={`w-3 h-3 bg-${item.color}-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300`}
                      ></div>
                      <div>
                        <h4 className="font-display font-bold text-gray-900 mb-2 group-hover:text-newa-green-700 transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 font-light">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="bg-gradient-to-r from-newa-amber-500 to-newa-orange-500 hover:from-newa-amber-600 hover:to-newa-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">Book Your Training</Link>
                </Button>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/apiary-training.jpeg"
                    alt="Beekeeping training session with protective gear"
                    width={600}
                    height={500}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-newa-green-900/20 to-transparent"></div>
                </div>

                {/* Floating Achievement Badges */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-newa-amber-200 animate-bounce-gentle">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-newa-amber-700">500+</div>
                    <div className="text-sm text-gray-600 font-semibold">Trained Farmers</div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-newa-green-200 animate-bounce-gentle"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-newa-green-700">95%</div>
                    <div className="text-sm text-gray-600 font-semibold">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Farm Visit Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-newa-amber-50 via-white to-newa-green-50 rounded-3xl p-12 animate-fade-in">
              <div className="text-center mb-12">
                <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 font-bold tracking-wide">
                  Farm Experience
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                  Visit Our <span className="text-newa-green-600">Sustainable</span> Farm
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
                  Experience sustainable agriculture firsthand. See how bees and crops coexist in perfect harmony while
                  learning about our innovative practices.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="animate-fade-in">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                    <Image
                      src="/images/beehives.jpeg"
                      alt="Beehives in natural setting"
                      width={500}
                      height={350}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                <div className="space-y-6 animate-slide-in-right">
                  <h3 className="text-2xl font-display font-bold text-gray-900">What You'll Experience:</h3>
                  <div className="space-y-4">
                    {[
                      { text: "Live beekeeping demonstrations with expert guides", icon: Star, color: "newa-amber" },
                      { text: "Honey extraction process from hive to jar", icon: Award, color: "newa-green" },
                      { text: "Product tasting sessions with fresh samples", icon: Star, color: "newa-orange" },
                      { text: "Sustainable farming practices in action", icon: Award, color: "newa-yellow" },
                    ].map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="flex items-start space-x-4 group">
                          <div
                            className={`w-8 h-8 bg-${item.color}-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className={`w-4 h-4 text-${item.color}-600`} />
                          </div>
                          <span className="text-gray-700 font-light group-hover:text-gray-900 transition-colors duration-300">
                            {item.text}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-newa-green-600 to-newa-amber-600 hover:from-newa-green-700 hover:to-newa-amber-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mt-8"
                  >
                    <Link href="/contact">Schedule a Visit</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-newa-green-600 via-newa-green-700 to-newa-amber-600 rounded-3xl p-12 text-white animate-fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 font-bold tracking-wide">
                Get Started Today
              </Badge>
              <h2 className="text-4xl font-display font-bold mb-6">Ready to Transform Your Agricultural Journey?</h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto font-light">
                Contact us today to discuss your beekeeping goals and find the right service package for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-newa-green-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-newa-green-600 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/products">View Our Products</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
