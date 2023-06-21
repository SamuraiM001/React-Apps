import React from "react";
import { Link } from 'react-router-dom';
import "./App.css"
const CardList = ({ cards }) => {
  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.name} />
          <div className="card-details">
            <h3>{card.name}</h3>
            <p>Qiymət: {card.price} AZN</p>
          </div>
          <button className="card-button">Al</button>
        </div>
      ))}
    </>
  );
};

export default CardList;
