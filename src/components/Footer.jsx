import React from 'react'
import LetterK from '../assets/footerLogo/letterKFooter.png'
import KasaLogo from '../assets/footerLogo/kasaLogoFooter.png'
import LetterS from '../assets/footerLogo/letterSFooter.png'
import LetterA from '../assets/footerLogo/letterAFooter.png'

export default function Footer() {
  return (
    <footer>
      <div id="footerLogo">
        <img src={LetterK} alt="K" />
        <img src={KasaLogo} alt="A" />
        <img src={LetterS} alt="S" />
        <img src={LetterA} alt="A" />
      </div>
      <div id="copyright">© 2020 Kasa. All rights reserved</div>
    </footer>
  )
}
