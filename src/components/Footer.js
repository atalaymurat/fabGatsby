import React from "react"
import { Link } from "gatsby"
import { Link as LinkS, animateScroll as scroll } from "react-scroll"

const Footer = () => {
  return (
    <footer className="w-full self-end bg-black h-auto" id="footer">
      <div className="max-w-7xl flex px-4 py-4 mx-auto text-gray-200">
        © {new Date().getFullYear()}
        <LinkS
          activeClass="active"
          className="hover:cursor-pointer px-1"
          to="brands"
          spy={true}
          smooth={true}
          offset={-60}
          duration={700}
        >
          <span>Fabromak</span>
        </LinkS>
        <div className="ml-auto">
          <LinkS
            activeClass="active"
            className="hover:cursor-pointer"
            to="machines"
            spy={true}
            smooth={true}
            offset={-60}
            duration={700}
          >
            <span className="text-xs">{" "}</span>
          </LinkS>
        </div>
      </div>
    </footer>
  )
}

export default Footer
