import React from "react";

import Clicker from "../components/clicker.js";

class ClickerContainer extends React.Component {
  render() {
    return (
      <div>
        <Clicker
          color={this.props.color}
          count={this.props.count}
          backgroundColor={this.props.backgroundColor}
          textColor={this.props.textColor}
          handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default ClickerContainer;