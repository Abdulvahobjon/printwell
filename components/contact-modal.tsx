"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    activity: "",
    product: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal inset-0 overflow-y-scroll fixed bottom-0 z-50 w-full bg-[#00000080] md:pt-12 md:pb-20 lg:pt-30 lg:pb-15 modal-backdrop">
      <div className="w-full md:max-w-[90%] sm:max-w-[500px] lg:max-w-[551px] bg-white max-sm:min-h-screen sm:rounded-[24px] lg:rounded-[32px] px-4 py-6 lg:px-4.75 lg:py-4 flex flex-col justify-center mx-auto relative">
        <Link href="#" className="mb-6 lg:mb-8.5 mx-auto">
          <Image src="/img/icons/modal-logo.svg" alt="PrintWell Logo" width={120} height={40} />
        </Link>

        <h2 className="text-xl lg:text-[32px] font-bold leading-[120%] text-black mb-6 lg:mb-8 uppercase text-center">
          hamkorlik uchun
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="lg:max-w-[253px] w-full">
              <label htmlFor="name">
                <h3 className="text-base lg:text-lg font-normal leading-[100%] mb-1.25 ml-4">Ismingiz</h3>
                <input
                  id="name"
                  name="name"
                  className="w-full text-base lg:text-lg font-normal leading-[100%] px-4 py-4 lg:px-4.25 lg:py-4.75 bg-[#F2F2F2] rounded-full outline-none text-[#9C9C9C]"
                  type="text"
                  placeholder="Ismingizni kiriting"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className="lg:max-w-[253px] w-full">
              <label htmlFor="phone">
                <h3 className="text-base lg:text-lg font-normal leading-[100%] mb-1.25 ml-4">Telefon raqamingiz</h3>
                <input
                  id="phone"
                  name="phone"
                  className="w-full text-base lg:text-lg font-normal leading-[100%] px-4 py-4 lg:px-4.25 lg:py-4.75 bg-[#F2F2F2] rounded-full outline-none text-[#9C9C9C]"
                  type="text"
                  placeholder="Telefon raqamingizni kiriting"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </label>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-6">
              <label htmlFor="company">
                <h3 className="text-base lg:text-lg font-normal leading-[100%] mb-1.25 ml-4">Kompaniyangiz nomi</h3>
                <input
                  id="company"
                  name="company"
                  className="w-full text-base lg:text-lg font-normal leading-[100%] px-4 py-4 lg:px-4.25 lg:py-4.75 bg-[#F2F2F2] rounded-full outline-none text-[#9C9C9C]"
                  type="text"
                  placeholder="Kompaniya nomini kiriting"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="mb-6">
              <label htmlFor="activity">
                <h3 className="text-base lg:text-lg font-normal leading-[100%] mb-1.25 ml-4">
                  Qaysi yo&apos;nalishda faoliy&apos;at ko'rsatyabsiz
                </h3>
                <input
                  id="activity"
                  name="activity"
                  className="w-full text-base lg:text-lg font-normal leading-[100%] px-4 py-4 lg:px-4.25 lg:py-4.75 bg-[#F2F2F2] rounded-full outline-none text-[#9C9C9C]"
                  type="text"
                  placeholder="Yo'nalishingizni yozing"
                  value={formData.activity}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="mb-8">
              <label htmlFor="product">
                <h3 className="text-base lg:text-lg font-normal leading-[100%] mb-1.25 ml-4">
                  Qaysi mahsulotimizga qiziqish bildiryabsiz
                </h3>
                <input
                  id="product"
                  name="product"
                  className="w-full text-base lg:text-lg font-normal leading-[100%] px-4 py-4 lg:px-4.25 lg:py-4.75 bg-[#F2F2F2] rounded-full outline-none text-[#9C9C9C]"
                  type="text"
                  placeholder="Mahsulot nomini kiriting"
                  value={formData.product}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <button
              type="submit"
              className="bg-[#2990FF] py-4 lg:py-5 w-full max-w-full lg:max-w-[514px] text-center text-base font-medium leading-[100%] text-white cursor-pointer rounded-full hover:bg-[#2980e6] transition"
            >
              Yuborish
            </button>
          </div>
        </form>

        <button
          onClick={onClose}
          className="bg-white rounded-full p-3 lg:p-4 absolute top-4 right-4 lg:-top-5 lg:-right-20 cursor-pointer z-20 hover:bg-gray-100 transition"
        >
          <Image src="/img/icons/close.svg" alt="Close" width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
