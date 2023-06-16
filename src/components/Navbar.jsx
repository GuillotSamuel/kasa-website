import React from 'react';
import { NavLink } from 'react-router-dom';
import LetterK from '../assets/navbarLogo/letterKNavbar.png';
import KasaLogo from '../assets/navbarLogo/kasaLogoNavbar.png';
import LetterS from '../assets/navbarLogo/letterSNavbar.png';
import LetterA from '../assets/navbarLogo/letterANavbar.png';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <header>
      <div id="headerLogo">
        <img src={LetterK} alt="K" className="imageMarginSmall logoNavbarTall" />
        <img src={KasaLogo} alt="A" className="imageMarginTall logoNavbarSmall" />
        <img src={LetterS} alt="S" className="imageMarginTall logoNavbarSmall" />
        <img src={LetterA} alt="A" className="logoNavbarSmall" />
      </div>
      <nav id="navigationButton">
        <div className="linkButtonContainer">
          <NavLink exact to="/" id="linkButton" activeClassName="activeLink">Accueil</NavLink>
        </div>
        <div className="linkButtonContainer">
          <NavLink to="/aPropos" id="linkButton" activeClassName="activeLink">A propos</NavLink>
        </div>
      </nav>
    </header>
  );
}
