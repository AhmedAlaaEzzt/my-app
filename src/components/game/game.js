import React, { Component } from "react";
import Stars from "../stars/stars.js";
import Button from "../button/button.js";
import Answer from "../answer/answer.js";
import Numbers from "../numbers/numbers.js";
import DoneFrame from "../done-frame/done-frame.js";
import { range } from "lodash";
import { possibleCombinationSum } from "./game-helper.js";
class Game extends Component {
  static randomNumber = () => Math.trunc(Math.random() * 9) + 1;

  state = {
    selectedNumbers: [],
    usedNumbers: [],
    numberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    redraws: 5,
    doneStatus: null
  };

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: "Done. Nice!" };
      } else if (
        prevState.redraws === 0 &&
        !this.possibleSolutions(prevState)
      ) {
        return { doneStatus: "Game Over!" };
      }
    });
  };

  possibleSolutions = ({ numberOfStars, usedNumbers }) => {
    const possibleNumbers = range(1, 10).filter(
      number => usedNumbers.indexOf(number) === -1
    );

    return possibleCombinationSum(possibleNumbers, numberOfStars);
  };

  redraw = () => {
    if (this.state.redraws === 0) return;
    this.setState(
      prevState => ({
        numberOfStars: Game.randomNumber(),
        answerIsCorrect: null,
        selectedNumbers: [],
        redraws: prevState.redraws - 1
      }),
      this.updateDoneStatus
    );
  };

  acceptAnswer = () => {
    this.setState(
      prevState => ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        selectedNumbers: [],
        answerIsCorrect: null,
        numberOfStars: Game.randomNumber()
      }),
      this.updateDoneStatus
    );
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
    const {
      numberOfStars,
      answerIsCorrect,
      selectedNumbers,
      usedNumbers,
      redraws,
      doneStatus
    } = this.state;
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars numberOfStars={numberOfStars} />
          <Button
            checkAnswer={this.checkAnswer}
            acceptAnswer={this.acceptAnswer}
            answerIsCorrect={answerIsCorrect}
            selectedNumbers={selectedNumbers}
            redraw={this.redraw}
            redraws={redraws}
          />
          <Answer
            unSelectNumber={this.unSelectNumber}
            selectedNumbers={selectedNumbers}
          />
        </div>
        <br />
        {doneStatus ? (
          <DoneFrame doneStatus={doneStatus} />
        ) : (
          <Numbers
            selectedNumbers={selectedNumbers}
            selectNumber={this.selectNumber}
            usedNumbers={usedNumbers}
          />
        )}
      </div>
    );
  }
}
export default Game;
