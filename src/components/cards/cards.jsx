import React from "react";
import "./cards.css"

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.weapon} />
        <div className="card-body" onClick={() => props.Count(props.id)} />
      </div>
    </div>
  );
}

export default Cards;
