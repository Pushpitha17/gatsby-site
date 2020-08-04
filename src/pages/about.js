import React from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/layout"

const about = ({ data }) => {
  const {
    file: {
      childMarkdownRemark: {
        html,
        frontmatter: { title },
        rawMarkdownBody,
      },
    },
  } = data

  return (
    <Layout>
      <div className="section">
        <div className="section-center">
          <div className="about-content">
            <div>{title}</div>
            <ReactMarkdown source={rawMarkdownBody} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "about/index.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          title
        }
        rawMarkdownBody
      }
    }
  }
`

export default about
