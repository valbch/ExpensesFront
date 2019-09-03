import React from "react";

class Users extends React.Component {
  render = () => {
    return (
      <div className="Case">
        <h2 className="Title">Users</h2>

        <div className="ContainUser">
          <p>User</p>
          <p>Expenses</p>
        </div>
        <div className="Operation">
          <p>Mary</p>
          <p>40,00€</p>
        </div>
      </div>
    );
  };
}

export default Users;
