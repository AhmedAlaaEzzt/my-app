import React from "react";
import "./numbers.css";
import { range } from "lodash";
const Numbers = function(props) {
  const NumberList = range(1, 10);

  const numberClassName = number => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  };

  return (
    <div className="card text-center">
      <div>
        {NumberList.map((number, i) => (
          <span
            className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}
            key={i}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
