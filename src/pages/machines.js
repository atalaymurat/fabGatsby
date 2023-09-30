import * as React from "react"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import MachineGrid from "../components/MachineGrid"

const Machines = ({ data }) => {
  const { imagesAll, machines } = data
  return (
    <Layout>
      <Seo title="Makinaler" />
      {machines.edges.map((m, i) => {
        let images = []

        m.node.images.forEach(i => {
          let found = imagesAll.edges.find(img => img.node.fluid.originalName === i)
          images = [...images, found]
        })

        return (
          <div>
            <h1>{m.node.title}</h1>
            {images.map(i => (
              <div className="inline-flex border-2 border-gray-300 ">
                <Img fluid={i.node.fluid} className="w-24 h-24"></Img>
              </div>
            ))}
          </div>
        )
      })}
      <MachineGrid data={data}/>
    </Layout>
  )
}

export default Machines

export const pagequery = graphql`
  query {
    machines: allMachine {
      edges {
        node {
          brand
          category
          id
          images
          description
          sector
          title
          youtube
        }
      }
    }
    imagesAll: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 1020) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
