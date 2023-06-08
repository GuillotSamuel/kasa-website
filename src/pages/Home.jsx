import React from 'react'
import Coast from '../assets/pictures/coast.png'
import '../styles/Home.css'
import Api from '../services/Api'

export default function Home() {
  return (
    <main>
      <section id="sloganSection" className="supperpositionContainer">
        <h1 id="homeTitle" className="titleOverlay">Chez vous, partout et ailleurs</h1>
        <img src={Coast} alt="Coast landscape" className="sectionIllustration"/>
        <div className="illustrationOverlay"></div>
      </section>
      <section id="rentalCardsSection">
        <Api />
      </section>
    </main>
  )
}
