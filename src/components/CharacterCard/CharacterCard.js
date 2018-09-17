import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <p>
          <strong>Name:</strong> {props.name}
      </p>
    </div>
    <span onClick={() => props.clickCharacter(props.id)} className="clicked">
      𝘅
    </span>
  </div>
);

export default CharacterCard;
