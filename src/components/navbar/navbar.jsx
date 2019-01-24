import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Click Guessing Game</span>
    <div className="current-score">Current Score: {props.score}</div>
    <div className="high-score">Best Score: {props.highScore}</div>
  </nav>
);

export default Navbar;
