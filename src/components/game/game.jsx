import React, { Component } from "react";
import gameData from "../../data.json";

let score = 0;
let highscore = 0;

class Game extends Component {
  state = {
    gameData,
    score,
    highscore
  };

  displayCards = () => {
    let randomArr = [];
    
  };

  handleIncrement = () => {

  };

  gameOver = () => {

  };

  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={this.gameData.image}
            alt={this.gameOver.weapon}
          />
          <div />
        </div>
      </div>
    );
  }
}

export default Game;
