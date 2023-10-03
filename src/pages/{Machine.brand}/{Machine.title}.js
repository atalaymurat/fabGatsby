import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"

const MachinePage = ({ data }) => {
  const { machine, imagesAll } = data

  const machineImages = machine.images.map((imageName) => {
    const foundImage = imagesAll.edges.find(
      (edge) => edge.node.parent.base === imageName
    )
    return {
      image: foundImage ? getImage(foundImage.node) : null,
      alt: foundImage ? `${machine.title} Image` : "Image not found", // Provide meaningful alt text
    }
  })

  return (
    <div>
      <Seo title={`${machine.brand.toUpperCase()} ${machine.title.toUpperCase()}`} color="#FFFFFF" />
      <h1 className="text-3xl font-bold py-4 px-2 uppercase">{machine.title}</h1>
      <div className="px-2 py-2 grid gap-2 grid-cols-2 lg:grid-cols-3">
        {machineImages.map(({ image, alt }, i) => (
          <div className="relative border-2" key={i}>
            {image ? (
              <GatsbyImage
                image={image}
                alt={alt}
                className="h-auto square"
              />
            ) : (
              <p>{alt}</p> // Display an error message if the image is not found
            )}
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
