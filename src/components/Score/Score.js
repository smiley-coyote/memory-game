import React from "react";
import "./Score.css";

const Score = props => (
  <div className="header">
  <h3 className="results">{props.results}</h3>
  <h4 className="score">{props.children}</h4>
  </div>
)

export default Score;