import React from "react";
import "./Body.css";
import "../../images/memphis-colorful.png";

const Body = props => (
<div className="body">{props.children}</div>
);

export default Body;