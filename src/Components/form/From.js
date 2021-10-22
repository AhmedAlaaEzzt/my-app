import React, { Component } from "react";

class Form extends Component {
  state = { userName: "" };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Event: from submit ${this.state.userName}`);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        value={this.state.userName}
        onChange={(event)=> this.setState({userName: event.target.value})}
        type="text" placeholder="User name" required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;
