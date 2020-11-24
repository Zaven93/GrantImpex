import React, { useState } from "react"
import onClickOutside from "react-onclickoutside"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import "./styles.scss"

const Dropdown = () => {
  const [languages, setLanguages] = useState([
    {
      id: 0,
      lang: "en",
      title: "EN",
      selected: false,
    },
    {
      id: 1,
      lang: "ru",
      title: "RU",
      selected: false,
    },
  ])
  const [listOpen, setListOpen] = useState(false)
  const [headerTitle, setHeaderTitle] = useState(
    window.location.pathname.slice(1).toUpperCase()
  )

  const toggle = () => setListOpen(!listOpen)

  Dropdown.handleClickOutside = () => setListOpen(false)

  console.log("Path data", window.location.pathname.slice(1))

  return (
    <div className="dd-wrapper">
      <div className="dd-header" onClick={() => toggle()}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen ? (
          <FontAwesomeIcon icon={faAngleUp} size="2px" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} size="2px" />
        )}
      </div>
      {listOpen && (
        <ul className="dd-list">
          {languages.map(language => (
            <li
              hidden={headerTitle === language.title}
              onClick={() => {
                setHeaderTitle(language.title)
                toggle()
              }}
              key={language.id}
              className="dd-list-item"
            >
              <a href={`/${language.lang}`}>{language.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)
