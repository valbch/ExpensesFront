import React from "react";
import Users from "./Users";
import Expenses from "./Expenses";
import FormHome from "./FormHome";

class PageExpenses extends React.Component {
  render = () => {
    return (
      <div className="Container">
        <Users />
        <Expenses />
        <FormHome />
      </div>
    );
  };
}

export default PageExpenses;
