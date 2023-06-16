import React from 'react'
import '../styles/general.css'
import Logements from '../assets/datas/logements.json'
import { useParams } from 'react-router-dom'

export default function Tags() {

let { id } = useParams();
const logementId = id;
const logementTrouve = Logements.find(obj => obj.id === logementId);

return (
    <div id="equipementsContainer">
        <ul id='equipementsListe'>
            {logementTrouve.equipments.map((equipment, index) => (
            <li className="equipment" key={index}>
            {equipment}
            </li>
            ))}      
        </ul>
    </div>
  );
}