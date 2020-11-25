import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl"
import Navbar from "../components/Navbar"
import LangNav from "../components/LangNav"
import "../styles.scss"

// $(".toggle-menu").click(function () {
//   $(this).toggleClass("active")
//   $("#menu").toggleClass("open")
// })

const Index = () => {
  const [active, setActive] = useState(false)
  const [clicked, setClicked] = useState(false)

  const intl = useIntl()
  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <div className="main-content">
        <section id="home">
          <div className="home-header">
            <h1>
              <span>Impex</span>
            </h1>
            <button>Click me</button>
            <LangNav />
            <p>Textile production export and import</p>
          </div>
        </section>
        <section id="home">
          <div className="home-header">
            <h1>
              {intl.formatMessage({ id: "greeting" })}
              <span>Impex</span>
            </h1>
            <p>Textile production export and import</p>
          </div>
        </section>
        <section id="home">
          <div className="home-header">
            <h1>
              {intl.formatMessage({ id: "greeting" })}
              <span>Impex</span>
            </h1>
            <p>Textile production export and import</p>
          </div>
        </section>
        <section id="home">
          <div className="home-header">
            <h1>
              {intl.formatMessage({ id: "greeting" })}
              <span>Impex</span>
            </h1>
            <p>Textile production export and import</p>
          </div>
        </section>
        <section id="about">About us</section>
        <section id="features"></section>
        <section id="services"></section>
        <section id="contact"></section>
      </div>
    </>
  )
}

export default Index
