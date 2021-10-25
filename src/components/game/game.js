import React, { Component } from "react";
import Stars from "../stars/stars.js";
import Button from "../button/button.js";
import Answer from "../answer/answer.js";
import Numbers from "../numbers/numbers.js";

class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}
export default Game;
