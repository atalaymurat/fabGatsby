import React from "react"

import MainBrandsBlock from "../MainBrandsBlock"

const Page01 = ({ data }) => {
  return (
    <section className="flex items-center w-full min-h-[calc(100vh-60px)] h-full overflow-hidden bg-gray-900" id="brands">
      <div className="max-w-7xl w-full mx-auto">
        <div className="relative w-full px-4 py-8">
          {/* COTSA AND GIARDINA BLOCK */}
          <MainBrandsBlock images={data.images} />
        </div>
      </div>
    </section>
  )
}

export default Page01
