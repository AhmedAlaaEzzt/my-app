import React, { Component } from "react";
import Stars from "../stars/stars.js";
import Button from "../button/button.js";
import Answer from "../answer/answer.js";
import Numbers from "../numbers/numbers.js";

class Game extends Component {
  state = { selectedNumbers: [] };

  selectNumber = number => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(number)
    }));
  };

  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer selectedNumbers={this.state.selectedNumbers} />
        </div>
        <br />
        <Numbers selectNumber={this.selectNumber} />
      </div>
    );
  }
}
export default Game;
