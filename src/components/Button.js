import React, { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  clickHandler = () => this.setState((pervState) => ({ counter: pervState.counter + 1 }));
  render() {
    return <button onClick={this.clickHandler}>{this.state.counter}</button>;
  }
}

export default Button;
