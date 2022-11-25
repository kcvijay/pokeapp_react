import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <p className="poke-id">{props.id}</p>
      <img className="poke-img" src={props.image} alt={props.name}></img>
      <h2 className="pokemon-name">
        {props.name}
        <span className="tooltip-detail">
          <Link to={`${props.name}`}>More Details</Link>
        </span>
      </h2>
    </div>
  );
};

export default Card;
