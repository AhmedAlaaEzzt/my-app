import React from "react";
import "./numbers.css";
import { range } from "lodash";
const Numbers = function(props) {
  const NumberList = range(1, 10);
  return (
    <div className="card text-center">
      <div>
        {NumberList.map((number, i) => (
          <span onClick={() => props.selectNumber(number)} key={i}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
