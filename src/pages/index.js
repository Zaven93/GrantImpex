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

  const html =
    typeof document !== "undefined" ? document.querySelector("html") : null

  useEffect(() => {
    if (!html) {
      return
    }
    active
      ? (html.style.overflow = "hidden")
      : (html.style.overflow = "visible")
  }, [active])

  const scrollWindow = () => {
    if (typeof window == "undefined") {
      return
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 60) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  }

  scrollWindow()
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
