/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "greybg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <>
      <BackgroundImage
        fluid={data.file.childImageSharp.fluid}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer className="footer-section">
          <Footer />
        </footer>
      </BackgroundImage>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
