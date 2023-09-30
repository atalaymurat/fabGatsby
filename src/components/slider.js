import * as React from "react"
import { Navigation, Pagination, A11y, Autoplay } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import { GatsbyImage } from "gatsby-plugin-image"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

const Slider = ({ imagesAll }) => {
  return (
    <div className="w-auto h-32">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        speed={5000}
        loop
        autoplay={{ delay: 7500, pauseOnMouseEnter: true, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {imagesAll.map(i => (
          <SwiperSlide>
              <GatsbyImage
                image={i.node.gatsbyImageData}
                className="object-cover w-full mx-auto wide"
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
