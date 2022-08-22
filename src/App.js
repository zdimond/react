import React from "react"
import Details from "./components/details"
import ProfilePic from "./components/profile-pic"
import SocialsFooter from "./components/socials-footer"

export default function App() {
  return (
    <div className="container">
      <ProfilePic />
      <Details />
      <SocialsFooter />
    </div>
  )
}