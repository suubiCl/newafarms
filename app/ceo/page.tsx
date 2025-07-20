import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Lightbulb,
  Target,
  ArrowLeft,
  Calendar,
  BookOpen,
  Briefcase,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function CEOPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Rebecca Akello"
        subtitle="CEO & Founder"
        description="Visionary leader transforming Uganda's agricultural landscape through sustainable beekeeping and innovative organic product development."
        badge="Leadership Profile"
        backgroundImage="/images/rebecca-products.jpeg"
        gradient="from-newa-green-600 via-newa-amber-600 to-newa-orange-600"
      />

      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Navigation */}
          <div className="mb-12 animate-fade-in">
            <Button asChild variant="outline" className="mb-8 bg-transparent">
              <Link href="/about">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to About Us
              </Link>
            </Button>
          </div>

          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 font-bold tracking-wide">
                  Visionary Leader
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-8">
                  Rebecca <span className="text-newa-green-700">Akello</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                  As the CEO and Founder of Newa Farms Limited, Rebecca Akello has dedicated her career to
                  revolutionizing sustainable agriculture in Uganda. With over a decade of hands-on experience in
                  beekeeping and organic product development, she has built Newa Farms into a leading agricultural
                  enterprise that serves as a model for environmental stewardship and community development.
                </p>
                <p className="text-xl text-gray-700 mb-10 font-light leading-relaxed">
                  Rebecca's innovative approach to agriculture emphasizes the harmonious coexistence of bees and crops,
                  creating sustainable ecosystems that benefit both nature and local communities. Her leadership has
                  transformed traditional farming practices and inspired a new generation of agricultural entrepreneurs.
                </p>

                {/* Contact Information */}
                <div className="bg-gradient-to-r from-newa-green-50 to-newa-amber-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-6">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-newa-green-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-newa-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">rebeccaabolet@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-newa-amber-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-newa-amber-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+256 788501212</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-newa-orange-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-newa-orange-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">Uganda</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-slide-in-right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/rebecca-products.jpeg"
                    alt="Rebecca Akello with her products"
                    width={600}
                    height={700}
                    className="w-full h-[700px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-newa-green-900/20 to-transparent"></div>
                </div>

                {/* Floating Achievement Badges */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-newa-green-200 animate-bounce-gentle">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-newa-green-700">10+</div>
                    <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-newa-amber-200 animate-bounce-gentle"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-newa-amber-700">500+</div>
                    <div className="text-sm text-gray-600 font-semibold">Farmers Trained</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Journey */}
          <section className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-newa-amber-100 text-newa-amber-800 border-newa-amber-200 px-6 py-2 font-bold tracking-wide">
                Professional Journey
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Career <span className="text-newa-amber-600">Milestones</span>
              </h2>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "Expansion & Innovation",
                  description:
                    "Leading Newa Farms' expansion into new product lines and international markets while maintaining sustainable practices.",
                  icon: Target,
                  color: "newa-green",
                },
                {
                  year: "2020",
                  title: "Community Impact Programs",
                  description:
                    "Launched comprehensive training programs that have educated over 500 farmers in modern beekeeping techniques.",
                  icon: Users,
                  color: "newa-amber",
                },
                {
                  year: "2018",
                  title: "Organic Certification",
                  description:
                    "Achieved organic certification for all Newa Farms products, setting new standards in the industry.",
                  icon: Award,
                  color: "newa-orange",
                },
                {
                  year: "2014",
                  title: "Founded Newa Farms",
                  description:
                    "Established Newa Farms Limited with a vision to revolutionize sustainable agriculture in Uganda.",
                  icon: Lightbulb,
                  color: "newa-yellow",
                },
              ].map((milestone, index) => {
                const IconComponent = milestone.icon
                return (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-newa-green-200 animate-fade-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                            milestone.color === 'newa-green' ? 'bg-gradient-to-br from-newa-green-400 to-newa-green-600' :
                            milestone.color === 'newa-orange' ? 'bg-gradient-to-br from-newa-orange-400 to-newa-orange-600' :
                            milestone.color === 'newa-amber' ? 'bg-gradient-to-br from-newa-amber-400 to-newa-amber-600' :
                            'bg-gradient-to-br from-newa-green-400 to-newa-green-600'
                          }`}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            <Badge className={`${
                              milestone.color === 'newa-green' ? 'bg-newa-green-100 text-newa-green-800' :
                              milestone.color === 'newa-orange' ? 'bg-newa-orange-100 text-newa-orange-800' :
                              milestone.color === 'newa-amber' ? 'bg-newa-amber-100 text-newa-amber-800' :
                              'bg-newa-green-100 text-newa-green-800'
                            }`}>
                              {milestone.year}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{milestone.title}</h3>
                          <p className="text-gray-600 font-light leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Expertise Areas */}
          <section className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 font-bold tracking-wide">
                Areas of Expertise
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Core <span className="text-newa-green-600">Competencies</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Sustainable Beekeeping",
                  description:
                    "Expert knowledge in modern beekeeping practices that prioritize bee health and environmental sustainability.",
                  color: "newa-green",
                },
                {
                  icon: Briefcase,
                  title: "Organic Product Development",
                  description: "Specialized in creating high-quality organic products from bee-derived ingredients.",
                  color: "newa-amber",
                },
                {
                  icon: Users,
                  title: "Community Training",
                  description:
                    "Passionate educator who has trained hundreds of farmers in sustainable agricultural practices.",
                  color: "newa-orange",
                },
                {
                  icon: Target,
                  title: "Business Leadership",
                  description:
                    "Proven track record in building and scaling agricultural enterprises with social impact.",
                  color: "newa-yellow",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Management",
                  description:
                    "Pioneer in integrating traditional farming wisdom with modern agricultural technologies.",
                  color: "newa-green",
                },
                {
                  icon: Award,
                  title: "Quality Assurance",
                  description: "Committed to maintaining the highest standards in product quality and safety.",
                  color: "newa-amber",
                },
              ].map((expertise, index) => {
                const IconComponent = expertise.icon
                return (
                  <Card
                    key={index}
                    className="group text-center p-8 border-2 border-transparent hover:border-newa-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="space-y-6">
                      <div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg ${
                          expertise.color === 'newa-green' ? 'bg-gradient-to-br from-newa-green-400 to-newa-green-600' :
                          expertise.color === 'newa-orange' ? 'bg-gradient-to-br from-newa-orange-400 to-newa-orange-600' :
                          expertise.color === 'newa-amber' ? 'bg-gradient-to-br from-newa-amber-400 to-newa-amber-600' :
                          'bg-gradient-to-br from-newa-green-400 to-newa-green-600'
                        }`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-newa-green-700 transition-colors duration-300">
                        {expertise.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">{expertise.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Vision Statement */}
          <section className="mb-20">
            <Card className="overflow-hidden border-2 border-newa-green-100 animate-fade-in">
              <div className="bg-gradient-to-r from-newa-green-600 via-newa-green-700 to-newa-amber-600 p-12 text-white text-center">
                <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 font-bold tracking-wide">
                  Vision Statement
                </Badge>
                <h2 className="text-4xl font-display font-bold mb-8">Rebecca's Vision for the Future</h2>
                <blockquote className="text-2xl font-light leading-relaxed max-w-4xl mx-auto italic">
                  "I envision a future where sustainable agriculture is not just a practice, but a way of life. Where
                  every farmer understands the vital role of bees in our ecosystem, and where traditional wisdom meets
                  modern innovation to create products that nourish both people and the planet."
                </blockquote>
                <div className="mt-8">
                  <div className="w-16 h-1 bg-white/30 mx-auto"></div>
                </div>
              </div>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-newa-amber-50 via-white to-newa-green-50 rounded-3xl p-12 animate-fade-in">
              <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 font-bold tracking-wide">
                Connect with Rebecca
              </Badge>
              <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Ready to Learn More?</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light">
                Whether you're interested in sustainable agriculture, beekeeping training, or partnership opportunities,
                Rebecca is always open to meaningful conversations.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-newa-green-600 to-newa-green-700 hover:from-newa-green-700 hover:to-newa-green-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-newa-green-600 text-newa-green-600 hover:bg-newa-green-600 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
                >
                  <Link href="/services">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Meeting
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
