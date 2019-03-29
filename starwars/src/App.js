import React, { Component } from "react";
import "./App.css";
import DisplayChars from "./components/DisplayChars";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: "",
      prev: ""
    };
  }

  // calls an open source API and saves the results of that API on state
  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          starwarsChars: data.results,
          next: data.next,
          prev: data.previous
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    let button1;
    let button2;
    if (this.state.prev !== null) {
      button1 = <button onClick={() => this.getCharacters(this.state.prev)}>Previous Page</button>;
    }

    if (this.state.next !== null) {
      button2 = <button onClick={() => this.getCharacters(this.state.next)}>Next Page</button>; 
       } 
    return (
      <div className="App">
        <div className="Header">
          <h1>React Wars</h1>
          <div className="pagination">
            {button1}{button2}
          </div>
        </div>
        <section className="character-list">
          <DisplayChars starwarsChars={this.state.starwarsChars} />
        </section>
      </div>
    );
  }
}

export default App;
