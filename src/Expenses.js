import React from "react";
import axios from "axios";
// import Amount from "./Amount";

class Expenses extends React.Component {
  state = {
    name: "",
    description: "",
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
    let sum = 0;
    return (
      <div className="Case">
        <h2 className="Title">Expenses</h2>
        <div className="Operation">
          <div className="ContainUser">
            <p>User</p>
            <p>Description</p>
            <p>Expenses</p>
          </div>

          {this.state.data &&
            this.state.data.map((item, index) => {
              return (
                <div key={index} className="Info">
                  <p>{item.name} </p>
                  <p>{item.description}</p>
                  <div>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR"
                    }).format(item.amount)}{" "}
                  </div>
                </div>
              );
            })}
        </div>
        <div className="lignTotal">
          <p>TOTAL</p>
          <p>{sum}</p>

          {this.state.data &&
            this.state.data.map((item, index) => {
              return (
                <div key={index}>
                  <div>{(sum = sum + item.amount)}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  };
}

export default Expenses;
