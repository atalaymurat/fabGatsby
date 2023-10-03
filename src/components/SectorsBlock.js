import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ArrowIcon from "../components/Icons/ArrowIcon"

const SectorsBlock = ({ images }) => {
  const findImg = (name) => getImage(images.nodes.find((img) => img.name === name))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:text-xs md:text-sm lg:text-lg">
      {sectorData.map((sector) => (
        <div
          key={sector.title}
          className="relative overflow-hidden bg-blue-200 border rounded-lg shadow-xl"
        >
          <GatsbyImage
            image={findImg(sector.img)}
            className="absolute inset-0 w-full h-auto overflow-hidden"
            alt="sector"
          />
          <div className="absolute flex flex-col w-full px-2 top-3">
            <h2 className="relative py-1 mx-auto text-3xl font-bold">{sector.title}</h2>
            <div className="capitalize">
              <ul>
                {sector.desc.map((description, i) => (
                  <li key={i} className="flex items-center truncate">
                    <ArrowIcon className="w-3 h-3 mr-2" />
                    {description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SectorsBlock

const sectorData = [
  {
    title: "Tüm Sektörler",
    img: "metal",
    desc: [
      "komposit metaryeller",
      "fibre cement",
      "havacılık",
      "otomotiv",
      "seramik",
      "cam",
    ],
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
];
