import Layout from "../components/layout"
import React from "react"
import { Link } from "gatsby"
import Form from "../components/Form"
import { GoChevronRight } from "react-icons/go"

const Connect = () => {
  return (
    <Layout backgroundClass="fixedpage">
      <div className="section">
        <div className="section-center form">
          <div className="form-title">Connect</div>
          <Form />
        </div>
        <div className="center-btn">
          <Link to="/blog/" className="blog-link">
            Visit My Blog <GoChevronRight></GoChevronRight>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Connect
