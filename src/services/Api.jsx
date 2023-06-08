import React from 'react';
import {Link} from "react-router-dom"
import Logements from '../assets/datas/logements.json';
import '../styles/Home.css'

export default function Api() {
  return (
    <div id="logementGrid">
      {Logements.map((logement) => {
        return (
            
            <div className="logementCard" key={logement.id}>
                <Link to={`/ficheLogement/${logement.id}`}>
                    <img src={logement.cover} alt={logement.title} className="logementImage" />
                    <div className='logementOverlay'></div>
                    <h2 className="logementTitle">{logement.title}</h2>
                </Link>
            </div>
            
        );
      })}
    </div>
  );
}