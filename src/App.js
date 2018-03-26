import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import Card from "./components/Card";
import cards from "./cards.json";

class App extends Component {

  state = {
    cards,
    count: 0,
    highScore: 0,
    guessed: [],
    message: "Click a card to begin "
  }

  handleClick = id => {
    const guessed = this.state.guessed;
    if (guessed.indexOf(id) === -1) {
      guessed.push(id);
      this.setState({count: this.state.count + 1});
      this.setState({message: "Good Guess!"});
      if(this.state.count >= this.state.highScore) {
        this.setState({highScore: this.state.count + 1});
      }
      this.setState({guessed: guessed});
      const shuffled = cards.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        this.setState({ cards: shuffled });

    }
    else{
      this.setState({message: "You should play more memory training games! better luck next time!"});
      this.setState({count: 0});
      this.setState({guessed: []});
    }
    if (this.state.count === 12) {
      this.setState({message: "Congratulations! You won't win a second time"});
      this.setState({count: 0});
      this.setState({guessed: []});
    }
  }




  render() {
    return (
      <div >
        <Nav 
          message = {this.state.message}
          score = {this.state.count}
          highScore = {this.state.highScore}
        />
        <h3>Rules: click on a card, don't click on the same one twice or you'll loose</h3>
        {this.state.cards.map(card => (
            <Card 
              onClick = {this.handleClick}
              id = {card.id}
              img = {card.image}
              picked = {card.picked}
            />

          ))}
        <footer className="footer">
          <img src={logo} className="App-logo" alt="logo" />
        </footer>
      </div>
    );
  }
}

export default App;
