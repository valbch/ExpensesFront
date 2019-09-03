import React from "react";
import Users from "./Users";
import Expenses from "./Expenses";
import New from "./New";

class PageExpenses extends React.Component {
  render = () => {
    return (
      <div className="Global">
        <Users />
        <Expenses />
        <New />
      </div>
    );
  };
}

export default PageExpenses;
