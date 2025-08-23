import Image from "next/image"

export default function OrderSection() {
  return (
    <section
      style={{
        backgroundImage: "url(/img/bacrounds/order-background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1420px] mx-auto px-5 md:pt-42 pt-0 pb-23">
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
    </section>
  )
}