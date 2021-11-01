import React from "react";
const Answer = function(props) {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => (
        <span onClick={() => props.unSelectNumber(number)} key={i}>
          {number}
        </span>
      ))}
    </div>
  );
};

export default Answer;
