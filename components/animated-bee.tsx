"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface AnimatedBeeProps {
  size?: "sm" | "md" | "lg"
  delay?: number
  duration?: number
  path?: "straight" | "curved" | "zigzag" | "circle"
  direction?: "left-to-right" | "right-to-left" | "top-to-bottom" | "bottom-to-top"
  showTrail?: boolean
  className?: string
}

export function AnimatedBee({
  size = "md",
  delay = 0,
  duration = 8,
  path = "curved",
  direction = "left-to-right",
  showTrail = true,
  className = ""
}: AnimatedBeeProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const sizeClasses = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 }
  }

  const getAnimationPath = () => {
    switch (path) {
      case "straight":
        return direction === "left-to-right" 
          ? "animate-bee-straight-lr"
          : direction === "right-to-left"
          ? "animate-bee-straight-rl"
          : direction === "top-to-bottom"
          ? "animate-bee-straight-tb"
          : "animate-bee-straight-bt"
      case "zigzag":
        return "animate-bee-zigzag"
      case "circle":
        return "animate-bee-circle"
      default:
        return direction === "left-to-right"
          ? "animate-bee-curved-lr"
          : "animate-bee-curved-rl"
    }
  }

  const getTrailPath = () => {
    switch (path) {
      case "straight":
        return direction === "left-to-right" || direction === "right-to-left"
          ? "M 0 50 L 100 50"
          : "M 50 0 L 50 100"
      case "zigzag":
        return "M 0 50 L 25 25 L 50 50 L 75 25 L 100 50"
      case "circle":
        return "M 50 10 A 40 40 0 1 1 50 90 A 40 40 0 1 1 50 10"
      default:
        return direction === "left-to-right"
          ? "M 0 60 Q 25 20 50 40 Q 75 60 100 30"
          : "M 100 60 Q 75 20 50 40 Q 25 60 0 30"
    }
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Dotted Trail */}
      {showTrail && isVisible && (
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d={getTrailPath()}
            stroke="#f59e0b"
            strokeWidth="0.5"
            strokeDasharray="2,3"
            fill="none"
            className="animate-trail-draw"
            style={{
              animationDelay: `${delay}s`,
              animationDuration: `${duration * 0.3}s`
            }}
          />
        </svg>
      )}

      {/* Animated Bee */}
      {isVisible && (
        <div
          className={`absolute ${getAnimationPath()}`}
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${delay + (duration * 0.2)}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "ease-in-out"
          }}
        >
          <div className="animate-bee-hover filter drop-shadow-sm">
            <Image
              src="/images/beeguy.png"
              alt="Animated bee"
              width={sizeClasses[size].width}
              height={sizeClasses[size].height}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

// Bee Trail Component for section transitions
export function BeeTrail({
  startSection,
  endSection,
  delay = 0,
  className = ""
}: {
  startSection: string
  endSection: string
  delay?: number
  className?: string
}) {
  return (
    <div className={`relative ${className}`}>
      <AnimatedBee
        size="md"
        delay={delay}
        duration={6}
        path="curved"
        direction="top-to-bottom"
        showTrail={true}
        className="h-32"
      />
      
      {/* Section connector visual */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300 opacity-20"></div>
      
      {/* Floating pollen particles */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-orange-300 rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
    </div>
  )
}

// Decorative Bee Swarm for hero sections
export function BeeSwarm({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <AnimatedBee size="sm" delay={0} duration={12} path="circle" className="top-1/4 left-1/4 w-32 h-32" />
      <AnimatedBee size="sm" delay={2} duration={10} path="curved" direction="left-to-right" className="top-1/3 right-1/4 w-40 h-20" />
      <AnimatedBee size="sm" delay={4} duration={14} path="zigzag" className="bottom-1/3 left-1/3 w-48 h-24" />
      <AnimatedBee size="md" delay={1} duration={16} path="curved" direction="right-to-left" className="top-1/2 left-1/2 w-56 h-32" />
      <AnimatedBee size="sm" delay={6} duration={11} path="circle" className="bottom-1/4 right-1/3 w-36 h-36" />
    </div>
  )
}

// Single decorative bee for headers and special sections
export function DecorativeBee({
  className = "",
  size = "md",
  delay = 0
}: {
  className?: string
  size?: "sm" | "md" | "lg"
  delay?: number
}) {
  const sizeClasses = {
    sm: { width: 20, height: 20 },
    md: { width: 28, height: 28 },
    lg: { width: 40, height: 40 }
  }

  return (
    <div className={`inline-block ${className}`}>
      <div
        className="inline-block animate-bee-hover filter drop-shadow-sm"
        style={{ animationDelay: `${delay}s` }}
      >
        <Image
          src="/images/beeguy.png"
          alt="Decorative bee"
          width={sizeClasses[size].width}
          height={sizeClasses[size].height}
          className="object-contain"
        />
      </div>
    </div>
  )
}
