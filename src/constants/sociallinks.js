import React from "react"
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaSoundcloud,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <FaYoutube className="social-icon"></FaYoutube>,
    url: "https://www.youtube.com",
  },
  {
    id: 4,
    icon: <FaSoundcloud className="social-icon"></FaSoundcloud>,
    url: "https://www.soundcloud.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
