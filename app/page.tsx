"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import ContactModal from "@/components/contact-modal"
import VideoPlayer from "@/components/video-player"
import PartnersSlider from "@/components/partners-slider"
import Link from "next/link"
import Footer from "@/components/footer"
import { IconBookOpen, IconInstruction, IconLayers, IconNews, IconPackage } from "@/public/svg/icon"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      {/* Hero Section */}
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

      {/* About Section */}
      <section id="about" className="pt-43 pb-18.75">
        <div className="text-black px-5 mx-auto max-w-[1632px]">
          <div>
            <h2 className="mb-2 lg:text-[64px] md:text-6xl sm:text-5xl text-4xl font-bold leading-[120%]">
              Biz haqimizda
            </h2>
            <p className="md:text-2xl sm:text-xl xs:text-lg text-base font-light md:leading-[32px] sm:leading-[30px] xs:leading-[25px] leading-[20px] max-w-[1231px] lg:mb-16.25 md:mb-14 sm:mb-12 xs:mb-9 mb-6">
              2019-yilda Printwell nomi ostida qaytadan tashkil etilgan kompaniyamiz undan oldin 2005-2019-yillar
              oralig&apos;ida Poligraf Group nomi ostida mijozlarga xizmat qilgan. Hozirgi kunda butun O&apos;zbekiston
              bo&apos;ylab TOP 10 tipografiyalar sirasiga kiramiz. O&apos;zbekistondan tashqari, qo&apos;shni
              Qozog&apos;istonda ham bir qancha mijozlarga xizmat ko&apos;rsatamiz. Har bir mijozga imdiidual yondashib,
              xohlagan sifat turida va keng assortimentda mahsulotlarni taklif qilamiz
            </p>
          </div>
          <VideoPlayer />


          <div className="flex flex-wrap items-center justify-between mt-16">
            <div>
              <h2 className="lg:text-[150px] md:text-8xl sm:text-7xl text-6xl font-thin sm:leading-[186px] leading-[130px] md:mb-4 mb-0">
                25+
              </h2>
              <p className="md:text-[32px] sm:text-[27px] xs:text-2xl text-xl font-light lg:leading-[32px] md:leading-[27px] sm:leading-[24px] leading-[20px]">
                Yillik tajriba
              </p>
            </div>
            <div>
              <h2 className="lg:text-[150px] md:text-8xl sm:text-7xl text-6xl font-thin sm:leading-[186px] leading-[130px] md:mb-4 mb-0">
                150+
              </h2>
              <p className="md:text-[32px] sm:text-[27px] xs:text-2xl text-xl font-light lg:leading-[32px] md:leading-[27px] sm:leading-[24px] leading-[20px]">
                Hodimlar soni
              </p>
            </div>
            <div>
              <h2 className="lg:text-[150px] md:text-8xl sm:text-7xl text-6xl font-thin sm:leading-[186px] leading-[130px] md:mb-4 mb-0">
                20k
              </h2>
              <p className="md:text-[32px] sm:text-[27px] xs:text-2xl text-xl font-light lg:leading-[32px] md:leading-[27px] sm:leading-[24px] leading-[20px]">
                Muvaffaqiyatli buyurtmalar
              </p>
            </div>
            <div>
              <h2 className="lg:text-[150px] md:text-8xl sm:text-7xl text-6xl font-thin sm:leading-[186px] leading-[130px] md:mb-4 mb-0">
                250+
              </h2>
              <p className="md:text-[32px] sm:text-[27px] xs:text-2xl text-xl font-light lg:leading-[32px] md:leading-[27px] sm:leading-[24px] leading-[20px]">
                Mamnun mijozlarimiz
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section
        id="service"
        className="bg-[#FFFFFF1A] pb-14 pt-26"
        style={{
          backgroundImage: "url(/img/backgrounds/servise-bacround.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }
        }
      >
        <div className="max-w-[1648px] mx-auto px-5">
          <h1 className="sm:mb-10 mb-7 xl:text-[64px] lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold leading-[120%] uppercase text-black">
            XIZMARLARimiz
          </h1>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-4">
            <div className="bg-white md:rounded-[56px] rounded-[30px] pt-4.5 pb-6 px-3.5 cursor-pointer xl:max-w-[824px] w-full hover:shadow-lg transition">
              <div className="bg-black rounded-[50px] md:w-18 sm:w-15 w-13 md:h-18 sm:h-15 h-13 text-center flex items-center justify-center lg:mb-31 md:mb-27 sm:mb-25 mb-18">
                <IconNews/>
              </div>
              <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">Karobka</h3>
              <p className="sm:text-2xl text-xl font-light leading-[32px] text-black">Разработка фирменного стиля</p>
            </div>

            <div className="bg-white md:rounded-[56px] rounded-[30px] pt-4.5 pb-6 px-3.5 cursor-pointer lg:max-w-[396px] w-full hover:shadow-lg transition">
              <div className="bg-black rounded-[50px] md:w-18 sm:w-15 w-13 md:h-18 sm:h-15 h-13 text-center flex items-center justify-center lg:mb-31 md:mb-27 sm:mb-25 mb-18">
              <IconPackage/>
              </div>
              <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">
                Etiketka
              </h3>
              <p className="sm:text-2xl text-xl font-light leading-[32px] text-black">Разработка фирменного стиля</p>
            </div>

            <div className="bg-white md:rounded-[56px] rounded-[30px] pt-4.5 pb-6 px-3.5 cursor-pointer lg:max-w-[396px] w-full hover:shadow-lg transition">
              <div className="bg-black rounded-[50px] md:w-18 sm:w-15 w-13 md:h-18 sm:h-15 h-13 text-center flex items-center justify-center lg:mb-31 md:mb-27 sm:mb-25 mb-18">
               <IconBookOpen/>
              </div>
              <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">
                Karton paketlar
              </h3>
              <p className="sm:text-2xl text-xl font-light leading-[32px] text-black">Разработка фирменного стиля</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
            <div className="bg-white md:rounded-[56px] rounded-[30px] pt-4.5 pb-6 px-3.5 cursor-pointer lg:max-w-[396px] lg:h-[467px] h-auto w-full flex flex-col justify-between hover:shadow-lg transition">
              <div className="bg-black rounded-[50px] md:w-18 sm:w-15 w-13 md:h-18 sm:h-15 h-13 text-center flex items-center justify-center lg:mb-31 md:mb-27 sm:mb-25 mb-18">
            <IconLayers/>
              </div>
              <div>
                <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">
                  Post product
                </h3>
                <p className="sm:text-2xl text-xl font-light leading-[32px] text-black">Разработка фирменного стиля</p>
              </div>
            </div>

            <div className="bg-white md:rounded-[56px] rounded-[30px] pt-4.5 pb-6 px-3.5 cursor-pointer xl:max-w-[808px] w-full lg:h-[467px] h-auto flex flex-col justify-between hover:shadow-lg transition">
              <div className="bg-black rounded-[50px] md:w-18 sm:w-15 w-13 md:h-18 sm:h-15 h-13 text-center flex items-center justify-center lg:mb-31 md:mb-27 sm:mb-25 mb-18">
                <IconInstruction/>
              </div>
              <div>
                <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">
                  Instruksiyalar
                </h3>
                <p className="sm:text-2xl text-xl font-light leading-[32px] text-black">Разработка фирменного стиля</p>
              </div>
            </div>

            <div
              onClick={openModal}
              className="bg-white md:rounded-[56px] rounded-[30px] cursor-pointer sm:pt-4.5 pt-20 sm:pb-6 pb-20 px-3.5 lg:max-w-[412px] w-full lg:h-[467px] h-auto flex items-center justify-center text-center hover:shadow-lg transition"
            >
              <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">
                Aloqaga chiqing
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      < section id="partners" className="md:pt-42 pt-25 md:pb-43 pb-20" >
        <div className="max-w-[1420px] mx-auto px-5">
          <div className="flex flex-wrap items-center justify-between">
            <div className="lg:text-left text-center lg:mb-0 mb-10">
              <h2 className="lg:text-[64px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold leading-[120%] mb-2">
                HAMKORLARIMIZ
              </h2>
              <p className="md:text-2xl sm:text-xl xs:text-lg text-base font-light md:leading-[32px] sm:leading-[25px] leading-[21px] text-black max-w-[834px]">
                PrintWell ishonchli hamkorlik tamoyiliga amal qiladi. Biz turli sohalardagi tashkilotlar bilan uzoq
                muddatli va samarali hamkorlikni yo&apos;lga qo&apos;yganmiz. Har bir hamkorlik – bu o&apos;zaro
                ishonch, sifatli xizmat va barqaror natija.
              </p>
            </div>
            <Image
              className="lg:mx-0 mx-auto md:max-w-[298px] sm:max-w-[250px] max-w-[200px]"
              src="/img/avatars/well-icons.png"
              alt="PrintWell Icons"
              width={298}
              height={200}
            />
          </div>

          <PartnersSlider />
        </div>
      </section >

      {/* Order Section */}
      < section
        style={{
          backgroundImage: "url(/img/bacrounds/order-background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1420px] mx-auto px-5 md:pt-42 pt-25 pb-23">
          <div className="flex flex-wrap items-center justify-between">
            <div className="lg:text-left text-center lg:mb-0 mb-10">
              <h2 className="lg:text-[64px] md:text-5xl sm:text-4xl xs:text-3xl text-2xl font-bold max-w-[899px] leading-[120%] mb-2">
                HOZIROQ BUYURTMA BERING
              </h2>
              <p className="md:text-2xl sm:text-xl xs:text-lg text-base font-light md:leading-[32px] sm:leading-[25px] leading-[21px] text-black max-w-[899px]">
                Chop etish bo&apos;yicha sifatli va ishonchli yechim izlayapsizmi? PrintWell bilan bog&apos;laning — siz
                tasavvur qilgan dizaynni real mahsulotga aylantiramiz. Bugun buyurtma bering!
              </p>
            </div>
            <div className="lg:mx-0 mx-auto md:max-w-[298px] sm:max-w-[250px] max-w-[200px]">
              <Image src="/img/icons/well_iconsTwo.png" alt="PrintWell Icons Two" width={298} height={200} />
            </div>
          </div>
        </div>
      </section >

      {/* Map Section */}
      < div className="bg-[#031425]" >
        <section className="w-full">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2995.6801208020242!2d69.23793926054736!3d41.337568671186574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHazrati%20Imom%20ansambil!5e0!3m2!1sen!2s!4v1753100809890!5m2!1sen!2s"
              className="w-full h-[400px] sm:h-[500px] lg:h-[614px] pt-10"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div >

      <Footer />

      {/* wtf comment */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
