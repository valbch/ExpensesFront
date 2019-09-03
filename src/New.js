import React from "react";
// import axios from "axios";

// axios({
//   method: "post",
//   url: "url",
//   data: mesDonnees
// })
//   .then(function(reponse) {
//     //On traite la suite une fois la réponse obtenue
//     console.log(reponse);
//   })
//   .catch(function(erreur) {
//     //On traite ici les erreurs éventuellement survenues
//     console.log(erreur);
//   });

class New extends React.Component {
  state = {
    name: "Name",
    description: "Description",
    amount: "Amount"
  };
  render = () => {
    return (
      <div className="Case">
        <h2 className="Title">New expense</h2>
        <form className="Form">
          <input
            className="Input"
            placeholder="Name"
            value={this.state.name}
            onChange={event => {
              this.setState({ name: event.target.value });
            }}
            onRefresh={() => {
              this.setState({ name: null, description: null, amount: null });
            }}
          />
          <input
            className="Input"
            placeholder="Description"
            value={this.state.description}
            onChange={event => {
              this.setState({ description: event.target.value });
            }}
            onRefresh={() => {
              this.setState({ name: null, description: null, amount: null });
            }}
          />
          <input
            className="Input"
            placeholder="Amount"
            value={this.state.amount}
            onChange={event => {
              this.setState({ amount: event.target.value });
            }}
            onRefresh={() => {
              this.setState({ name: null, description: null, amount: null });
            }}
          />
          <button className="Button" type="submit" value="validé" onClick="">
            ADD EXPENSE
          </button>
        </form>
      </div>
    );
  };
}
export default New;
