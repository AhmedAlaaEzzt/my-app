import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "./stars.css";
const Stars = function() {
  const numberOfStars = Math.trunc(Math.random() * 9) + 1;
  let stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<i key={i} className="fa fa-star" aria-hidden="true" />);
  }
  return <div className="col-5">{stars}</div>;
};

export default Stars;
