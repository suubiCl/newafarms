import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock, User, ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { AnimatedBee, DecorativeBee, SimpleBee } from "@/components/animated-bee"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Get In Touch"
        description="Ready to start your journey with sustainable agriculture? Get in touch with our team for inquiries, consultations, or to schedule a farm visit."
        badge="Contact Information"
        backgroundImage="/images/rebecca-products.jpeg"
        gradient="from-newa-green-600 via-newa-orange-600 to-newa-amber-600"
      />

      <div className="py-20 px-4 relative overflow-hidden">
        {/* Simple Animated Bees - Maximum 5 */}
        <SimpleBee size="sm" delay={1} animation="circle" className="top-1/6 right-1/5" />
        <SimpleBee size="md" delay={3} animation="drift-right" className="bottom-1/4 left-0" />
        <SimpleBee size="lg" delay={5} animation="zigzag" className="top-1/2 left-0" />
        <SimpleBee size="sm" delay={7} animation="drift-left" className="bottom-1/6 right-0" />
        <SimpleBee size="md" delay={2} animation="float" className="top-1/3 left-1/6" />

        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="p-8 shadow-2xl border-2 border-newa-green-100 hover:border-newa-green-200 transition-all duration-300">
                <CardHeader className="pb-8">
                  <Badge className="mb-4 bg-newa-green-100 text-newa-green-800 w-fit px-4 py-2 font-bold">
                    Send Message
                  </Badge>
                  <CardTitle className="text-3xl font-display font-bold text-gray-900">
                    Get In Touch With Us
                    <DecorativeBee className="ml-3" size="md" delay={1.5} />
                  </CardTitle>
                  <p className="text-gray-600 font-light">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form
                    action="mailto:rebeccaabolet@gmail.com"
                    method="post"
                    encType="text/plain"
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Your first name"
                          className="h-12 border-2 border-gray-200 focus:border-newa-green-500 transition-colors duration-300"
                          required
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Your last name"
                          className="h-12 border-2 border-gray-200 focus:border-newa-green-500 transition-colors duration-300"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="h-12 border-2 border-gray-200 focus:border-newa-green-500 transition-colors duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+256 XXX XXX XXX"
                        className="h-12 border-2 border-gray-200 focus:border-newa-green-500 transition-colors duration-300"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What can we help you with?"
                        className="h-12 border-2 border-gray-200 focus:border-newa-green-500 transition-colors duration-300"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-[140px] border-2 border-gray-200 focus:border-newa-green-500 transition-colors duration-300 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-newa-green-600 to-newa-green-700 hover:from-newa-green-700 hover:to-newa-green-800 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-semibold"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in-right">
              {/* Main Contact Info */}
              <Card className="p-8 shadow-xl border-2 border-newa-amber-100 hover:border-newa-amber-200 transition-all duration-300">
                <CardHeader className="pb-6">
                  <Badge className="mb-4 bg-newa-amber-100 text-newa-amber-800 w-fit px-4 py-2 font-bold">
                    Contact Details
                  </Badge>
                  <CardTitle className="text-2xl font-display font-bold text-gray-900">Reach Out to Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "General Inquiries",
                      content: "newafarmm@gmail.com",
                      color: "newa-green",
                    },
                    {
                      icon: Phone,
                      title: "Phone Support",
                      content: "+256 772 477917",
                      color: "newa-amber",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      content: "Uganda",
                      color: "newa-orange",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM",
                      color: "newa-yellow",
                    },
                  ].map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${
                            item.color === 'newa-green' ? 'bg-newa-green-100' :
                            item.color === 'newa-orange' ? 'bg-newa-orange-100' :
                            item.color === 'newa-amber' ? 'bg-newa-amber-100' :
                            'bg-newa-green-100'
                          }`}
                        >
                          <IconComponent className={`w-6 h-6 ${
                            item.color === 'newa-green' ? 'text-newa-green-600' :
                            item.color === 'newa-orange' ? 'text-newa-orange-600' :
                            item.color === 'newa-amber' ? 'text-newa-amber-600' :
                            'text-newa-green-600'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-gray-900 mb-2 group-hover:text-newa-green-700 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 font-light whitespace-pre-line">{item.content}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <Card className="p-8 bg-gradient-to-r from-newa-green-50 via-white to-newa-amber-50 shadow-xl border-2 border-newa-green-100">
                <CardHeader className="pb-6">
                  <Badge className="mb-4 bg-newa-green-100 text-newa-green-800 w-fit px-4 py-2 font-bold">
                    Direct Contact
                  </Badge>
                  <CardTitle className="text-xl font-display font-bold text-gray-900">Connect with Our CEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-newa-green-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-newa-green-600" />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-gray-900">Rebecca Akello</h4>
                        <p className="text-gray-600 text-sm font-light">CEO & Founder</p>
                      </div>
                    </div>
                    <div className="space-y-3 ml-16">
                      <div className="flex items-center text-gray-700">
                        <Mail className="w-4 h-4 mr-3 text-newa-green-600" />
                        <span className="font-light">rebeccaabolet@gmail.com</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <Phone className="w-4 h-4 mr-3 text-newa-amber-600" />
                        <span className="font-light">+256 788501212</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full mt-4 border-2 border-newa-green-600 text-newa-green-600 hover:bg-newa-green-600 hover:text-white transition-all duration-300 bg-transparent"
                    >
                      <Link href="/ceo">View Full Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>

          {/* CTA Section */}
          <section className="mt-20">
            <div className="bg-gradient-to-r from-newa-green-600 via-newa-green-700 to-newa-amber-600 rounded-3xl p-12 text-white text-center animate-fade-in">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 px-6 py-2 font-bold tracking-wide">
                Let's Connect
              </Badge>
              <h2 className="text-4xl font-display font-bold mb-6">Ready to Start Your Agricultural Journey?</h2>
              <p className="text-xl mb-10 text-green-100 max-w-2xl mx-auto font-light">
                Whether you're a beginner or experienced farmer, we're here to support your journey towards sustainable
                agriculture and beekeeping success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="bg-white text-newa-green-700 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-newa-green-600 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/about">Learn Our Story</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
