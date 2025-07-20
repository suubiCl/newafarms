"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface SimpleBeeProps {
  size?: "sm" | "md" | "lg"
  delay?: number
  animation?: "float" | "drift-right" | "drift-left" | "circle" | "zigzag"
  className?: string
}

export function SimpleBee({
  size = "md",
  delay = 0,
  animation = "float",
  className = ""
}: SimpleBeeProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000)
    return () => clearTimeout(timer)
  }, [delay])

  const sizeClasses = {
    sm: { width: 20, height: 20 },
    md: { width: 28, height: 28 },
    lg: { width: 36, height: 36 }
  }

  const getAnimationClass = () => {
    switch (animation) {
      case "drift-right":
        return "animate-bee-drift-right"
      case "drift-left":
        return "animate-bee-drift-left"
      case "circle":
        return "animate-bee-circle"
      case "zigzag":
        return "animate-bee-zigzag"
      default:
        return "animate-bee-float"
    }
  }

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {isVisible && (
        <div
          className={`${getAnimationClass()}`}
          style={{
            animationDelay: `${delay}s`,
          }}
        >
          <Image
            src="/images/beeguy.png"
            alt="Flying bee"
            width={sizeClasses[size].width}
            height={sizeClasses[size].height}
            className="object-contain filter drop-shadow-sm"
          />
        </div>
      )}
    </div>
  )
}

// Legacy AnimatedBee component for backward compatibility
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
  path = "curved",
  direction = "left-to-right",
  className = ""
}: AnimatedBeeProps) {
  // Convert old props to new SimpleBee props
  let animation: "float" | "drift-right" | "drift-left" | "circle" | "zigzag" = "float"

  if (path === "circle") {
    animation = "circle"
  } else if (path === "zigzag") {
    animation = "zigzag"
  } else if (direction === "left-to-right") {
    animation = "drift-right"
  } else if (direction === "right-to-left") {
    animation = "drift-left"
  }

  return (
    <SimpleBee
      size={size}
      delay={delay}
      animation={animation}
      className={className}
    />
  )
}

// Simple Bee Trail Component for section transitions
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
      {/* Single bee floating across */}
      <SimpleBee
        size="md"
        delay={delay}
        animation="drift-right"
        className="top-1/2 left-0 transform -translate-y-1/2"
      />

      {/* Section connector visual */}
      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300 opacity-20"></div>

      {/* Floating pollen particles */}
      <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-bee-float opacity-60"></div>
      <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-bee-float opacity-50" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-orange-300 rounded-full animate-bee-float opacity-40" style={{animationDelay: '2s'}}></div>
    </div>
  )
}

// Simple Bee Swarm with exactly 5 bees
export function BeeSwarm({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Bee 1: Floating in top-left */}
      <SimpleBee
        size="sm"
        delay={0}
        animation="float"
        className="top-1/4 left-1/5"
      />

      {/* Bee 2: Drifting right across top */}
      <SimpleBee
        size="md"
        delay={2}
        animation="drift-right"
        className="top-1/6 left-0"
      />

      {/* Bee 3: Circular motion in center */}
      <SimpleBee
        size="sm"
        delay={4}
        animation="circle"
        className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Bee 4: Zigzag pattern in bottom area */}
      <SimpleBee
        size="md"
        delay={1}
        animation="zigzag"
        className="bottom-1/3 left-0"
      />

      {/* Bee 5: Drifting left in bottom-right */}
      <SimpleBee
        size="sm"
        delay={3}
        animation="drift-left"
        className="bottom-1/4 right-0"
      />
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
  return (
    <SimpleBee
      size={size}
      delay={delay}
      animation="float"
      className={`inline-block ${className}`}
    />
  )
}
