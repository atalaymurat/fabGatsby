import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Page00 from "../components/pages/Page00"
import Page01 from "../components/pages/Page01"
import Page02 from "../components/pages/Page02"
import Page03 from "../components/pages/Page03"
import Page99 from "../components/pages/Page99"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <Seo title="Giardina" />
        <Page00 data={data} />
        <Page01 data={data} />
        <Page02 data={data} />
        <Page03 data={data} />
        <Page99 />
    </Layout>
  )
}

export const query = graphql`
  query {
    machines: allMachine(limit: 10, sort: { fields: title, order: ASC }) {
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
    sliderImg: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
          }
        }
      }
    }
    images: allFile {
      nodes {
        id
        name
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            layout: FULL_WIDTH
            backgroundColor: "#FFFFFF"
          )
        }
      }
    }
  }
`

export default IndexPage
