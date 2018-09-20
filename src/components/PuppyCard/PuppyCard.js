import React from "react";
import "./PuppyCard.css";

const PuppyCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <p>
          <strong>Name:</strong> {props.name}
      </p>
    </div>
    <span onClick={() => props.clickPuppy(props)} className="clicked">
      𝘅
    </span>
  </div>
);

export default PuppyCard;
