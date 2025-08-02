import Footer from '@/components/footer'
import Header from '@/components/header'
import { IconEmail, IconPhone } from '@/public/svg/icon'
import { LogoFaceBook, LogoInstagram, LogoTelegram } from '@/public/svg/logo'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div>
      <Header theme="light" />

      <section className="pb-20 pt-17">
        <div className="max-w-[1680px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-10 md:gap-20 px-5">
          <div className="lg:mb-0  mx-auto lg:text-left text-center">
            <h2 className="lg:text-5xl text-4xl font-bold uppercase max-w-[660px] w-full leading-tight text-blue-primary md:mb-5 mb-3.5 text-[#185796]">
              Оставьте заявку
            </h2>
            <p className="lg:text-xl text-sm font-normal leading-tight max-w-[660px] w-full lg:mb-17 mb-3">
              Мы с радостью ответим на все ваши вопросы и поможем вам сделать заказ.
            </p>
            <div className="bg-[#185796] h-1 max-w-[660px] w-full lg:mb-17.75 mb-9.5"></div>

            <div className="mx-auto items-center lg:justify-center justify-start lg:mb-0 md:mb-16">
              <h2 className="lg:text-5xl text-4xl font-bold uppercase max-w-[660px] w-full leading-tight text-[#185796] md:mb-7.5 mb-3.75">
                Контакты
              </h2>
              <p className="max-w-[281px] mb-7.5 max-lg:justify-center lg:justify-start flex w-full max-md:mx-auto items-center">
                г. Ташкент, Мирабадский р-н, ул. Кушкуприк 28/1-дом
              </p>
              <Link className="text-lg font-normal leading-tight" href="#">
                +998 78 150-36-36
              </Link>
              <div className="flex w-full items-center gap-[30px] mt-[30px] max-lg:justify-center lg:justify-start">
                <Link href="#">
                  <LogoInstagram width={36} hanging={36} />
                </Link>
                <Link href="#">
                  <LogoTelegram width={36} hanging={36} />
                </Link>

                <Link href="#">
                  <LogoFaceBook width={36} hanging={36} />
                </Link>

              </div>
            </div>
          </div>
          <div className="w-full max-w-234">
            <input
              className="border border-[#417CC0] rounded-[10px] w-full outline-none text-gray-placeholder lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-tight"
              type="text"
              placeholder="Имя/компания*"
            />
            <input
              className="border border-[#417CC0] rounded-[10px] w-full outline-none text-gray-placeholder lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-tight"
              type="text"
              placeholder="Телефон*"
            />
            <div className="flex relative items-center justify-center">
              <select
                className="cursor-pointer border border-[#417CC0] rounded-[10px] w-full outline-none text-gray-placeholder lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-tight"
                name=""
                id=""
              >
                <option>Полиграфия</option>
                <option>Упаковка</option>
                <option>Отдел продаж</option>
                <option>Другое</option>
              </select>
            </div>

            <textarea
              className="border border-[#417CC0] rounded-[10px] resize-none lg:h-[248px] md:h-[138px] h-[102px] outline-none w-full text-gray-placeholder lg:py-4.75 py-2.75 lg:px-7.75 px-4 mb-7.25 lg:text-lg text-sm font-light leading-tight"
              placeholder="Комментарии"
            ></textarea>

            <button className="bg-[#185796] lg:rounded-[30px] rounded-[15px] text-white uppercase lg:py-5 md:py-4.25 py-3.75 lg:w-auto w-full px-12.5 font-bold lg:text-xl md:text-[15px] text-sm leading-tight cursor-pointer">
              оставить заявку
            </button>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="bg-[#E2F1FF] pt-22.5 pb-22.5">
        <div className="max-w-[1680px] mx-auto flex flex-col lg:flex-row items-center justify-center px-5">
          <div className="text-center mx-auto justify-center lg:mb-0 mb-7.5">
            <Image
              src="/img/contact/humans.png"
              width={330}
              height={282}
              alt="Tahir Zeynalov avatar"
              className="mb-5 md:w-[330px] w-[282px]"
            />
            <h3 className="uppercase text-blue-primary lg:text-xl text-lg font-bold leading-tight mb-1">
              Тахир Зейналов
            </h3>
            <p className="font-normal lg:text-base text-sm leading-tight mb-6 text-gray-text">
              Менеджер по работе с ключевыми клиентами
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="#">
                <LogoTelegram width={24} hanging={25} />
              </Link>
              <Link href="#">
                <IconPhone width={19} hanging={19} />
              </Link>
              <Link href="#">
                <IconEmail width={24} hanging={11} />
              </Link>
            </div>
          </div>
          <div className="text-center mx-auto justify-center lg:mb-0 mb-7.5">
            <Image
              src="/img/contact/humans2.png"
              width={330}
              height={282}
              alt="Nosir Zakirjanov avatar"
              className="mb-5 md:w-[330px] w-[282px]"
            />
            <h3 className="uppercase text-blue-primary lg:text-xl text-lg font-bold leading-tight mb-1">
              Носир Закиржанов
            </h3>
            <p className="font-normal lg:text-base text-sm leading-tight mb-6 text-gray-text">
              Менеджер по работе с ключевыми клиентами
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="#">
                <LogoTelegram width={24} hanging={25} />
              </Link>
              <Link href="#">
                <IconPhone width={19} hanging={19} />
              </Link>
              <Link href="#">
                <IconEmail width={24} hanging={11} />
              </Link>
            </div>
          </div>
          <div className="text-center mx-auto justify-center">
            <Image
              src="/img/contact/humans3.png"
              width={330}
              height={282}
              alt="Tohira Sarikhuzhaeva avatar"
              className="mb-5 md:w-[330px] w-[282px]"
            />
            <h3 className="uppercase text-blue-primary lg:text-xl text-lg font-bold leading-tight mb-1">
              Тохира Сарихужаева
            </h3>
            <p className="font-normal lg:text-base text-sm leading-tight mb-6 text-gray-text">
              Менеджер по работе с ключевыми клиентами
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="#">
                <LogoTelegram width={24} hanging={25} />
              </Link>
              <Link href="#">
                <IconPhone width={19} hanging={19} />
              </Link>
              <Link href="#">
                <IconEmail width={24} hanging={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact