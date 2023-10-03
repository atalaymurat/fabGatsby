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
    machines: allMachine(limit: 100, sort: { title: ASC }) {
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
          gatsbyImageData( height: 200, layout: CONSTRAINED, placeholder: BLURRED, breakpoints: [640, 768, 1024, 1280, 1536])
          fluid(maxWidth: 1020) {
            originalName
          }
        }
      }
    }
    sliderImg: allFile(filter: { relativeDirectory: { eq: "slider" } }) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED, breakpoints: [640, 768, 1024, 1280, 1536])
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
            backgroundColor: "#FFFFFF", height: 1020, layout: CONSTRAINED, breakpoints: [640, 768, 1024, 1280, 1536]
          )
        }
        publicURL
      }
    }
  }
`

export default IndexPage
