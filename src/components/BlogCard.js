import React from "react"
import Image from "gatsby-image"

const BlogCard = ({ image, title, desc }) => {
  return (
    <div className="blog-card">
      <Image fluid={image} className="blog-card-img" />
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  )
}

export default BlogCard
