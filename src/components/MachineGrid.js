import * as React from "react"
import { Link } from "gatsby"

import Img from "gatsby-image"

const MachineGrid = ({ data, mac }) => {
  const { imagesAll, machines } = data
  return (
    <div className="mx-auto w-full h-full grid grid-cols-4 gap-4">
      {machines.edges
        .filter( f => f.node.brand === mac )
        .filter((f, i) => i < 4)
        .map((m, i) => {
          let images = []

          m.node.images.forEach(i => {
            let found = imagesAll.edges.find(
              img => img.node.fluid.originalName === i
            )
            images = [...images, found]
          })

          return (
            <div className="w-full h-full flex flex-col text-yellow-600">
              <div className="relative overflow-hidden hover:cursor-pointer h-full w-full">
                <Link
                  to={`/${m.node.brand.replace(
                    / +/g,
                    "-"
                  )}/${m.node.title.replace(/ +/g, "-")}`}
                >
                  <div className="flex">
                    <Img
                      fluid={images[0].node.fluid}
                      className="absolute inset-0 object-cover w-full h-full square"
                    ></Img>
                  </div>
                </Link>
              </div>
              <div className="font-semibold text-xs sm:text-sm capitalize">
                {m.node.title}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default MachineGrid
