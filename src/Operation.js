import React from "react";
import Amount from "./Amount";

class Operation extends React.Component {
  render = () => {
    const operation = this.props.operation;
    return (
      <div className="Operation">
        <span>
          <Amount amount={operation.amount} /> €
        </span>
      </div>
    );
  };
}

export default Operation;
