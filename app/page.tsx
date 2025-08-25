"use client"

import Footer from "@/components/footer"
import { AboutSection, HeroSection, MapSection, OrderSection, PartnersSection, ServicesSection } from "@/components/sections/home"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <OrderSection />
      <MapSection />
      <Footer />
    </>
  )
}