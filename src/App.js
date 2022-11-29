import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Components/Home";
import Pokemons from "./Components/Pokemons";
import About from "./Components/About";
import PokeSingle from "./Components/PokeSingle";
import Notfound from "./Components/Notfound";

import "./App.css";
// Higher Order function for individual detail page because Class component cannot use params.
const RouterWrapper = (props) => {
  const params = useParams();
  return <PokeSingle params={params} {...props} />;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pokemons" element={<Pokemons />} />
            <Route path="pokemons/:pokesingle" element={<RouterWrapper />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
