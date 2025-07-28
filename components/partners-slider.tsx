"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import 'swiper/css';

export default function PartnersSlider() {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
    const loadSwiper = async () => {
      const { Swiper } = await import("swiper")
      const { Autoplay } = await import("swiper/modules")

      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Autoplay],
          slidesPerView: 2,
          spaceBetween: 20,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          breakpoints: {
            640: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 8,
              spaceBetween: 45,
            },
          },
        })
      }
    }

    loadSwiper()
  }, [])
const brandLogos = [
  "/img/icons/brends(1).svg",
  "/img/icons/brends(2).svg",
  "/img/icons/brends(3).svg",
  "/img/icons/brends(4).svg",
  "/img/icons/brends(5).svg",
  "/img/icons/brends(6).svg",
  "/img/icons/brends(7).svg",
  "/img/icons/brends(8).svg",
  "/img/icons/brends(9).svg",
  "/img/icons/brend(10).svg", // bu ham `brands` emas, `brend`
]


  return (
    <div className="swiper w-full mt-10" ref={swiperRef}>
      <div className="swiper-wrapper items-center">
        {brandLogos.map((logo, index) => (
          <div key={index} className="swiper-slide flex justify-center items-center h-[80px] sm:h-[90px] md:h-[100px]">
            <Image
              src={logo || "/placeholder.svg"}
              alt={`Brand ${index + 1}`}
              width={120}
              height={80}
              className="h-full max-h-[60px] sm:max-h-[70px] md:max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
