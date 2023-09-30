import React, { useState, useEffect } from "react"
import SliderIndex from "../sliderIndex"
import { Link as LinkS } from "react-scroll"

const Page00 = ({ data }) => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 3500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="flex flex-col w-full h-screen" id="home">
      {/* SLIDER CARUSEL */}
      <div className="relative h-full mt-[60px]">
        <SliderIndex imagesAll={data.sliderImg} />
      </div>
      {show ? (
        <div className="absolute z-40 bottom-10 right-20 font-extrabold">
          <div className="relative flex items-center justify-center animate-bounce">
            <LinkS
              className="relative hover:cursor-pointer"
              to="brands"
              spy={true}
              smooth={false}
              offset={-60}
              duration={300}
              onClick={() => setShow(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-28 w-28 fill-current text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-17 1h4v-8h2v8h4l-5 6-5-6z" />
              </svg>
            </LinkS>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Page00
