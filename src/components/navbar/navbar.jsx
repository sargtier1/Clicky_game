import React, { Component } from "react";
import Footer from "../footer/footer";
import Game from "../game/game";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Click Guessing Game</span>
        <div className="score-card">Current Score: {this.score}</div>
        <div className="high-score">Best Score: {this.highScore}</div>
      </nav>
    );
  }
}

export default Navbar;
