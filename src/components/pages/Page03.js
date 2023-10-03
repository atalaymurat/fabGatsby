import React from "react"
import MachineGrid from "../MachineGrid"

import { Autoplay, Keyboard, Scrollbar } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

const Page03 = ({ data }) => {


  return (
    <section
      className="flex items-center w-full min-h-[calc(100vh-60px)] h-full overflow-hidden bg-yellow-500"
      id="machines"
    >
      <div className="max-w-7xl w-full mx-auto px-4 border-2 border-yellow-400 bg-gray-100 rounded-md">
        <Swiper
          // install Swiper modules
          modules={[Keyboard, Autoplay, Scrollbar]}
          spaceBetween={20}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          slidesPerView={1}
          speed={1200}
          keyboard={{ enabled: true }}
          scrollbar={false}
          grabCursor={true}
          breakpoints={{
            1280: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          loop
          autoplay={{
            delay: 8500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={false}
          className="w-full"
        >
          <SwiperSlide>
            <div className="my-4 flex flex-col justify-center bg-white black px-6 pb-6 rounded-xl">
              <h1 className="text-lg sm:text-4xl py-3 font-extrabold">
                Giardina Group
              </h1>
              <MachineGrid data={data} mac="giardina group" />
            </div>

            <div className="my-4 flex flex-col justify-center bg-white text-blue-900 px-6 pb-6 rounded-xl">
              <h1 className="text-lg sm:text-4xl py-3 font-extrabold">
                Costa Levigatrici
              </h1>
              <MachineGrid data={data} mac="costa levigatrici" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-4 flex flex-col justify-center bg-white text-red-700 px-6 pb-6 rounded-xl">
              <h1 className="text-lg sm:text-4xl py-3 font-extrabold">
                Omma
              </h1>
              <MachineGrid data={data} mac="omma" />
            </div>
            <div className="my-4 flex flex-col justify-center bg-white text-blue-400 px-6 pb-6 rounded-xl">
              <h1 className="text-lg sm:text-4xl py-3 font-extrabold">
                Renzo Borgonovo
              </h1>
              <MachineGrid data={data} mac="renzo borgonovo" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Page03
