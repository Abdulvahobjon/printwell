"use client"

import Link from "next/link"
import Image from "next/image"
import type React from "react"
import { useState, useEffect } from "react"

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

  // Prevent body & html scroll when modal is open
  useEffect(() => {
    const html = document.documentElement // <html> element

    if (isOpen) {
      document.body.classList.add("overflow-hidden")
      html.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
      html.classList.remove("overflow-hidden")
    }

    // Cleanup on unmount or when isOpen changes
    return () => {
      document.body.classList.remove("overflow-hidden")
      html.classList.remove("overflow-hidden")
    }
  }, [isOpen])


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#00000080] modal-backdrop"
      ></div>

      {/* Modal */}
        <div className="w-full max-w-[551px] max-h-[90vh] bg-white max-sm:min-h-screen sm:rounded-[24px] lg:rounded-[32px] px-4 py-6 lg:px-4.75 lg:py-4 flex flex-col justify-start mx-auto fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto">
          <Link href="#" className="mb-6 lg:mb-8.5 mx-auto">
            <Image src="/img/icons/modal-logo.svg" alt="PrintWell Logo" width={120} height={40} />
          </Link>

          <h2 className="text-xl lg:text-[32px] font-bold leading-[120%] text-black mb-6 lg:mb-8 uppercase text-center">
            hamkorlik uchun
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mb-6 max-sm:flex-col">
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
                    Qaysi yo&apos;nalishda faoliyat ko&apos;rsatyabsiz
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
            className="bg-white rounded-full p-3 lg:p-4 absolute md:hidden right-5 top-3  cursor-pointer z-20 hover:bg-gray-100 transition"
          >
            <Image src="/img/icons/close.svg" alt="Close" width={24} height={24} />
          </button>
        </div>

        <button
          onClick={onClose}
          className="bg-white rounded-full p-3 lg:p-4 max-md:hidden absolute right-5 z-50 top-5  cursor-pointer  hover:bg-gray-100 transition"
        >
          <Image src="/img/icons/close.svg" alt="Close" width={24} height={24} />
        </button>
    </>
  )
}