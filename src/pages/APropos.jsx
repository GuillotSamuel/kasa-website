import React from 'react'
import Mountains from '../assets/pictures/mountains.png'
import '../styles/APropos.css'

export default function APropos() {
  return (
    <main>
      <section id="imageSection" className="supperpositionContainer">
        <img src={Mountains} alt="Mountains landscape" className="sectionIllustration"/>
      </section>
      <section id="aProposSection">
        <div className="aProposContainer">
          <div className="aProposTitle">Fiabilité</div>
          <div className="boutonDeroulant"><i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i></div>
        </div>
        <div>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
        <div className="aProposContainer">
          <div className="aProposTitle">Respect</div>
          <div className="boutonDeroulant"><i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i></div>
        </div>
        <div>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        <div className="aProposContainer">
          <div className="aProposTitle">Service</div>
          <div className="boutonDeroulant"><i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i></div>
        </div>
        <div>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
        <div className="aProposContainer">
          <div className="aProposTitle">Sécurité</div>
          <div className="boutonDeroulant"><i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i></div>
        </div>
        <div>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div>
      </section>
    </main>
  )
}
