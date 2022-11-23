import { joinPaths } from "@remix-run/router";
import React, { Component } from "react";
import classes from "./PokeSingle.module.css";

class PokeSingle extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
        });
      });
  }
  render() {
    console.log(this.props.params.pokesingle); // pokesingle word taken from PokeSingle Route in App.js
    if (this.state.isLoading) {
      return <p>Getting details...</p>;
    }
    return (
      <div>
        <h3 className={classes.pokesingle_header}>{this.state.data.name}</h3>
        <div className={classes.pokesingle_details}>
          <img
            src={this.state.data.sprites?.other.home.front_default}
            alt={this.state.data.name}
          ></img>
          <table className={classes.pokesingle_table}>
            <thead>
              <tr>
                <th>Features</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Height</td>
                <td>{this.state.data.height / 10} Meter</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{this.state.data.weight / 10} Kg</td>
              </tr>

              <tr>
                <td>Types</td>
                <td></td>
              </tr>
              <tr>
                <td>Moves</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PokeSingle;
