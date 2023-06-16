import React from 'react';
import '../styles/general.css';
import Logements from '../assets/datas/logements.json';
import { useParams } from 'react-router-dom'


export default function Caroussel() {

let { id } = useParams();
const logementId = id;
const logementTrouve = Logements.find(obj => obj.id === logementId);



return (
    <div id="carouselContainer">
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
  );
}