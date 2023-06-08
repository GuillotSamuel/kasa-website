import React from 'react'
import '../styles/FicheLogement.css'
import Logements from '../assets/datas/logements.json';

export default function FicheLogement() {

const logementId = 'c67ab8a7';


const logementTrouve = Logements.find(obj => obj.id === logementId);
const hostTrouve = logementTrouve.host;

  return (
    <div>

{logementTrouve.pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`Image ${index + 1}`} />
      ))}      <div id="firstContainer">
        <h1 id="logementTitle-2">{logementTrouve.title}</h1>
        <h2 id="logementLocation">{hostTrouve.location}</h2>
        <div className="logementTags">{hostTrouve.tags}</div>
      </div>
      <div id="secondContainer">
        <div id="hostContainer">
          <div id="hostName">{hostTrouve.name}</div>
          <img src={hostTrouve.picture} alt="Photo de l'host"></img>
        </div>
        <div id="ratingContainer">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
      <div className="informationsContainer">
        <div id="descriptionContainer">
          <h3 id="logementDescritionTitle">Descrition</h3>
          <div id="logementDescription">{logementTrouve.description}</div>
        </div>
        <div id="equipementsContainer">
          <h3 id="logementEquipementsTitle">Équipements</h3>
          <div id="logementEquipements">{logementTrouve.equipments}</div>
        </div>
      </div>
    </div>
  );
}
