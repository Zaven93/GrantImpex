import React, { useState, useEffect, useRef } from "react"
import { useIntl } from "gatsby-plugin-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faThumbsUp,
  faCogs,
  faClock,
  faHandshake,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons"
import Navbar from "../components/Navbar"
import LangNav from "../components/LangNav"
import EmailForm from "../components/EmailForm"
import textileProduction from "../images/textile_production.jpg"
import "../styles.scss"

const Index = () => {
  const [active, setActive] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  })

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

  const formRef = useRef()

  const encode = data => {
    Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = formRef.current
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => alert("Success"))
      .catch(() => alert("Error"))

    setState({
      name: "",
      email: "",
      message: "",
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()

  //   const form = this.ContactForm.current

  //   fetch("/", {
  //     method: "post",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: this.encode({
  //       "form-name": form.getAttribute("name"),
  //       ...this.state,
  //     }),
  //   })
  //     .then(() => navigate("/"))
  //     .catch(error => alert(error))

  //   this.setState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   })
  // }

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
        <section id="features">
          <div className="features-container">
            <h1>OUR FEATURES</h1>
            <div className="features-item">
              <FontAwesomeIcon icon={faThumbsUp} />
              <h3>High Quality</h3>
              <p>
                A textile is a flexible material made by creating an
                interlocking network of yarns or threads, which are produced by
                spinning raw fibres from either natural or synthetic sources
                into long and twisted lengths.
              </p>
            </div>
            <div className="features-item">
              <FontAwesomeIcon icon={faCogs} />
              <h3>Reliable service</h3>
              <p>
                All that you need just to trust us and we will satisfy you with
                quality and rapidity of our work. We know all about textile
                business, import and export, all the documents that are needed
                everything is on us.
              </p>
            </div>
            <div className="features-item">
              <FontAwesomeIcon icon={faClock} />
              <h3>In time production</h3>
              <p>
                A textile is a flexible material made by creating an
                interlocking network of yarns or threads, which are produced by
                spinning raw fibres from either natural or synthetic sources
                into long and twisted lengths.
              </p>
            </div>
            <div className="features-item">
              <FontAwesomeIcon icon={faHandshake} />
              <h3>High flexibility</h3>
              <p>
                As the TTC supply air diffuser has all of the sensors built in
                to the diffuser and does not require any installation on the
                walls, extremely high flexibility and simple management are
                obtained when walls are to be built, moved or removed.
              </p>
            </div>
          </div>
        </section>
        <section id="services">
          <h1>Services</h1>
          <div className="service-container">
            <p>
              YOUS CASINO's affiliate program is one of the most trusted and
              Excellent partnership model. We are committed to enhancing our
              online casino business model by making all of our tools
              comfortable and easy to manage We are committed to making it a
              reality. The main functions provided by this affiliate program are
              as follows.{" "}
            </p>

            <p>
              <FontAwesomeIcon icon={faCheckCircle} /> Import and export of
              textile production
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} /> Intermediary services
            </p>
            <p>
              <FontAwesomeIcon icon={faCheckCircle} /> Consulting and etc
            </p>
          </div>
          <span className="services-image"></span>
        </section>
        <section id="contact">
          <h1>send us a message</h1>
          <form
            ref={formRef}
            name="test-form"
            method="post"
            data-netlify="true"
          >
            <input name="name" placeholder="Your name" type="text" />
            <input name="email" placeholder="Email" />
            <input name="message" placeholder="Message" type="text" />
            <button>Send</button>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Index
