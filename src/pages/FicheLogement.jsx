import React from 'react'
import '../styles/FicheLogement.css'
import Logements from '../assets/datas/logements.json'
import { useParams } from 'react-router-dom'
import Dropdown from '../components/Dropdown.jsx'
import Stars from '../components/Stars.jsx'
import Caroussel from '../components/Caroussel.jsx'
import Tags from '../components/Tags.jsx'
import Equipements from '../components/Equipements.jsx'

export default function FicheLogement() {

/* Récupération de l'id du logement dans le router */
let { id } = useParams();
const logementId = id;
/* Récupération des données dans le JSON */
const logementTrouve = Logements.find(obj => obj.id === logementId);
const hostTrouve = logementTrouve.host;

return (
    <div>

      <Caroussel />
     
      <div id="mainLogementContainer">
        <div id="firstLogementContainer">
          <h1 id="logementTitle-2">{logementTrouve.title}</h1>
          <h2 id="logementLocation">{logementTrouve.location}</h2>
          <Tags />
        </div>
        <div id="secondLogementContainer">
          <div id="hostContainer">
            <h2 id="hostName">{hostTrouve.name}</h2>
            <img src={hostTrouve.picture} alt="Photo de l'host" id="hostPicture"></img>
          </div>
          <Stars rating={logementTrouve.rating}/>
        </div>
      </div>

      <div id="informationsContainer">
        <Dropdown title="Description" text={logementTrouve.description}/>
        <Dropdown title="Équipements" text={<Equipements />}/>
      </div>
    </div>
  );
}
