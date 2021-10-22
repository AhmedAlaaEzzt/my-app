import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="User name" required />
        <button type="submit">Add card</button>
      </form>
    );
  }
}

export default Form;
