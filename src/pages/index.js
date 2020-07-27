import React from "react"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

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

export default IndexPage
