import React, { useState } from 'react';
import Mountains from '../assets/pictures/mountains.png';
import '../styles/APropos.css';

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
      </section>

      <section id="aProposSection">
        <div className="aProposContainer1">
          <div className="aProposContainer2">
            <div className="aProposTitle">Fiabilité</div>
            <div
              className={`boutonDeroulant ${textVisibility.button1 ? 'rotate-animation' : ''}`}
              id="button1"
              onClick={() => toggleText('button1')}
            >
              <i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i>
            </div>
          </div>
          <div className={`aProposText ${textVisibility.button1 ? 'expand' : ''}`}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
          </div>
        </div>
      </section>

      <section id="aProposSection">
        <div className="aProposContainer1">
          <div className="aProposContainer2">
            <div className="aProposTitle">Respect</div>
            <div
              className={`boutonDeroulant ${textVisibility.button2 ? 'rotate-animation' : ''}`}
              id="button2"
              onClick={() => toggleText('button2')}
            >
              <i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i>
            </div>
          </div>
          <div className={`aProposText ${textVisibility.button2 ? 'expand' : ''}`}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.        </div>
        </div>
      </section>

      <section id="aProposSection">
        <div className="aProposContainer1">
          <div className="aProposContainer2">
            <div className="aProposTitle">Service</div>
            <div
              className={`boutonDeroulant ${textVisibility.button3 ? 'rotate-animation' : ''}`}
              id="button3"
              onClick={() => toggleText('button3')}
            >
              <i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i>
            </div>
          </div>
          <div className={`aProposText ${textVisibility.button3 ? 'expand' : ''}`}>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </div>
        </div>
      </section>

      <section id="aProposSection">
        <div className="aProposContainer1">
          <div className="aProposContainer2">
            <div className="aProposTitle">Sécurité</div>
            <div
              className={`boutonDeroulant ${textVisibility.button4 ? 'rotate-animation' : ''}`}
              id="button4"
              onClick={() => toggleText('button4')}
            >
              <i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i>
            </div>
          </div>
          <div className={`aProposText ${textVisibility.button4 ? 'expand' : ''}`}>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        </div>
      </section>

    </main>
  );
}