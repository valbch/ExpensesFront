import React from "react";
import PageExpenses from "./PageExpenses";
import axios from "axios";

// problèmes à regler:
// le onrefresh ne fonctionne pas
// css du bouton

class FormHome extends React.Component {
  state = {
    name: "Name",
    description: "Description",
    amount: "Amount",
    page: "FormHome"
  };

  addExpense = async () => {
    const response = await axios.post(
      "http://localhost:3000/create",
      this.state
    );

    this.setState({
      name: response.data.name,
      description: response.data.description,
      amount: response.data.amount,
      page: "pageexpenses"
    });
  };

  render = () => {
    return (
      <div>
        <div className="CaseHome">
          <h2 className="Title">New expense</h2>
          <form onSubmit={this.onSubmit} className="Form">
            <input disabled className="Input" placeholder="New user" />
            <input
              className="Input"
              placeholder="Name"
              maxlength={15}
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
              maxlength={25}
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
            />
            <div>
              <span
                className="ButtonAdd"
                type="submit"
                //   value="validé"
                onClick={() => this.addExpense()}
                onRefresh={() => {
                  this.setState({
                    name: null,
                    description: null,
                    amount: null
                  });
                }}
              >
                ADD EXPENSE
              </span>
            </div>
          </form>
        </div>
        <div>{this.state.page === "pageexpenses" && <PageExpenses />}</div>
      </div>
    );
  };
}

export default FormHome;
