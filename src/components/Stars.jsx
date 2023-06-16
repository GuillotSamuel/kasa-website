import React from 'react';
import '../styles/general.css';

export default function Dropdown({ rating }) {
  const getStarColor = (starIndex) => {
    if (starIndex <= rating) {
      return 'redStar';
    } else {
      return 'grayStar';
    }
  };

  return (
    <div id="ratingContainer">
      <i className={`fa-solid fa-star stars ${getStarColor(1)}`} id="star1"></i>
      <i className={`fa-solid fa-star stars ${getStarColor(2)}`} id="star2"></i>
      <i className={`fa-solid fa-star stars ${getStarColor(3)}`} id="star3"></i>
      <i className={`fa-solid fa-star stars ${getStarColor(4)}`} id="star4"></i>
      <i className={`fa-solid fa-star stars ${getStarColor(5)}`} id="star5"></i>
    </div>
  );
}
