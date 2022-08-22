import React from "react"
import fb from "../images/facebook.png"
import gh from "../images/github.png"
import ig from "../images/instagram.png"
import tw from "../images/twitter.png"

export default function SocialsFooter() {
  return (
    <div className="footer">
      <img src={tw}></img>
      <img src={fb}></img>
      <img src={ig}></img>
      <img src={gh}></img>
    </div>
  )
}