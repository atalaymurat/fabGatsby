import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Link as LinkS, animateScroll as scroll } from "react-scroll"

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    changeStyle()
    window.addEventListener("scroll", changeStyle)
    return () => {
      window.removeEventListener("scroll", changeStyle)
    }
  }, [scrolling])

  const changeStyle = () => {
    if (window.scrollY >= 60) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolling
          ? "bg-black/80 border-b-2 border-gray-600 shadow-xl backdrop-blur-sm"
          : "bg-black"
      } min-h-[60px] flex select-none`}
    >
      <div className="max-w-7xl px-4 w-full h-auto mx-auto flex items-center">
        <h1 className="m-0 text-4xl font-bold tracking-tighter text-red-600">
          <LinkS
            activeClass="active"
            onSetActive={a => setActive(a)}
            onSetInactive={a => setActive("")}
            className="hover:cursor-pointer"
            to="home"
            spy={true}
            smooth={false}
            offset={-60}
            duration={300}
          >
            Fabromak
          </LinkS>
        </h1>
        <div className="ml-auto h-full text-sm font-semibold tracking-tight">
          <ul className="h-full flex text-white space-x-4">

          <li
              className={`h-full flex items-center ${
                active === "machines" ? "border-b-2 border-red-600" : "border-b-2 border-transparent"
              }`}
            >
              <LinkS
                onSetActive={a => setActive(a)}
                onSetInactive={a => setActive("")}
                className="hover:cursor-pointer"
                to="machines"
                isDynamic
                spy={true}
                smooth={true}
                offset={-60}
                duration={700}
              >
                Makineler
              </LinkS>
            </li>

            <li
              className={`h-full flex items-center ${
                active === "contact" ? "border-b-2 border-red-600" : "border-b-2 border-transparent"
              }`}
            >
              <LinkS
                onSetActive={a => setActive(a)}
                onSetInactive={a => setActive("")}
                className="hover:cursor-pointer"
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={700}
              >
                İletişim
              </LinkS>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
