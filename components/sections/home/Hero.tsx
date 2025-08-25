"use client"

import Header from "@/components/header"
import ContactModal from "@/components/contact-modal"
import Link from "next/link"
import { useState } from "react"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div
        className="min-h-screen w-full mx-auto relative z-10 bg-black flex flex-col"
        style={{
          backgroundImage: "url(/img/backgrounds/compony-bacround.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Header theme="dark" />
        <section className="pb-17 pt-80 content-end mt-auto">
          <div className="max-w-[1632px] mx-auto relative px-5">
            <h2 className="lg:text-[64px] md:text-5xl sm:text-4xl text-3xl max-w-[823px] font-bold md:leading-[120%] sm:leading-[110%] leading-[100%] text-white mb-2">
              TO&apos;LIQ SIKLGA EGA TIPOGRAFIYA
            </h2>
            <p className="md:text-2xl sm:text-xl text-lg font-light sm:leading-[100%] leading-[90%] text-white sm:mb-8 mb-7">
              Siz xohlagan sifatda tayyorlab beramiz
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={openModal}
                className="bg-white text-black rounded-full cursor-pointer sm:max-w-[170px] w-full px-13 py-4.5 text-base font-medium leading-[100%] hover:bg-gray-100 transition"
              >
                Contact
              </button>
              <Link href="/#about" className="bg-black text-white border-1 border-white sm:max-w-[175px] w-full text-center border-solid rounded-full px-13 py-4.5 text-base font-medium leading-[100%] hover:bg-gray-900 transition">
                About us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}