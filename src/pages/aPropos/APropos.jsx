import React from 'react'
import Mountains from './background/mountains.png'

export default function APropos() {
  return (
    <main>
      <section id="aProposPicture">
        <img src={Mountains} alt="Mountains landscape" />
      </section>
      <section>
        <div>Fiabilité</div>
        <div>Respect</div>
        <div>Service</div>
        <div>Sécurité</div>
      </section>
    </main>
  )
}
