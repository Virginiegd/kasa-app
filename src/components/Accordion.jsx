import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

/** Composant accordion
 * Collapse fermé par défaut
 * Au clique, ouverture du collapse*/

function Accordion({ heading, content }) {
  const [isActive, setIsActive] = useState(false)
  const element = <FontAwesomeIcon icon={faAngleDown} />

  return (
    <li className='accordion__contend'>
      <div className="accordion__heading" onClick={() => setIsActive(!isActive)}>
        <span className="heading">{heading}</span>
        <span>{isActive ? <button className="heading__buttonOpen" >{element}</button> : <button className="heading__buttonClose">{element}</button>}</span>
      </div>
      {/* Si useState est true*/}
      {isActive && <div className="accordion__content">{content}</div>}
    </li>

  )
}

export default Accordion