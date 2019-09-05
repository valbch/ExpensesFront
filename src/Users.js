import React from "react";
import axios from "axios";

// mettre un componentdidmont avec une route en get
//==> verifier le this.setState({ data: response.data.name }); name ???

// faire un map pour afficher le name du user puis amount

// mettre une condition = si le name existe déja alors n'affiche rien.

class Users extends React.Component {
  state = {
    name: "",
    data: null
  };
  componentDidMount = () => {
    try {
      axios.get("http://localhost:3000/users").then(response => {
        console.log(response.data);
        this.setState({ data: response.data.users });
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  render = () => {
    return (
      <div className="Case">
        <h2 className="Title">Users</h2>

        <div className="ContainUser">
          <p>User</p>
          <p>Expenses</p>
        </div>
        <div className="Operation">
          {this.state.data &&
            this.state.data.map((item, index) => {
              return this.state.users === item.users ? (
                <p>{item.users[0]}</p>
              ) : null;
            })}
          <p>40,00€</p>
        </div>
      </div>
    );
  };
}

export default Users;
