import { IconBookOpen, IconInstruction, IconLayers, IconNews, IconPackage } from "@/public/svg/icon"
import { useState } from "react"
import ContactModal from "@/components/contact-modal"

export default function ServicesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section
        id="service"
        className="bg-[#FFFFFF1A] pb-14 pt-26"
        style={{
          backgroundImage: "url(/img/backgrounds/servise-bacround.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
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
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}