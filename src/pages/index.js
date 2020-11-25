import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import Navbar from "../components/Navbar"
import LangNav from "../components/LangNav"
import "../styles.scss"

const Index = () => {
  const [active, setActive] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const intl = useIntl()

  const html = document.querySelector("html")

  useEffect(() => {
    active
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  }, [active])

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 60) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <div>
      <Navbar scrolled={scrolled} active={active} setActive={setActive} />
      <div className="main-content">
        <section id="home">
          <div className="header">
            <h1>
              Grant<span>Impex</span>
            </h1>
            <div className="buttons-container">
              <button>Explore</button>
              <button>Contact Us</button>
            </div>
          </div>
        </section>
        <section id="about"></section>
        <section id="features"></section>
        <section id="services"></section>
        <section id="contact"></section>
      </div>
    </div>
  )
}

export default Index
