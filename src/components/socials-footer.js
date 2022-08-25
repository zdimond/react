import React from "react"
import fb from "../images/facebook.png"
import gh from "../images/github.png"
import ig from "../images/instagram.png"
import tw from "../images/twitter.png"

export default function SocialsFooter() {
  return (
    <div className="footer">
      <a href="https://github.com/zdimond" target="__blank"><img src={gh} /></a>
    </div>
  )
}