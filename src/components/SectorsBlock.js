import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Gear from "../images/icons/gear"
import Arrow from "../images/icons/arrow"

const SectorsBlock = ({ images }) => {
  const findImg = name => getImage(images.nodes.find(img => img.name === name))

  return (
    <div className="grid sm:grid-cols-3 gap-2 h-auto sm:text-xs md:text-sm lg:text-lg">
      {sectorData.map((d, i) => (
        <>
          {d.title !== "Tüm Sektörler" && (
            <div
              key={i}
              className="relative overflow-hidden bg-blue-200 border rounded-lg shadow-xl"
            >
              <GatsbyImage
                image={findImg(d.img)}
                className="sm:absolute inset-0 w-full h-auto overflow-hidden"
              />
              <div className="absolute flex flex-col w-full px-2 top-3">
                <h2 className="relative py-1 mx-auto text-3xl font-bold">{d.title}</h2>
                <p className="capitalize">
                  <ul>
                    {(d.title === "Ahşap" || "Metal") &&
                      d.desc.map((l, i) => (
                        <li className="flex items-center truncate">
                          <Arrow className="w-3 h-3 mr-2" />
                          {l}
                        </li>
                      ))}
                  </ul>
                </p>
              </div>
            </div>
          )}
          {d.title === "Tüm Sektörler" && (
            <div
              key={i}
              className="relative px-2 py-6 bg-gray-200 font-barlow h-full w-full overflow-hidden"
            >
              <SvgIconArraw />
              <div className="relative z-10">
                <h2 className="font-semibold">{d.title}</h2>
                <h3 className="font-thin text-green-600">
                  {d.question}
                </h3>
                <p className="text-gray-600">
                  {d.paragraf}
                </p>
                <ul className="mt-2">
                  {d.desc.map((s, i) => (
                    <li className="flex items-center capitalize">
                      <Gear className="w-4 h-4 mr-2 text-green-500" />
                      {s}{" "}
                      <span className="inline-flex items-center justify-center px-2 py-1 ml-2 mr-2 text-xs font-bold leading-none text-red-100 bg-green-500 rounded-full">
                        {Math.floor(Math.random() * 50) + 4}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  )
}

export default SectorsBlock

const SvgIconArraw = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute inset-0 text-gray-400 opacity-30 w-96 h-96"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />
  </svg>
)

const sectorData = [
  {
    title: "Tüm Sektörler",
    desc: ["komposit metaryeller", "fibre cement", "havacılık", "otomotiv", "seramik", "cam"],
    question: "Yüksek Kaliteyemi İhtiyacınız Var?",
    paragraf: "Farklı uygulamalar için farklı çözümler...",

  },
  {
    title: "Ahşap",
    img: "metal",
    desc: [
      "embossing yüzey şekillendirme",
      "lake sprey uygulama hatları",
      "UV akrilik macun hatları",
      "parke boyama hatları",
      "plaka boyama hatları",
      "high gloss yüzeyler",
      "zero mat, süper mat yüzeyler",
      "soft touch yüzeyler",
    ],
  },
  {
    title: "Metal",
    img: "metal",
    desc: [
      "ayna effekti ( mirror effect )",
      "yüzey parlatma işlemleri",
      "ıslak (wet) yüzey zımpara",
      "robotik sprey uygulamaları",
      "satine",
      "çapak alma ( deburring )",
      "hassas taşlama ( grinding )",
      "rulo dan ruloya sistemler",
    ],
  },
]
