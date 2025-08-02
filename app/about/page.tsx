import Footer from '@/components/footer'
import Header from '@/components/header'
import Image from 'next/image'
import React from 'react'

function Haqimizda() {
  return (
    <div className='font-manrope'>
      <Header theme="light" />

      {/* About */}
      <section className="lg:pt-25 md:pt-20 pt-10 lg:pb-25 pb-20">
        <div className="max-w-[1680px] mx-auto flex flex-col lg:flex-row items-start px-5">
          <div className="lg:text-left text-center mb-7.5">
            <h1 className="lg:text-8xl md:text-6xl text-5xl font-bold leading-[106%] lg:mb-10 md:mb-4.5 mb-2.75 text-[#185796] ">
              BIZ HAQIMIZDA
            </h1>
            <p className="w-full text-lg font-light leading-normal ">
              Sizning e’tiboringizga Print.uz — poligrafiya olamida sizning ishonchli hamrohingiz, 1997 yildan beri eng jasur g‘oyalarni hayotga tatbiq etib kelayotgan kompaniya taqdim etiladi.
              <br />
              <br />
              Taklifnoma kartochkalarini qo‘lda ishlab chiqarishdan boshlagan holda, biz Toshkentda va undan tashqarida sifat va innovatsiyalar etaloniga aylandik.
              <br />
              <br />
              Bizning tariximiz — bu qat’iyat va mukammallikka intilish yilnomasi bo‘lib, mijozlar ishonchi bilan ilhomlantirilgan, biz uni ko‘z qorachig‘idek asraymiz.
            </p>
          </div>
          <div className="w-full h-full mx-auto flex items-center justify-center">
            <img
              className="rounded-[20px] lg:max-w-[1033px] w-[728px]"
              src="./img/avatars/About.webp"
              alt="Print.uz asosiy kirish"
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#002C55] py-22.5">
        <div className="max-w-[1680px] mx-auto px-5">
          <div className="grid grid-cols-5 max-[1664px]:grid-cols-3 max-md:gap-16.5 items-center max-md:grid-cols-1 max-md:justify-center lg:text-left text-center lg:gap-7.5 pt-22.5">
            <div className="relative min-h-33.5 md:min-h-76">

              <div className="relative z-20">
                <h2 className="md:text-3xl sm:text-[22px] text-2xl lg:max-w-[312px] text-white font-bold md:leading-[40px] leading-[30px] mb-5 uppercase">
                  INDIVIDUAL YONDASHUV:
                </h2>
                <p className="lg:text-lg text-sm font-light lg:leading-[25px] leading-[100%] text-white lg:max-w-[312px] w-full">
                  Har bir mijoz biz uchun ilhom manbai, har bir buyurtma — san’at asari.
                </p>
              </div>
              <div className="h-33.5 max-md:items-center md:h-56.5 absolute z-10 max-md:top-1/2 top-5 left-1/2 md:left-0 max-md:-translate-x-1/2 -translate-y-1/2 flex">
                <h1 className="lg:text-[300px] md:text-[228px] text-[204px] text-[#003F7B] font-extrabold">
                  1
                </h1>
              </div>
            </div>
            <div className="relative min-h-33.5 md:min-h-76">
              <div className="relative z-20">
                <h2 className="md:text-3xl sm:text-[22px] text-2xl lg:max-w-[312px] text-white font-bold md:leading-[40px] leading-[30px] mb-5 uppercase">
                  Zamonaviy
                  uskunalar:
                </h2>
                <p className="lg:text-lg text-sm font-light lg:leading-[25px] leading-[100%] text-white lg:max-w-[312px] w-full">
                  Bizning texnika arsenalimiz — har bir chop etishda mukammallik va innovatsiyalar kafolati.
                </p>
              </div>
              <div className="h-33.5 max-md:items-center md:h-56.5 absolute z-10 max-md:top-1/2 top-5 left-1/2 md:left-0 max-md:-translate-x-1/2 -translate-y-1/2 flex">
                <h1 className="lg:text-[300px] md:text-[228px] text-[204px] text-[#003F7B] font-extrabold">
                  2
                </h1>
              </div>
            </div>

            <div className="relative min-h-33.5 md:min-h-76">
              <div className="relative z-20">
                <h2 className="md:text-3xl sm:text-[22px] text-2xl lg:max-w-[312px] text-white font-bold md:leading-[40px] leading-[30px] mb-5 uppercase">
                  Ustalar
                  jamoasi:
                </h2>
                <p className="lg:text-lg text-sm font-light lg:leading-[25px] leading-[100%] text-white lg:max-w-[312px] w-full">
                  Bizning dizaynerlarimiz — sizning har qanday orzuingizni jonlantira oladigan haqiqiy sehrgarlar.
                </p>
              </div>
              <div className="h-33.5 max-md:items-center md:h-56.5 absolute z-10 max-md:top-1/2 top-5 left-1/2 md:left-0 max-md:-translate-x-1/2 -translate-y-1/2 flex">
                <h1 className="lg:text-[300px] md:text-[228px] text-[204px] text-[#003F7B] font-extrabold">
                  3
                </h1>
              </div>
            </div>

            <div className="relative min-h-33.5 md:min-h-76">
              <div className="relative z-20">
                <h2 className="md:text-3xl sm:text-[22px] text-2xl lg:max-w-[312px] text-white font-bold md:leading-[40px] leading-[30px] mb-5 uppercase">
                  Ufqlarni
                  kengaytirish:
                </h2>
                <p className="lg:text-lg text-sm font-light lg:leading-[25px] leading-[100%] text-white lg:max-w-[312px] w-full">
                  Biz sizning ambitsiyalaringiz bilan birga o‘smoqdamiz, quvvatlarimizni oshirib, siz kutgan natijalardan ham yuqori bo‘lishga harakat qilamiz.
                </p>
              </div>
              <div className="h-33.5 max-md:items-center md:h-56.5 absolute z-10 max-md:top-1/2 top-5 left-1/2 md:left-0 max-md:-translate-x-1/2 -translate-y-1/2 flex">
                <h1 className="lg:text-[300px] md:text-[228px] text-[204px] text-[#003F7B] font-extrabold">
                  4
                </h1>
              </div>
            </div>

            <div className="relative min-h-33.5 md:min-h-76">
              <div className="relative z-20">
                <h2 className="md:text-3xl sm:text-[22px] text-2xl lg:max-w-[312px] text-white font-bold md:leading-[40px] leading-[30px] mb-5 uppercase">
                  Qulay
                  yetkazib berish:
                </h2>
                <p className="lg:text-lg text-sm font-light lg:leading-[25px] leading-[100%] text-white lg:max-w-[312px] w-full">
                  Buyurtmangiz aniq muddatda, har bir detalga e’tibor bilan yetkaziladi. “Matbaa” degan so‘zni eshitganingizda, xayolingizda faqat Print.uz jonlansin.
                </p>
              </div>
              <div className="h-33.5 max-md:items-center md:h-56.5 absolute z-10 max-md:top-1/2 top-5 left-1/2 md:left-0 max-md:-translate-x-1/2 -translate-y-1/2 flex">
                <h1 className="lg:text-[300px] md:text-[228px] text-[204px] text-[#003F7B] font-extrabold">
                  5
                </h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pb-20 pt-17">
        <div className="max-w-[1680px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-50 px-5">
          <div className="lg:mb-0 -mb-[200px] mx-auto lg:text-left text-center">
            <h2 className="lg:text-8xl md:text-6xl text-[42px] font-bold uppercase max-w-[660px] w-full leading-[106%] text-[#185796] md:mb-5 mb-3.75">
              BUYURTMA QOLDIRING
            </h2>
            <p className="lg:text-2xl md:text-[17px] text-xs font-normal leading-[100%] max-w-[660px] w-full lg:mb-17 mb-3">
              Biz xursandchilik bilan barcha savollaringizga javob beramiz va buyurtma qilishda yordam beramiz.
            </p>
            <div className="bg-[#185796] h-1 max-w-[660px] w-full lg:mb-17.75 mb-9.5" />
            <button className="bg-[#185796] lg:block hidden rounded-[30px] text-white uppercase py-5 px-12.5 font-bold text-xl leading-[100%] cursor-pointer">
              buyurtma qoldiring
            </button>
          </div>
          <div className="w-full max-w-[825px]">
            <input
              className="border border-[#417CC0] rounded-[10px] w-full outline-none placeholder:text-[#ABABAB] lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-[100%]"
              type="text"
              placeholder="Ism/kompaniya*"
            />
            <input
              className="border border-[#417CC0] rounded-[10px] w-full outline-none text-[#ABABAB] lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-[100%]"
              type="text"
              placeholder="Telefon*"
            />
            <div className="flex relative items-center justify-center">
              <select
                className="border border-[#417CC0] rounded-[10px] w-full outline-none text-[#ABABAB] lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-[100%]"
                name=""
                id=""
              >
                <option>Poligrafiya</option>
                <option>Paketlar</option>
                <option>Sotuv bo‘limi</option>
                <option>Boshqa</option>
              </select>
            </div>
            <textarea
              className="border border-[#417CC0] rounded-[10px] resize-none lg:h-[248px] md:h-[138px] h-[102px] outline-none w-full text-[#ABABAB] lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-[100%]"
              placeholder="Izohlar"
              defaultValue={""}
            />
            <button className="bg-[#185796] rounded-[15px] lg:hidden block text-white uppercase lg:py-5 md:py-4.25 py-3.75 w-full px-12.5 font-bold lg:text-xl md:text-[15px] text-sm leading-[100%] cursor-pointer">
              buyurtma qoldiring
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <section
        className="lg:pt-7.5 md:pt-6 pt-5 lg:pb-7.5 md:pb-6 pb-5"
        style={{
          background:
            "linear-gradient(90deg, #081C30 0%, #185796 50%, #081C30 100%)"
        }}
      >
        <div className="max-w-[1680px] mx-auto flex items-center justify-center">
          <a href="#">
            <img className="lg:w-28 w-25" src="./img/icons/logo.svg" alt="" />
          </a>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}

export default Haqimizda