import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface PageHeaderProps {
  title: string
  subtitle?: string
  description: string
  badge?: string
  backgroundImage?: string
  gradient?: string
}

export function PageHeader({
  title,
  subtitle,
  description,
  badge,
  backgroundImage = "/images/beehives.jpeg",
  gradient = "from-newa-green-600 via-newa-green-700 to-newa-green-800",
}: PageHeaderProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-newa-green-50 to-newa-amber-50">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Page header background"
          fill
          className="object-cover animate-pulse-scale"
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-85 animate-gradient-shift`}></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-honey-pattern opacity-20 animate-float"></div>

      {/* Decorative Elements */}
      <div className="absolute top-16 right-16 w-40 h-40 bg-white/10 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-16 left-16 w-32 h-32 bg-newa-orange-500/20 rounded-full animate-wiggle"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-newa-amber-400/30 rounded-full animate-float"></div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            <div className="space-y-8 animate-fade-in-up">
              {badge && (
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm px-6 py-2 text-sm font-bold tracking-wide animate-scale-in hover:scale-110 transition-transform duration-300">
                  {badge}
                </Badge>
              )}

              {subtitle && (
                <h2 className="text-xl font-bold text-newa-amber-200 uppercase tracking-[0.3em] animate-fade-in-left font-mono">
                  {subtitle}
                </h2>
              )}

              <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">{title}</h1>

              <p
                className="text-xl md:text-3xl text-green-100 leading-relaxed max-w-4xl font-light animate-fade-in-right"
                style={{ animationDelay: "0.5s" }}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full animate-float">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  )
}
