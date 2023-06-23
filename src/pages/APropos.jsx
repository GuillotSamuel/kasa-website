import React, { useState } from 'react';
import Mountains from '../assets/pictures/mountains.png';
import '../styles/APropos.css';
import Dropdown from '../components/Dropdown';

export default function APropos() {
  
  const [textVisibility, setTextVisibility] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false
  });

  const toggleText = (buttonId) => {
    setTextVisibility((prevVisibility) => ({
      ...prevVisibility,
      [buttonId]: !prevVisibility[buttonId]
    }));
  };

  return (
    <main>
      <section id="imageSection" className="supperpositionContainer">
        <img src={Mountains} alt="Mountains landscape" className="sectionIllustration" />
        <div className="illustrationOverlay"></div>
      </section>
      <div id="aProposSection">
        <Dropdown title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
        <Dropdown title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Dropdown title="Service" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
        <Dropdown title="Sécurité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
      </div>
      
    </main>
  );
}