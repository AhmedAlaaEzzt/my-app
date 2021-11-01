import React from "react";

const Button = function(props) {
  return (
    <div className="col-2">
      <button
        className="btn-primary"
        disabled={props.selectedNumbers.length === 0}
      >
        =
      </button>
    </div>
  );
};

export default Button;
