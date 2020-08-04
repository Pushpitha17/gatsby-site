import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <div className="section">
        <div className="section-center">
          <Image fluid={fluid} className="main-logo" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
