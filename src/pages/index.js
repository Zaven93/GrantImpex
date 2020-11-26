import React, { useState, useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import Navbar from "../components/Navbar"
import LangNav from "../components/LangNav"
import textileProduction from "../images/textile_production.jpg"
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
              <button>{intl.formatMessage({ id: "explore" })}</button>
              <button>{intl.formatMessage({ id: "contact_us" })}</button>
            </div>
          </div>
        </section>
        <section id="about">
          <h1>ABOUT US</h1>
          <p>
            "GrantImpex Textile" company is the biggest one in the region.
            Founded in 2020 the company did its best to seize the local market
            and got a great interest in foreign markets. The high quality
            production was immediately estimated by consumers and was awarded
            the “National Trust” prize. "GrantImpex" is known for its high
            quality products, fashionable design and competitive prices. The
            company production consists of two branches, namely socks production
            and garment manufacturing. The socks manufacturing is the unique one
            due to its modern technical saturation in the region. The third
            generation production line of Italian company Lonati stands out for
            its high technical capabilities one of which is the sock sewing
            process without stitch from the very beginning till the end. Only
            high quality raw material is used in production. Both socks
            production and garment manufacturing are equipped with worldwide
            known best brand machines and equipments (Japan Pegasus, Juki,
            Kansai and other known brands) allowing to have merely a high
            quality production. The company has been functioning not so long as
            of today but it already has its unique place in the market and is a
            leader in textile production. The company’s primary target is to
            clean Armenian market from cheap and low quality products by
            developing local production as well as introduce Armenian high
            quality products in foreign markets.
          </p>
          <span className="about-image"></span>
        </section>
        <section id="features"></section>
        <section id="services"></section>
        <section id="contact"></section>
      </div>
    </div>
  )
}

export default Index
