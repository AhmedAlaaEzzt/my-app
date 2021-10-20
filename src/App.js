import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Result from "./components/Result";

class App extends Component {
  constructor(props){
    super(props);
    this.state = { counter: 0 };
  }
  incrementCounter = (incrementValue) => this.setState((pervState) => ({ counter: pervState.counter + incrementValue }));
  render() {
    return (
      <div className="App">
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
