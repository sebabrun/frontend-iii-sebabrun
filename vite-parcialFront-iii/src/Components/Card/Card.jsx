import React from "react";
import './Card.css'

const Card = ({ name, auto }) => {
  return (
    <div className="card-container">
      <div>Hola {name}, tu auto favorito es {auto}</div>
    </div>
  );
};

export default Card;