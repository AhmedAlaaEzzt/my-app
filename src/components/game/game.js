import React, { Component } from "react";
import Stars from "../stars/stars.js";
import Button from "../button/button.js";
import Answer from "../answer/answer.js";
import Numbers from "../numbers/numbers.js";

class Game extends Component {
  state = {
    selectedNumbers: [],
    numberOfStars: Math.trunc(Math.random() * 9) + 1
  };

  selectNumber = number => {
    if (this.state.selectedNumbers.indexOf(number) >= 0) {
      return;
    }
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.concat(number)
    }));
  };

  unSelectNumber = clickedNumber => {
    this.setState(prevState => ({
      selectedNumbers: prevState.selectedNumbers.filter(
        number => number !== clickedNumber
      )
    }));
  };
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={this.state.numberOfStars} />
          <Button />
          <Answer
            unSelectNumber={this.unSelectNumber}
            selectedNumbers={this.state.selectedNumbers}
          />
        </div>
        <br />
        <Numbers
          selectedNumbers={this.state.selectedNumbers}
          selectNumber={this.selectNumber}
        />
      </div>
    );
  }
}
export default Game;
