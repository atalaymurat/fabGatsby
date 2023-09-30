import React from "react"
import Footer from "../Footer"

const PhoneSvg = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
    </svg>
  )
}
const EmailSvg = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
    </svg>
  )
}
const LocSvg = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z" />
    </svg>
  )
}

const Page99 = () => {
  return (
    <section
      className="flex flex-col w-full min-h-[calc(100vh-60px)] h-full bg-purple-600 overflow-hidden"
      id="contact"
    >
      <div className="grid grid-cols-4 min-h-[calc(100vh-60px)] h-full gap-1 max-w-7xl w-full mx-auto">
        {/*  HEADING GRID */}
        <div className="flex flex-col px-4 items-center justify-center text-white col-span-4 lg:col-span-3 overflow-hidden">
          <h1 className="w-full text-2xl md:text-4xl font-bold tracking-wide text-gray-300">
            Bize Ulaşın
          </h1>
          <p className="w-full text-5xl sm:text-7xl lg:text-8xl font-black my-2 tracking-tighter break-words pt-2">
            İHTİYAÇLARINIZ HAKKINDA KONUŞALIM
          </p>
        </div>

        {/*  FABROMAK GRID */}
        <div className="px-4 py-2 col-span-4 lg:col-span-1 flex flex-col justify-center text-white overflow-hidden h-auto">
          <span className="capitalize font-extrabold tracking-tight text-3xl md:text-4xl">
            Fabromak Makine
          </span>
          <span className="text-xs md:text-base font-semibold text-gray-300">
            İthalat İhracat San. ve Tic. Ltd. Şti.
          </span>
        </div>
        {/*  SATIS EKİBİ İLE İLETISIM ROW */}
        <div className="col-span-4 w-full flex flex-col sm:flex-row lg:flex-col">
          <div className=" text-gray-900 sm:w-1/2 lg:w-full my-2">
            <div className="px-4 py-2 text-xl font-bold text-gray-300">
              Satış Ekibi ile Görüşün
            </div>

            <div className="grid grid-cols-10 lg:divide-x lg:divide-gray-500 lg:border-b lg:border-gray-500 col-span-10">
              <div className="px-2 py-2 w-full flex col-span-10 lg:col-span-3 overflow-hidden">
                <div className="flex justify-center items-center lg:w-1/3 w-[60px] ">
                  <PhoneSvg className="w-8 h-8 fill-current text-gray-900" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-gray-300 text-sm">Bizi Arayın</div>
                  <a href="tel:+902123206350" className="tabular-nums">
                    90 212 320 6350
                  </a>
                </div>
              </div>

              <div className="px-2 py-2 w-full flex col-span-10 lg:col-span-3 overflow-hidden">
                <div className="flex justify-center items-center lg:w-1/3 w-[60px]">
                  <EmailSvg className="w-8 h-8 fill-current text-gray-900" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-gray-300 text-sm">Email Gönderin</div>
                  <div className="text-base break-all">sales@fabromak.com.tr</div>
                </div>
              </div>

              <div className="px-2 py-2 w-full flex col-span-10 lg:col-span-4 overflow-hidden">
                <div className="flex justify-center items-center lg:w-1/5 w-[60px]">
                  <a
                    href="https://g.page/perpa?share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LocSvg className="h-8 w-8 fill-current text-gray-900 mr-2 hover:text-black" />
                  </a>
                </div>
                <address className="flex flex-col justify-center not-italic text-xs">
                  <div className="text-gray-300 text-sm">Bizi Ziyaret Edin</div>
                  <div>Perpa Ticaret Merkezi, B-Blok, 222</div>
                  <div>Şişli / İstanbul / Türkiye</div>
                </address>
              </div>
            </div>
          </div>

          {/*  SERVIS EKİBİ İLE İLETISIM ROW */}
          <div className="text-gray-900 sm:w-1/2 lg:w-full my-2">
            <div className="px-4 py-2 text-xl font-bold capitalize text-gray-300">
              Servis İhtiyaçlarınız İçin{" "}
              <span className="diagonal-fractions text-2xl">7/24</span>
            </div>

            <div className="grid grid-cols-10 lg:divide-x lg:divide-gray-500 lg:border-b lg:border-gray-500 col-span-10">
              <div className="px-2 py-2 w-full flex col-span-10 lg:col-span-3 overflow-hidden">
                <div className="flex justify-center items-center lg:w-1/3 w-[60px] ">
                  <PhoneSvg className="w-8 h-8 fill-current text-gray-900" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-gray-300 text-sm">Servis Talep Edin</div>
                  <a href="tel:+902123206350" className="tabular-nums">
                    90 212 320 6350
                  </a>
                </div>
              </div>

              <div className="px-2 py-2 w-full flex col-span-10 lg:col-span-3 overflow-hidden">
                <div className="flex justify-center items-center lg:w-1/3 w-[60px]">
                  <EmailSvg className="w-8 h-8 fill-current text-gray-900" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-gray-300 text-sm">Email Gönderin</div>
                  <div className="text-base break-all">service@fabromak.com.tr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default Page99
