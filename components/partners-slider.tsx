"use client"

import Image from "next/image"

export default function PartnersSlider() {
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
    "/img/icons/brend(10).svg",
  ]

  return (
    <div className="relative overflow-hidden w-full bg-white py-6">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...brandLogos, ...brandLogos].map((logo, index) => (
          <div key={index} className="flex justify-center items-center min-w-[120px] h-[80px]">
            <Image
              src={logo}
              alt={`Brand ${index + 1}`}
              width={120}
              height={80}
              className="object-contain h-full max-h-[70px]"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  )
}
