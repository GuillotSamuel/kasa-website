import React from 'react'
import {Link} from "react-router-dom"
import LetterK from './navbarLogo/letterKNavbar.png'
import KasaLogo from './navbarLogo/kasaLogoNavbar.png'
import LetterS from './navbarLogo/letterSNavbar.png'
import LetterA from './navbarLogo/letterANavbar.png'

export default function Navbar() {
  return (
    <header>
      <div id="headerLogo">
        <img src={LetterK} alt="K" />
        <img src={KasaLogo} alt="A" />
        <img src={LetterS} alt="S" />
        <img src={LetterA} alt="A" />
      </div>
    <nav>
        <Link to="/">Accueil</Link>
        <Link to="/aPropos">A propos</Link>
    </nav>
    </header>
  )
}
