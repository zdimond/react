import React from "react"
import Details from "./components/details"
import ProfilePic from "./components/profile-pic"
import SocialsFooter from "./components/socials-footer"
import sun from "./images/sun.png"
import moon from "./images/moon.png"

export default function App() {
  const [theme, setTheme] = React.useState("light");
  
  function Toggle() {
    setTheme(prevTheme => {
      if (prevTheme === "light") {
        return "dark"
      } else {
        return "light"
      }
    })
    console.log("tog")
  }

  return (
    <main className={theme}>
      <div className="container">
        <img className="sun-moon" src={(theme === "light") ? sun : moon} onClick={Toggle} />
        <ProfilePic />
        <Details />
        <SocialsFooter />
      </div>
    </main>
  )
}