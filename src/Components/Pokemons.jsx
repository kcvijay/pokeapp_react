import React, { Component } from "react";
import Card from "./Card";
import classes from "./Pokemons.module.css";

class Pokemons extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
      .then((res) => res.json())
      .then((data) => {
        const fetches = data.results.map((poke) => {
          return fetch(poke.url).then((res) => res.json());
        });

        Promise.all(fetches).then((res) => {
          this.setState({
            data: res,
            isLoading: false,
          });
        });
      })
      .catch((err) => {
        return err.message;
      });
  }

  render() {
    console.log(this.state.data);
    if (this.state.isLoading) {
      return <p>Getting Pokemons...</p>;
    }
    return (
      <div>
        <h1>Pokemons</h1>
        <div className={classes.cards}>
          {this.state.data.map((card) => {
            return (
              <Card
                key={card.name}
                id={card.id}
                name={card.name}
                image={card.sprites.other.home.front_default}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokemons;
