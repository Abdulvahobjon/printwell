"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import ContactModal from "@/components/contact-modal"
import VideoPlayer from "@/components/video-player"
import PartnersSlider from "@/components/partners-slider"
import Link from "next/link"

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
        <Header />

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
              <Link href="/#about" className="bg-black text-white border-1 border-white sm:max-w-[175px] w-full border-solid rounded-full px-13 py-4.5 text-base font-medium leading-[100%] hover:bg-gray-900 transition">
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
                <Image src="/img/icons/news.png" alt="Karobka" width={40} height={40} />
              </div>
              <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">Karobka</h3>
              <p className="sm:text-2xl text-xl font-light leading-[32px] text-black">Разработка фирменного стиля</p>
            </div>

            <div className="bg-white md:rounded-[56px] rounded-[30px] pt-4.5 pb-6 px-3.5 cursor-pointer lg:max-w-[396px] w-full hover:shadow-lg transition">
              <div className="bg-black rounded-[50px] md:w-18 sm:w-15 w-13 md:h-18 sm:h-15 h-13 text-center flex items-center justify-center lg:mb-31 md:mb-27 sm:mb-25 mb-18">
                <Image src="/img/icons/package.png" alt="Etiketka" width={40} height={40} />
              </div>
              <h3 className="mb-2 md:text-[40px] sm:text-4xl text-3xl font-light leading-[100%] text-black">
                Etiketka
              </h3>
              <p className="sm:text-2xl text-xl font-light leading-[32px] text-black">Разработка фирменного стиля</p>
            </div>

            <div className="bg-white md:rounded-[56px] rounded-[30px] pt-4.5 pb-6 px-3.5 cursor-pointer lg:max-w-[396px] w-full hover:shadow-lg transition">
              <div className="bg-black rounded-[50px] md:w-18 sm:w-15 w-13 md:h-18 sm:h-15 h-13 text-center flex items-center justify-center lg:mb-31 md:mb-27 sm:mb-25 mb-18">
                <Image src="/img/icons/book-open.png" alt="Karton paketlar" width={40} height={40} />
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
                <Image src="/img/icons/layers.png" alt="Post product" width={40} height={40} />
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
                <Image src="/img/icons/layers.png" alt="Instruksiyalar" width={40} height={40} />
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

      {/* Footer */}
      < footer className="bg-[#031425] pt-16 pb-6.5" >
        <div className="max-w-[1632px] mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-full lg:max-w-[60%]">
              <Image className="mb-7" src="/img/icons/logo.svg" alt="PrintWell Logo" width={112} height={40} />
              <h3 className="text-white text-xl font-bold md:leading-[32px] leading-[28px] mb-1">
                Qadriyatlarga ega kuchli jamoa bilan ishlang.
              </h3>
              <p className="md:text-xl sm:text-lg text-base md:leading-[32px] sm:leading-[28px] leading-[25px] font-bold text-[#899EB2]">
                PrintWell&apos;da biz har bir loyihaga mas&apos;uliyat, halollik va sifat bilan yondashamiz. Jamoamiz —
                bu o&apos;z ishini chin dildan sevuvchi, ishonchli va fidokor mutaxassislar. Siz ham bizning qadriyatlar
                asosida ishlovchi kuchli jamoamiz bilan muvaffaqiyat sari birga harakat qiling.
              </p>
            </div>

            <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
              <ul className="text-white flex flex-wrap justify-start lg:justify-end gap-x-6 gap-y-3 mb-8 lg:mb-14">
                <li>
                  <a className="hover:opacity-50" href="#">
                    Xizmatlarimiz
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-50" href="#">
                    Bizning ishlarimiz
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-50" href="#">
                    Hamkorlarimiz
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-50" href="#">
                    Biz haqimizda
                  </a>
                </li>
                <li>
                  <a className="hover:opacity-50" href="#">
                    Aloqa
                  </a>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full justify-end">
                <div className="bg-[#FFFFFF1A] py-1 -pl-1 p-1 flex items-center rounded-full backdrop-blur-[100px] w-full sm:max-w-[176px]">
                  <a href="#" className="group p-4 rounded-full hover:bg-white transition">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-black transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.55845 10.2083C4.47593 10.2083 4.25 10.4146 4.25 11.4028V13.1944C4.25 14.1826 4.47593 14.3889 5.55845 14.3889H8.17533V21.5556C8.17533 22.5438 8.40125 22.75 9.48377 22.75H12.1007C13.1832 22.75 13.4091 22.5438 13.4091 21.5556V14.3889H16.3475C17.1685 14.3889 17.3801 14.2432 17.6056 13.5226L18.1664 11.7309C18.5527 10.4965 18.3146 10.2083 16.9083 10.2083H13.4091V7.22222C13.4091 6.56255 13.9949 6.02778 14.7176 6.02778H18.4416C19.5241 6.02778 19.75 5.82154 19.75 4.83333V2.44444C19.75 1.45624 19.5241 1.25 18.4416 1.25H14.7176C11.1044 1.25 8.17533 3.92386 8.17533 7.22222V10.2083H5.55845Z"
                      />
                    </svg>
                  </a>
                  <a href="#" className="group p-4 rounded-full hover:bg-white transition">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-black transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0572 1.75C14.2479 1.74999 15.9686 1.74998 17.312 1.93059C18.6886 2.11568 19.7809 2.50271 20.6391 3.36091C21.4973 4.21911 21.8843 5.31137 22.0694 6.68802C22.25 8.03144 22.25 9.7521 22.25 11.9428V12.0572C22.25 14.2479 22.25 15.9686 22.0694 17.312C21.8843 18.6886 21.4973 19.7809 20.6391 20.6391C19.7809 21.4973 18.6886 21.8843 17.312 22.0694C15.9686 22.25 14.2479 22.25 12.0572 22.25H11.9428C9.7521 22.25 8.03144 22.25 6.68802 22.0694C5.31137 21.8843 4.21911 21.4973 3.36091 20.6391C2.50272 19.7809 2.11568 18.6886 1.93059 17.312C1.74998 15.9686 1.74999 14.2479 1.75 12.0572V11.9428C1.74999 9.75212 1.74998 8.03144 1.93059 6.68802C2.11568 5.31137 2.50272 4.21911 3.36091 3.36091C4.21911 2.50271 5.31137 2.11568 6.68802 1.93059C8.03143 1.74998 9.7521 1.74999 11.9428 1.75H12.0572ZM16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12ZM17.5123 7.5C18.0621 7.5 18.5078 7.05229 18.5078 6.5C18.5078 5.94772 18.0621 5.5 17.5123 5.5H17.5033C16.9535 5.5 16.5078 5.94772 16.5078 6.5C16.5078 7.05228 16.9535 7.5 17.5033 7.5H17.5123Z"
                      />
                    </svg>
                  </a>
                  <a href="#" className="group p-4 rounded-full hover:bg-white transition">
                    <svg
                      className="w-6 h-6 text-white group-hover:text-black transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.7041 19.6345L12.0442 16.6103C10.7274 15.1131 10.5714 14.4552 10.6581 14.3134L11.6564 13.5094L15.7027 10.3444C16.029 10.0892 16.0866 9.61786 15.8314 9.29159C15.5762 8.96533 15.1048 8.90772 14.7785 9.16292L10.728 12.3311L9.50989 13.3253C9.22553 13.6305 9.04418 14.1524 9.24197 14.8946C9.42654 15.5872 9.94427 16.5026 11.0466 17.7593L10.6395 18.5622C10.3765 18.9277 10.1324 19.2671 9.90771 19.4997C9.68445 19.7308 9.27877 20.0705 8.71374 19.9581C8.15614 19.8472 7.90592 19.3862 7.78203 19.0904C7.65621 18.7899 7.54964 18.3824 7.43402 17.9404L6.93252 16.0239C6.65396 14.9594 6.55777 14.6534 6.37651 14.4282C6.35363 14.3998 6.3298 14.3723 6.30509 14.3459C6.11372 14.141 5.84345 14.0149 4.8535 13.6181L4.79927 13.5963C3.82368 13.2053 3.02006 12.8832 2.45798 12.5667C1.91344 12.2601 1.3254 11.8144 1.25775 11.0623C1.24724 10.9454 1.24742 10.8278 1.25829 10.7109C1.32825 9.95901 1.91775 9.51516 2.46325 9.21037C3.02632 8.89576 3.83094 8.57633 4.80773 8.18854L16.7918 3.43052C18.0177 2.94379 19.02 2.54579 19.8076 2.36434C20.6106 2.17935 21.4401 2.15976 22.0901 2.76101C22.7273 3.35039 22.8036 4.18068 22.7242 5.01747C22.6454 5.8477 22.3864 6.92742 22.0669 8.2593L19.6472 18.3463C19.4436 19.1953 19.2717 19.9121 19.0655 20.4321C18.8573 20.9575 18.5233 21.5216 17.8484 21.7001C17.1654 21.8807 16.6009 21.544 16.1719 21.1809C15.7505 20.8243 15.2699 20.2779 14.7041 19.6345Z" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center gap-2 bg-[#FFFFFF1A] pl-1 py-1 rounded-full backdrop-blur-[100px] w-full max-w-65">
                  <a href="#" className="group p-4 rounded-full hover:bg-transparent bg-white transition ">
                    <svg
                      className="w-6 h-6 group-hover:text-white text-black transition"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.31726 1.28657C5.88395 1.40369 6.33524 1.78443 6.61564 2.28746L7.50885 3.88991C7.83786 4.48011 8.11473 4.9768 8.29554 5.40857C8.48735 5.86658 8.60126 6.31824 8.54919 6.8176C8.49711 7.31696 8.29246 7.7354 8.01029 8.14399C7.74428 8.52917 7.37088 8.95804 6.92718 9.46767L5.61417 10.9759C5.37889 11.2461 5.26124 11.3812 5.25049 11.5501C5.23974 11.719 5.33616 11.8633 5.529 12.1518C7.17259 14.6109 9.38773 16.8268 11.8488 18.4718C12.1374 18.6647 12.2816 18.7611 12.4505 18.7503C12.6194 18.7396 12.7546 18.6219 13.0248 18.3866L14.5331 17.0736C15.0427 16.6299 15.4716 16.2565 15.8568 15.9905C16.2653 15.7083 16.6838 15.5036 17.1831 15.4516C17.6825 15.3995 18.1342 15.5134 18.5922 15.7052C19.0239 15.886 19.5206 16.1629 20.1107 16.4918L21.7133 17.3851C22.2163 17.6655 22.5971 18.1168 22.7142 18.6835C22.8325 19.2561 22.658 19.8316 22.2724 20.3047C20.8735 22.021 18.6322 23.1139 16.281 22.6396C14.8358 22.348 13.4098 21.8623 11.6851 20.8732C8.2197 18.8858 5.11263 15.777 3.12755 12.3157C2.13843 10.591 1.65272 9.165 1.36118 7.71974C0.886878 5.36852 1.97971 3.12724 3.69608 1.72833C4.16911 1.34279 4.74466 1.16822 5.31726 1.28657Z" />
                    </svg>
                  </a>
                  <span className="text-lg leading-[100%] font-medium text-white w-full">+998 90 000 00 00</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="bg-white mt-25 opacity-20 h-[1px] border-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 gap-2">
            <span className="lg:text-xl sm:text-lg text-base sm:leading-[32px] leading-[30px] font-light text-[#899EB2]">
              Privacy policy 2025
            </span>
            <span className="lg:text-xl sm:text-lg text-base sm:leading-[32px] leading-[30px] font-light text-[#899EB2]">
              Designed with love!
            </span>
          </div>
        </div>
      </footer >

      {/* wtf comment */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
