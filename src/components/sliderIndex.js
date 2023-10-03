import * as React from "react"
import { Pagination, A11y, Autoplay, EffectFade, Keyboard } from "swiper"

import { Swiper, SwiperSlide } from "swiper/react"
import { GatsbyImage } from "gatsby-plugin-image"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "swiper/css/effect-fade"



const SliderIndex = ({ images }) => {
  return (
    <div className="relative sm:absolute inset-0 h-full w-full">
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, Autoplay, Keyboard, EffectFade]}
        spaceBetween={0}
        effect={"fade"}
        keyboard={{ enabled: true }}
        slidesPerView={1}
        speed={1100}
        loop
        autoplay={{ delay: 6500 }}
        pagination={{ clickable: false, dynamicBullets: true }}
        className="h-full"
      >
        {images.edges.map((i, index) => (
          <SwiperSlide key={index}>
            <GatsbyImage
              image={i.node.childImageSharp.gatsbyImageData}
              className="mx-auto h-full w-auto object-cover"
              alt="..."
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderIndex
