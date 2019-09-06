import React from "react";

const formatter = new Intl.NumberFormat("fr-FR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

class Amount extends React.Component {
  render = () => {
    return formatter.format(this.props.amount);
  };
}

export default Amount;
