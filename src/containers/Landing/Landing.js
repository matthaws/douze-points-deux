import React, { Fragment } from "react";
import Auth from "components/Auth";
import netta from "assets/netta.png";
import "./Landing.css";

export default () => (
  <div className="landingPage">
    <h1 className="logo">Douze Points!</h1>
    <Auth />
    <div className="splashImage">
      <img src={netta} alt="Netta" />
    </div>
  </div>
);
