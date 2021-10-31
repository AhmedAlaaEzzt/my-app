import React from "react";
const Answer = function(props) {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => (
        <span key={i}>{number}</span>
      ))}
    </div>
  );
};

export default Answer;
