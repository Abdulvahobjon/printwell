import Image from "next/image"
import PartnersSlider from "@/components/partners-slider"

export default function PartnersSection() {
  return (
    <section id="partners" className="md:pt-42 pt-10 md:pb-43 pb-20">
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
    </section>
  )
}