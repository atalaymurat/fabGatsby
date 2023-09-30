import React from "react"
import OtherBrandsBlock from "../OtherBrandsBlock"

const Page02 = ({ data }) => {
  return (
    <section className="flex items-center w-full min-h-[calc(100vh-60px)] h-full overflow-hidden bg-[#0a6a56]">
      <div className="max-w-7xl w-full mx-auto">
        <div className="relative w-full px-4 py-8">
          <OtherBrandsBlock images={data.images} />
        </div>
      </div>
    </section>
  )
}

export default Page02
