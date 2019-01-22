import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Game from "./components/game/game";

class App extends Component {
  state = {
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
