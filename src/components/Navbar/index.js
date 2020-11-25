import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import "./styles.scss"
import LangNav from "../LangNav"
import grantImpex from "../../images/grantImpex.png"

const Navbar = ({ active, setActive }) => {
  const intl = useIntl()
  return (
    <>
      <header id="header">
        <LangNav active={active} />
        <img
          className={active && "hidden"}
          src={grantImpex}
          alt="Grant Impex logo"
        />
        <nav class="nav">
          <button
            onClick={() => setActive(!active)}
            className={`toggle-menu ${active && "active"}`}
          >
            <span></span>
          </button>
        </nav>
      </header>

      <div id="menu" className={active && "open"}>
        <nav class="main-nav">
          <ul>
            <li>
              <img src={grantImpex} alt="Grant Impex logo" />
            </li>
            <li>
              <a href="#home">{intl.formatMessage({ id: "home" })}</a>
            </li>
            <li>
              <a href="#about">{intl.formatMessage({ id: "about" })}</a>
            </li>
            <li>
              <a href="#features">{intl.formatMessage({ id: "features" })}</a>
            </li>
            <li>
              <a href="#services">{intl.formatMessage({ id: "services" })}</a>
            </li>
            <li>
              <a href="#contact">{intl.formatMessage({ id: "contact" })}</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
