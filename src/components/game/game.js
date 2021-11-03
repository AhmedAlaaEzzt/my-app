import React, { Component } from "react";
import Stars from "../stars/stars.js";
import Button from "../button/button.js";
import Answer from "../answer/answer.js";
import Numbers from "../numbers/numbers.js";

class Game extends Component {
  static randomNumber = () => Math.trunc(Math.random() * 9) + 1;

  state = {
    selectedNumbers: [],
    usedNumbers: [],
    numberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    redraws: 5
  };

  redraw = () => {
    if (this.state.redraws === 0) return;
    this.setState(prevState => ({
      numberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: prevState.redraws - 1
    }));
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfStars: Game.randomNumber()
    }));
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect:
        prevState.numberOfStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };
  selectNumber = number => {
    if (this.state.selectedNumbers.indexOf(number) >= 0) {
      return;
    }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(number)
    }));
  };

  unSelectNumber = clickedNumber => {
    this.setState(prevState => ({
      answerIsCorrect: null,
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
          <Button
            checkAnswer={this.checkAnswer}
            acceptAnswer={this.acceptAnswer}
            answerIsCorrect={this.state.answerIsCorrect}
            selectedNumbers={this.state.selectedNumbers}
            redraw={this.redraw}
            redraws={this.state.redraws}
          />
          <Answer
            unSelectNumber={this.unSelectNumber}
            selectedNumbers={this.state.selectedNumbers}
          />
        </div>
        <br />
        <Numbers
          selectedNumbers={this.state.selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={this.state.usedNumbers}
        />
      </div>
    );
  }
}
export default Game;
