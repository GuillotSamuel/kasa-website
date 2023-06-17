import React, { useState } from 'react';
import '../styles/general.css';

export default function Dropdown({ title, text }) {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="dropdownContainer">
      <div className="dropdownBar" onClick={toggleTextVisibility}>
        <h3 className="dropdownTitle">{title}</h3>
        <button className={`dropdownButton ${isTextVisible ? 'rotate-animation' : ''}`} >
          <i className="fa-solid fa-angle-right fa-rotate-270 fa-xl"></i>
        </button>
      </div>
      {isTextVisible && <div className="dropdownText">{text}</div>}
    </div>
  );
}
