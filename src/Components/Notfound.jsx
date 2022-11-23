import React from "react";
import { Link } from "react-router-dom";
import "./Notfound.css";

const Notfound = () => {
  return (
    <div>
      <h1>ERROR 404</h1>
      <p>Page not found!</p>
      <p>Where do you want to go?</p>
      <div className="redirect-links">
        <Link to="/">Home</Link>
        <Link to="/pokemons">Pokemons</Link>
      </div>
    </div>
  );
};

export default Notfound;
