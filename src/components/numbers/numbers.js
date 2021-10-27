import React from "react";
import "./numbers.css";
import { range } from "lodash";
const Numbers = function () {
  const numberList = range(1,10)

  return (
    <div className="card text-center">
      <div>
        {numberList.map((number, i) => (
          <span key={i}>{number}</span>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
