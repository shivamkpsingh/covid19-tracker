import React from "react";
import "./DetailsContainer.css";
const DetailsContainer = ({para,heading,details}) => {
  return (
    <div className="DetailsContainer">
      <div className="DetailsContainer__item">
        <div className="DetailsContainer__firstline">
          <p className="DetailsContainer__para">{para}</p>
          <h2>{heading}</h2>
        </div>
        <h1>{details}</h1>
      </div>
    </div>
  );
};

export default DetailsContainer;
