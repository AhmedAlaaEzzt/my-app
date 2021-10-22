import React, { Component } from "react";

class Form extends Component {
    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(`Event: from submit`);
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input type="text" placeholder="User name" required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;
