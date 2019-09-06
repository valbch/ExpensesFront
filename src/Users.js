import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    name: "Mary",
    amount: 5,
    data: null
  };
  componentDidMount = () => {
    try {
      axios.get("http://localhost:3000/users").then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  render = () => {
    return (
      <div className="Case">
        <h2 className="Title">Users</h2>
        <div className="Operation">
          <div className="ContainUser">
            <p>User</p>
            <p>Expenses</p>
          </div>

          {this.state.data &&
            this.state.data.map((item, index) => {
              return (
                <div key={index} className="Info">
                  <p>{item.name} </p>
                  <p>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR"
                    }).format(item.amount)}{" "}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    );
  };
}

export default Users;
