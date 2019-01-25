import React from "react";

const Navbar = props => (
  <nav className="navbar navbar-light bg-light">
    <span className="navbar-brand mb-0 h1">Click Guessing Game</span>
    <span className="current-score">Current Score: {props.score}</span>
    <span className="high-score">Best Score: {props.highScore}</span>
  </nav>
);

export default Navbar;
