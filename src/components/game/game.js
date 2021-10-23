import React, { Component } from "react";
import Stars from "../stars/stars.js";
import Button from "../button/button.js";
import Answer from "../answer/answer.js";

class Game extends Component {
  render() {
    return (
      <div>
        <h3>Play Nine</h3>
        <Stars />
        <Button />
        <Answer />
      </div>
    );
  }
}
export default Game;
