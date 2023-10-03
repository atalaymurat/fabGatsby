import * as React from "react"
import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MachineGrid = ({ data, mac }) => {
  const { imagesAll, machines } = data
  return (
    <div className="mx-auto w-full h-full grid grid-cols-4 gap-4">
      {machines.edges
        .filter(f => f.node.brand === mac)
        .filter((f, i) => i < 4)
        .map((m, i) => {
          let images = []

          m.node.images.forEach(imgName => {
            let found = imagesAll.edges.find(
              (edge) => edge.node.fluid.originalName === imgName
            )
            images = [...images, found]
          })

          const image = getImage(images[0].node)

          return (
            <div className="w-full h-full flex flex-col text-yellow-600" key={i}>
              <div className="relative overflow-hidden hover:cursor-pointer h-full w-full">
                <Link
                  to={`/${m.node.brand.replace(
                    / +/g,
                    "-"
                  )}/${m.node.title.replace(/ +/g, "-")}`}
                >
                  <div className="h-full w-full flex items-center">

                    <GatsbyImage
                      image={image}
                      alt={m.node.title}
                      className="w-full h-full aspect-square"
                      style={{ maxWidth: "100%" }}
                    />
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
