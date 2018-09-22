import React from "react";
import "./Banner.css";

const Banner = props => (
  <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4">There's been a puppy flu outbreak!</h1>
    <p className="lead">Administer one shot of medicine to each puppy to treat the flu, but only once!</p>
    <p>{props.children}</p>
  </div>
</div>
);

export default Banner;