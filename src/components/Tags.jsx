import React from 'react';
import '../styles/general.css';
import Logements from '../assets/datas/logements.json';
import { useParams } from 'react-router-dom'


export default function Tags() {

let { id } = useParams();
const logementId = id;
const logementTrouve = Logements.find(obj => obj.id === logementId);



return (
        <ul id="tagsList">
            {logementTrouve.tags.map((tag, index) => (
            <li className="tagContainer" key={index}>
                <div className='logementTags'>
                    {tag}
                </div>
            </li>
            ))}      
        </ul>
  );
}