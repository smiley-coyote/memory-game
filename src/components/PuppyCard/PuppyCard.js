import React from "react";
import "./PuppyCard.css";
import "../../images/syringe.png"

const PuppyCard = props => (
  <span onClick={() => props.clickPuppy(props.id)} className="clicked">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p>
          <strong>Name:</strong> {props.name}
        </p>
      </div>
    </div>
  </span>
);

export default PuppyCard;
