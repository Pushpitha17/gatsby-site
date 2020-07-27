import React from "react"
import PropTypes from "prop-types"

const AboutPagePreview = ({ entry, widgetFor }) => (
  <div>
    page=
    {{
      frontmatter: entry.getIn(["data"]).toJS(),
      html: entry.getIn(["data", "body"]),
      bodyIsMarkdown: true,
    }}
  </div>
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
