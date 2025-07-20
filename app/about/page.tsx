import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Users, Leaf, Award, ArrowRight, User } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { AnimatedBee, DecorativeBee } from "@/components/animated-bee"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Story"
        subtitle="About Newa Farms"
        description="Newa Farms Limited is dedicated to innovative agriculture that creates harmony between nature and productivity, fostering sustainable relationships between bees and crops."
        badge="Learn About Us"
        backgroundImage="/images/team-visit.jpeg"
        gradient="from-newa-green-600 via-newa-amber-600 to-newa-orange-600"
      />

      <div className="py-20 px-4 relative overflow-hidden">
        {/* Creative Animated Bees for About Page */}
        <AnimatedBee size="lg" delay={1} duration={20} path="curved" direction="left-to-right" className="top-1/6 left-0 w-full h-28" />
        <AnimatedBee size="md" delay={3} duration={16} path="circle" className="bottom-1/4 right-1/5 w-48 h-48" />
        <AnimatedBee size="sm" delay={5} duration={14} path="zigzag" className="top-1/2 left-1/4 w-1/2 h-20" />
        <AnimatedBee size="md" delay={7} duration={18} path="curved" direction="right-to-left" className="bottom-1/3 left-0 w-3/4 h-24" />
        <AnimatedBee size="sm" delay={9} duration={22} path="straight" direction="left-to-right" className="top-1/3 right-1/4 w-1/2 h-16" />
        <AnimatedBee size="lg" delay={11} duration={26} path="circle" className="top-2/3 left-1/6 w-56 h-56" />
        <AnimatedBee size="sm" delay={13} duration={15} path="curved" direction="right-to-left" className="bottom-1/6 right-1/3 w-2/3 h-18" />
        <AnimatedBee size="md" delay={15} duration={19} path="zigzag" className="top-1/4 right-1/6 w-1/3 h-22" />
        <AnimatedBee size="sm" delay={17} duration={17} path="straight" direction="left-to-right" className="bottom-2/3 left-1/3 w-1/2 h-14" />

        <div className="container mx-auto max-w-7xl relative">
          {/* Mission Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 font-bold tracking-wide">
                  Our Mission
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                  Transforming <span className="text-newa-green-700">Agriculture</span> Through Innovation
                  <DecorativeBee className="ml-3" size="lg" delay={2} />
                </h2>
                <p className="text-xl text-gray-700 mb-8 font-light leading-relaxed">
                  At Newa Farms Limited, we are committed to producing and delivering products that meet and exceed
                  customer satisfaction by thoroughly analyzing and understanding their needs. We believe in the power
                  of innovation to transform traditional agriculture.
                </p>
                <p className="text-xl text-gray-700 font-light leading-relaxed">
                  Our approach centers on fostering a sustainable environment where bees and crops coexist harmoniously.
                  We recognize that bees play a vital role in pollinating crops, which in turn provide nectar for them -
                  creating a perfect cycle of mutual benefit.
                </p>
              </div>
              <div className="relative animate-slide-in-right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/team-visit.jpeg"
                    alt="Newa Farms team in the field"
                    width={600}
                    height={400}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-newa-green-900/20 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-newa-green-200 animate-bounce-gentle">
                  <div className="text-center">
                    <div className="text-2xl font-display font-bold text-newa-green-700">10+</div>
                    <div className="text-sm text-gray-600 font-semibold">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-newa-orange-100 text-newa-orange-800 border-newa-orange-200 px-6 py-2 font-bold tracking-wide">
                Our Goals
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Driving <span className="text-newa-orange-600">Sustainable</span> Change
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Customer Satisfaction",
                  description:
                    "To produce and deliver products that meet our customers' satisfaction by analyzing and understanding their needs.",
                  color: "newa-amber",
                  delay: "0s",
                },
                {
                  icon: Users,
                  title: "Community Leadership",
                  description:
                    "To be a role model for youth, men, and women who want to take up commercial agriculture.",
                  color: "newa-green",
                  delay: "0.2s",
                },
                {
                  icon: Leaf,
                  title: "Environmental Protection",
                  description:
                    "To protect bees and the environment through promoting co-existence between bees and crops.",
                  color: "newa-orange",
                  delay: "0.4s",
                },
              ].map((goal, index) => {
                const IconComponent = goal.icon
                return (
                  <Card
                    key={index}
                    className="group text-center p-8 border-2 border-transparent hover:border-newa-green-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: goal.delay }}
                  >
                    <CardContent className="space-y-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br from-${goal.color}-400 to-${goal.color}-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-gray-900 group-hover:text-newa-green-700 transition-colors duration-300">
                        {goal.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">{goal.description}</p>
                      <div className="flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className={`w-5 h-5 text-${goal.color}-600 animate-bounce-gentle`} />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-newa-amber-50 via-white to-newa-green-50 rounded-3xl p-12 animate-fade-in">
              <div className="text-center mb-12">
                <Badge className="mb-6 bg-newa-amber-100 text-newa-amber-800 border-newa-amber-200 px-6 py-2 font-bold tracking-wide">
                  Our Values
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                  What <span className="text-newa-amber-600">Drives</span> Us
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Innovation",
                    description: "Embracing modern techniques while respecting traditional wisdom",
                    color: "newa-amber",
                  },
                  {
                    title: "Sustainability",
                    description: "Creating lasting positive impact on the environment",
                    color: "newa-green",
                  },
                  {
                    title: "Quality",
                    description: "Delivering excellence in every product we create",
                    color: "newa-orange",
                  },
                  {
                    title: "Community",
                    description: "Building stronger agricultural communities together",
                    color: "newa-yellow",
                  },
                ].map((value, index) => (
                  <div key={index} className="text-center group">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-${value.color}-400 to-${value.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h4 className={`text-xl font-display font-bold text-${value.color}-700 mb-3`}>{value.title}</h4>
                    <p className="text-gray-600 font-light">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="mb-20">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-newa-green-100 text-newa-green-800 border-newa-green-200 px-6 py-2 font-bold tracking-wide">
                Leadership
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Meet Our <span className="text-newa-green-600">Visionary</span> Leader
              </h2>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-newa-green-100 hover:border-newa-green-300 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src="/images/rebecca-products.jpeg"
                    alt="Rebecca Akello - CEO & Founder"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-newa-green-900/20 to-transparent"></div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-4 bg-newa-green-100 text-newa-green-800 w-fit">CEO & Founder</Badge>
                  <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">Rebecca Akello</h3>
                  <p className="text-lg text-gray-600 mb-6 font-light leading-relaxed">
                    Visionary leader driving sustainable agriculture innovation in Uganda. With over a decade of
                    experience in beekeeping and organic product development, Rebecca has transformed Newa Farms into a
                    leading agricultural enterprise.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-newa-green-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Email:</span> rebeccaabolet@gmail.com
                    </div>
                    <div className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-newa-amber-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Phone:</span> +256 788501212
                    </div>
                  </div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-newa-green-600 to-newa-green-700 hover:from-newa-green-700 hover:to-newa-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
                  >
                    <Link href="/ceo">
                      <User className="w-4 h-4 mr-2" />
                      View Full Profile
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </section>

          {/* Impact Section */}
          <section className="mb-16">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-6 bg-newa-orange-100 text-newa-orange-800 border-newa-orange-200 px-6 py-2 font-bold tracking-wide">
                Our Impact
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Making a <span className="text-newa-orange-600">Difference</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/community-group.jpeg"
                    alt="Community engagement and training"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Community Engagement</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  We actively engage with local communities, providing training and support to aspiring agriculturalists
                  and promoting sustainable farming practices that benefit entire regions.
                </p>
              </div>
              <div className="animate-slide-in-right">
                <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/beehives.jpeg"
                    alt="Sustainable beekeeping practices"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Sustainable Practices</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Our beekeeping operations demonstrate how agriculture can work in harmony with nature, creating
                  benefits for both farmers and the environment while preserving biodiversity.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-newa-green-600 via-newa-green-700 to-newa-amber-600 rounded-3xl p-12 text-white animate-fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 font-bold tracking-wide">
                Join Our Mission
              </Badge>
              <h2 className="text-4xl font-display font-bold mb-6">Ready to Be Part of the Change?</h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto font-light">
                Join us in creating a sustainable future through innovative agriculture and bee conservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-newa-green-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-newa-green-600 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
