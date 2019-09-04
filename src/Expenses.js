import React from "react";

class Expenses extends React.Component {
  render = () => {
    return (
      <div className="Case">
        <h2 className="Title">Expenses</h2>
        <div className="ContainExpense">
          <p>User</p>
          <p>Description</p>
          <p>Expenses</p>
        </div>
        <div className="Operation">
          <p>Mary</p>
          <p>Restaurant</p>
          <p>40,00€</p>
        </div>
      </div>
    );
  };
}

export default Expenses;
