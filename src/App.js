import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Result from "./components/Result";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 };
  }
  incrementCounter = () => this.setState((pervState) => ({ counter: pervState.counter + 1 }));
  render() {
    return (
      <div className="App">
        <Button onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
