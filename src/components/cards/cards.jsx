import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          src={props.image}
          alt={props.weapon}
          id={props.id}
          onClick={props.onClick}
        />
      </div>
    </div>
  );
}

export default Cards;
