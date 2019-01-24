import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Game from "./components/game/game";
import Cards from "./components/cards/cards";
import gameData from "./gameData.json";

let score = 0;
let highScore = 0;

class App extends Component {
  state = {
    gameData,
    score,
    highScore,
    alreadyClicked: []
  };

  // counter function. will use this to verify if an image as already been clicked
  Count = id => {
 
  };

  render() {
    return (
     
      <Game>
         <Navbar/>
        {this.state.gameData.map(gameData => (
          <Cards
            key = {this.id}
            id = {this.id}
            weapon = {this.weapon}
            image = {this.image}
          />
        ))}
        <Footer/>
      </Game>
    );
  }
}

export default App;
