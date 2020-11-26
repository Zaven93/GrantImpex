import React, { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import "./styles.scss"

const Dropdown = ({ active }) => {
  const path =
    typeof window !== "undefined"
      ? window.location.pathname.slice(1, 3).toUpperCase()
      : "RU"
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
  const [headerTitle, setHeaderTitle] = useState(path)

  const ref = useRef()

  useOnClickOutside(ref, () => setListOpen(false))

  const toggle = () => setListOpen(!listOpen)

  return (
    <div ref={ref} className={`dd-wrapper ${active ? "visible" : "hidden"}`}>
      <div className="dd-header" onClick={() => toggle()}>
        <div className="dd-header-title">{headerTitle}</div>
        {listOpen ? (
          <FontAwesomeIcon icon={faAngleUp} />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} />
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

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export default Dropdown
