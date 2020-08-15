import Layout from "../components/layout"
import React from "react"
import BlogCard from "../components/BlogCard"
import { Link } from "gatsby"

const blog = ({ data: { allposts, feature } }) => {
  const { nodes } = allposts
  const {
    nodes: [featurePost],
  } = feature

  return (
    <Layout>
      <div>blog</div>
      <div className="Section">
        <div className="section-center">
          <div>
            Feature post
            <Link to={featurePost.fields.slug}>
              <BlogCard
                image={
                  featurePost.frontmatter.featuredimage.childImageSharp.fluid
                }
                title={featurePost.frontmatter.title}
                desc={featurePost.frontmatter.description}
              />
            </Link>
          </div>
          {nodes.map((item, index) => (
            <Link to={item.fields.slug} key={index}>
              <BlogCard
                image={item.frontmatter.featuredimage.childImageSharp.fluid}
                title={item.frontmatter.title}
                desc={item.frontmatter.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allposts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date
          featuredpost
          description
          title
          featuredimage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        rawMarkdownBody
        id
      }
    }
    feature: allMarkdownRemark(
      filter: { frontmatter: { featuredpost: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date
          featuredpost
          description
          title
          featuredimage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
        }
        rawMarkdownBody
        id
      }
    }
  }
`

export default blog
