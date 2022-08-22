import React from "react"
import emailicon from "../images/mail.png"
import linkedinicon from "../images/linkedin.png"

export default function Details() {
  return (
    <div className="details">
      <h2>Zach Dimond</h2>
      <h4>Frontend Developer</h4>
      <p><a href="https://zachdimond.com">zachdimond.com</a></p>
      <div className="contact-btns">
        <a href="mailto:zedimond@gmail.com" target="blank">
          <button className="email">
            <img src={emailicon}></img>Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/zachdimond/" target="blank">
          <button className="linkedin">
            <img src={linkedinicon}></img>LinkedIn
          </button>
        </a>
      </div>
      <div className="details-blurbs">
        <h3>About</h3>
        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h3>Interests</h3>
        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
    </div>
  )
}