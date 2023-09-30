import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"

const MachinePage = ({ data }) => {
  const { machine, imagesAll } = data

  let images = []

  machine.images.forEach(i => {
    let found = imagesAll.edges.find(img => img.node.parent.base === i)
    images = [...images, found]
  })

  return (
    <div>
      <Seo title={`${machine.brand.toUpperCase()} ${machine.title.toUpperCase()}`} color="#FFFFFF" />
      <h1 className="text-3xl font-bold py-4 px-2 uppercase">{machine.title}</h1>
      <div className="px-2 py-2 grid gap-2 grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <div className="relative border-2">
            <GatsbyImage
              image={img.node.gatsbyImageData}
              alt="alt"
              className="h-auto square"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MachinePage

export const pagequery = graphql`
  query ($id: String!) {
    machine(id: { eq: $id }) {
      brand
      category
      id
      images
      description
      sector
      title
      youtube
    }
    imagesAll: allImageSharp {
      edges {
        node {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
          parent {
            ... on File {
              base
            }
          }
        }
      }
    }
  }
`
