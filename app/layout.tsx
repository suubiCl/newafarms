import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Dancing_Script, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Newa Farms Limited - Where Agriculture Meets Innovation",
  description:
    "Sustainable beekeeping and organic products from Uganda. Fresh honey, natural cosmetics, and expert training in modern agricultural practices.",
  keywords:
    "Uganda honey, organic skincare Uganda, beekeeping training Africa, sustainable agriculture, bee products, natural cosmetics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${dancing.variable} ${jetbrains.variable}`}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
