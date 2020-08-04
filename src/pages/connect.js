import Layout from "../components/layout"
import React from "react"
import { Link } from "gatsby"

const Connect = () => {
  return (
    <Layout>
      <div className="section">
        <div>Connect</div>
        <div className="center-btn">
          <Link to="/blog/">Blog</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Connect
