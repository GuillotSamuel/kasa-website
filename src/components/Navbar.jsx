import React from 'react'
import {Link} from "react-router-dom"
import LetterK from '../assets/navbarLogo/letterKNavbar.png'
import KasaLogo from '../assets/navbarLogo/kasaLogoNavbar.png'
import LetterS from '../assets/navbarLogo/letterSNavbar.png'
import LetterA from '../assets/navbarLogo/letterANavbar.png'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <header>
      <div id="headerLogo">
        <img src={LetterK} alt="K" id="imageMarginSmall"/>
        <img src={KasaLogo} alt="A" id="imageMarginTall"/>
        <img src={LetterS} alt="S" id="imageMarginTall"/>
        <img src={LetterA} alt="A" />
      </div>
      <nav id="navigationButton">
          <Link to="/" id="linkButton">Accueil</Link>
          <Link to="/aPropos" id="linkButton">A propos</Link>
      </nav>
    </header>
  )
}
