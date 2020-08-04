import React from "react"
import Image from "gatsby-image"

const BlogCard = ({ image, title, desc }) => {
  return (
    <div>
      <Image fluid={image} className="" />
      <div>{title}</div>
      <div>{desc}</div>
    </div>
  )
}

export default BlogCard
