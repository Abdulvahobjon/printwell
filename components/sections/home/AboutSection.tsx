import VideoPlayer from "@/components/video-player"
import Union from "@/public/svg/Union"

export default function AboutSection() {
  return (
    <section id="about" className="pt-43 pb-18.75 relative">
      <Union className="absolute right-0 top-9"/>
      <div className="text-black px-5 mx-auto max-w-[1632px] relative z-20">
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
  )
}