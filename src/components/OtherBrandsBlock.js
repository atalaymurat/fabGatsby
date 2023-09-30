import * as React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const mid3 = [
  {
    title: "Yüzey Şekillendirme",
    img: "borgonovo-logo",
  },
  {
    title: "Kapı İşlem Merkezleri",
    img: "esse-pigi-logo",
  },
  {
    title: "Ambalaj Makineleri",
    img: "erregi-logo",
  },
  {
    title: "Kenar Zımpara",
    img: "destefani-logo",
  },
  {
    title: "Laminasyon Hatları",
    img: "omma-logo",
  },
  {
    title: "Polish Makinaları",
    img: "emme-elle-logo",
  },
]

const OtherBrandsBlock = ({ images }) => {
  const findImg = name => getImage(images.nodes.find(img => img.name === name))

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-3 gap-4 w-full h-full">
      {mid3.map((d, i) => (
        <div className="rounded-lg shadow-sm overflow-hidden" key={i}>
          <div className="relative square lg:wide w-full h-full">
            <GatsbyImage
              image={findImg(d.img)}
              className="absolute inset-0 filter transition duration-300 object-cover hover:grayscale w-full h-full bg-white"
            />
            {/* image h-full w-full olmazsa img sıkıntı çıkarıyor */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default OtherBrandsBlock
