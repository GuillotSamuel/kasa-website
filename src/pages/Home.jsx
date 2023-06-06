import React from 'react'
import Coast from '../assets/pictures/coast.png'
import '../styles/Home.css'

export default function Home() {
  return (
    <main>
      <section id="sloganSection">
        <h1 id="homeTitle">Chez vous, partout et ailleurs</h1>
        <img src={Coast} alt="Coast landscape" class="sectionIllustration"/>
        <div ></div>
      </section>
      <section id="rentalCardsSection">
        
      </section>
    </main>
  )
}
