import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Game from "./components/game/game";
import Cards from "./components/cards/cards";
import data from "./gameData.json";

class App extends Component {
  state = {
    data,
    score: 0,
    highScore: 0,
    Clicked: []
  };

  // this.setState({
  //   data: this.state.data.sort((a, b) => {
  //     return 0.5 - Math.random();
  //   }),

  handleOnClick = event => {
    const id = event.target.id;

    if (this.state.Clicked.includes(id)) {
        this.setState({
        data: this.state.data.sort((a,b) => {
          return 0.5 - Math.random();
        }),
        Clicked: [],
        score: 0
      })
      alert("This image has already been clicked")
    } else {
      this.setState ({
        data: this.state.data.sort((a,b) => {
          return 0.5 - Math.random();
        }),
        Clicked: this.state.Clicked.concat([id]),
        score: this.state.score + 1,
      })
      console.log(this.state.score + 1);
      if (this.state.score > this.state.highScore) {
        this.setState({
          highScore: this.state.score
        })
      }
    }
  };

  render() {
    return (
      <div>
        <div>
          <Navbar 
            score={this.state.score}
            highScore={this.state.highScore}
            />
          <Game>
            {this.state.data.map(data => (
              <Cards
                key={data.id}
                id={data.id}
                weapon={data.weapon}
                image={data.image}
                onClick={this.handleOnClick}
              />
            ))}
          </Game>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
