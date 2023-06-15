import React from 'react'
import '../styles/FicheLogement.css'
import Logements from '../assets/datas/logements.json';
import { useParams } from 'react-router-dom';
import Dropdown from '../components/Dropdown.jsx'

export default function FicheLogement() {

/* Récupération de l'id du logement dans le router */
let { id } = useParams();
const logementId = id;
/* Récupération des données dans le JSON */
const logementTrouve = Logements.find(obj => obj.id === logementId);
const hostTrouve = logementTrouve.host;

  return (
    <div>
      <div className='logementCarrousel'>
        <button className="carrouselButton previous"><i className="fa-solid fa-angle-right fa-rotate-180"></i></button>
        <button className="carrouselButton next"><i className="fa-solid fa-angle-right"></i></button>
        <ul>
        {logementTrouve.pictures.map((picture, index) => (
          <li className="logementSlide">
            <img key={index} src={picture} alt={`Image ${index + 1}`} className={`carrouselImage #${index + 1}`}/>

          </li>
        ))}      
        </ul>
      </div>
     
      <div id="mainLogementContainer">
        <div id="firstLogementContainer">
          <h1 id="logementTitle-2">{logementTrouve.title}</h1>
          <h2 id="logementLocation">{logementTrouve.location}</h2>
          <div className="logementTags">{logementTrouve.tags}</div>
        </div>
        <div id="secondLogementContainer">
          <div id="hostContainer">
            <h2 id="hostName">{hostTrouve.name}</h2>
            <img src={hostTrouve.picture} alt="Photo de l'host" id="hostPicture"></img>
          </div>
          <div id="ratingContainer">
            <i className="fa-solid fa-star stars" id="star1"></i>
            <i className="fa-solid fa-star stars" id="star2"></i>
            <i className="fa-solid fa-star stars" id="star3"></i>
            <i className="fa-solid fa-star stars" id="star4"></i>
            <i className="fa-solid fa-star stars" id="star5"></i>
          </div>
        </div>
      </div>

      <div id="informationsContainer">
        <Dropdown title="Description" text={logementTrouve.description}/>
        <Dropdown title="Équipements" text={logementTrouve.equipments}/>
      </div>
    </div>
  );
}
