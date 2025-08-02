"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface PartnersSliderProps {
  className?: string
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
}

export default function PartnersSlider({ className, speed = "normal", direction = "left" }: PartnersSliderProps) {
  const [containerWidth, setContainerWidth] = useState(0)
  
  const brandLogos = [
    "/img/icons/brends(2).svg",
    "/img/icons/brends(3).svg",
    "/img/icons/brends(4).svg",
    "/img/icons/brends(5).svg",
    "/img/icons/brends(6).svg",
    "/img/icons/brends(7).svg",
    "/img/icons/brends(8).svg",
    "/img/icons/brends(9).svg",
    "/img/icons/brend(10).svg",
  ]

  // Faqat 1 ta logo bo'lsa ham test uchun
  // const brandLogos = ["/img/icons/brends(2).svg"]

  const getAnimationDuration = () => {
    switch (speed) {
      case "slow":
        return "40s"
      case "fast":
        return "10s"
      default:
        return "20s"
    }
  }

  const animationDirection = direction === "right" ? "reverse" : "normal"

  // Logo kengligi + gap = 120px + 48px = 168px
  const logoWidth = 168
  const totalLogosWidth = brandLogos.length * logoWidth

  // Ekran kengligini to'ldirish uchun nechta takrorlash kerak
  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(window.innerWidth)
    }
    
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Ekranni to'ldirish uchun minimal takrorlash soni
  const minRepeats = Math.ceil((containerWidth * 2) / totalLogosWidth) + 2
  const repeats = Math.max(minRepeats, 4) // Kamida 4 marta takrorlash

  // Logolarni kerakli miqdorda takrorlash
  const repeatedLogos = Array(repeats).fill(brandLogos).flat()

  return (
    <div className={`relative overflow-hidden w-full bg-white py-6 ${className || ""}`}>
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex gap-12 will-change-transform"
        style={{
          animation: `infiniteMarquee ${getAnimationDuration()} linear infinite ${animationDirection}`,
          width: `${repeatedLogos.length * logoWidth}px`,
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex justify-center items-center min-w-[120px] h-[80px] hover:scale-110 transition-transform duration-300 flex-shrink-0"
          >
            <Image
              src={logo || "/placeholder.svg"}
              alt={`Brand ${(index % brandLogos.length) + 1}`}
              width={120}
              height={80}
              className="object-contain h-full max-h-[70px] opacity-70 hover:opacity-100 transition-opacity duration-300"
              priority={index < brandLogos.length}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes infiniteMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${totalLogosWidth}px);
          }
        }
      `}</style>
    </div>
  )
}
