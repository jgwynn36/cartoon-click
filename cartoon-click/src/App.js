import React , {Component } from 'react';
import Card from "./components/Card"; 
import Wrapper from "./components/Wrapper"; 
import cartoons from "./cartoon.json"; 
import './App.css';

class App extends Component {
  //Setting this.state.cartoons to cartoon json
  state = { 
    cartoons, 
    clickedArray: [], 
    topScore: 0,
    score: 0, 
    message: "", 
    scramble: "false"
  };
  
  clickCartoon = id => { 
    let shuffle = this.shuffle(cartoons); 
    this.setState({cartoons: shuffle}); 
    if(this.state.clickedArray.includes(id)) {
      this.setState({ score:0, clickedArray: [], message: "I am Sorry that is Incorrect !! Please click an image to try again",scramble:"true"});
    } 
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]), 
        score: this.state.score + 1, 
        message: "Congratulations you are Correct !!", 
        scramble: "false"
      }); 
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score }); 
    }
    shuffle = (picturesArray) => {
      for (let i = picturesArray.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]]; 
      }
      return picturesArray; 
    }; 
  }
    render() {
      return (
        <div>
          <header className="App-header">
            <h1 className="App-title">Cartoon Clicky Game!!</h1>
            <h4 className="App-Intro">
              <strong>
                Click on an image to receive point, but do not click it
                twice or you will lose
              </strong>
              <p className="score">
                <strong>
                  Score: {this.state.score} | TopScore:{" "}
                  {this.state.topScore}
                </strong>
              </p>
              <p className="message">{this.state.message}</p>
            </h4>
          </header>
          <Wrapper
            shakeWrapper={this.state.shakeit}
            cartoons={this.state.cartoons.map(cartoon => (
              <Card>
                clickCartoon={this.clickCartoon}
                id={cartoon.id}
                key={cartoon.id}
                name={cartoon.name}
                image={cartoon.image}
              </Card>
            ))}
          />
          <footer className="footer">
            <div className="container">
              <span className="text-muted">
                J Gwynn Cartoon Clicky Game - React app - &copy; 2019
              </span>
            </div>
          </footer>
        </div>
      );
      }
    }

export default App;
