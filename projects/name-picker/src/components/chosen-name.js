import React from "react";
require("../css/chosen-name.css");

class ChosenName extends React.Component {
  render() {
    return (
      <h1>The chosen name: {this.props.chosenName}</h1>
    )
  }
}

export default ChosenName;