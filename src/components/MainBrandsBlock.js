import * as React from "react"
import { Link } from "gatsby"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

const dataSet = [
  {
    title: "giardina group",
    desc: "endüstriyel yüzey bitiş makineleri, roller coater, lak dökme, sprey atım, kenar boyama makineleri",
    img: "giardinalogo",
  },
  {
    title: "costa levigatrici",
    desc: "yüksek hassasiyette geniş bant endüstriyel yüzey zımparalama makineleri",
    img: "costa09",
  },
]

const MainBrandsBlock = ({ images }) => {
  const findImg = name => getImage(images.nodes.find(img => img.name === name))

  return (
    <div className="w-full max-h-full mx-auto grid grid-cols-2 grid-rows-2 gap-4 square md:wide">
      <div className="relative px-2 mx-auto flex flex-col justify-center items-center col-span-2 w-full overflow-hidden text-center">
        <div className="block mx-auto text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
          <h2 className="order-first text-sm sm:text-xl font-medium tracking-wide">
            Gerçek bir uzman gerektiğinde...
          </h2>
        </div>

        <div className="inline-block mx-auto text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text">
          <h2 className="py-1 xl:py-2 text-xl sm:text-5xl xl:text-7xl font-extrabold tracking-tighter">
            CİLA VE ZIMPARA MAKINELERİ
          </h2>
        </div>

        <p className="mt-2 text-xs md:text-lg font-medium text-white mx-auto">
          Giardina Group boya ve cila uygulama sistemleri, UV, akrilik,
          poliüretan, su bazlı boyaların satıhlara en mükemmel şekilde
          uygulanmasını temin eder. Costa Levigatrici geniş bant yüzey zımpara
          ve kalibrasyon makineleri, boya veya cilanın uygulanabileceği en
          yüksek düzgünlükteki satıhın oluşturulmasını sağlar.
        </p>
      </div>

      {dataSet.map((d, i) => (
        <div
          className="flex justify-center rounded-lg shadow-sm w-full h-full overflow-hidden col-span-1"
          key={i}
        >
          <div className="relative h-full w-full square" key={i}>
            <GatsbyImage
              className="absolute inset-0 object-cover w-full h-full"
              image={findImg(d.img)}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default MainBrandsBlock
