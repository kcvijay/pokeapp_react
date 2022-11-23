import React from "react";
import { Link } from "react-router-dom";
import PikachuImg from "../Assets/pikachu.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1 className="home-header">PokeApp</h1>
      <img className="pikachu-img" src={PikachuImg} alt="pikachu-img"></img>
      <p>Find your favorite Pokemons</p>
      <Link id="to-pokemons" to="/pokemons">
        Browse
      </Link>
    </div>
  );
};

export default Home;
