import React from "react"
import { injectIntl, useIntl } from "gatsby-plugin-intl"
import LangNav from "../LangNav"
import grantImpex from "../../images/grantImpex.png"

const Navbar = ({ active, setActive }) => {
  const intl = useIntl()
  return (
    <nav className="navbar">
      <img className="logo" src={grantImpex} alt="Branch icon" />
      <ul className={active && "active"}>
        <div onClick={() => setActive(!active)} className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <LangNav />
        <li>
          <img src={grantImpex} alt="Branch icon" />
        </li>
        <li>{intl.formatMessage({ id: "home" }).toUpperCase()}</li>
        <li>{intl.formatMessage({ id: "about" }).toUpperCase()}</li>
        <li>{intl.formatMessage({ id: "features" }).toUpperCase()}</li>
        <li>{intl.formatMessage({ id: "services" }).toUpperCase()}</li>
        <li>{intl.formatMessage({ id: "contact" }).toUpperCase()}</li>
      </ul>
    </nav>
  )
}

export default Navbar
