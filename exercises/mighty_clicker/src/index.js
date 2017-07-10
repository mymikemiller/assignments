import React from "react";
import ReactDOM from "react-dom";
import autobind from "react-autobind";

import ClickerContainer from "./containers/clickerContainer.js";

class App extends React.Component {
  componentWillMount() {
    autobind(this);
  }

  constructor() {
    super();
    this.state = {
      redCount: 5,
      blueCount: 5
    }
  }

  clickRed() {
    let count = this.state.blueCount - 1;
    if (this.state.blueCount <= 0) {
      count = 5;
    }
    this.setState({
      ...this.state,
      blueCount: count,
      redCount: this.state.redCount + 1,
    });
  }
  clickBlue() {
    let count = this.state.redCount - 1;
    if (this.state.redCount <= 0) {
      count = 5;
    }
    this.setState({
      ...this.state,
      blueCount: this.state.blueCount + 1,
      redCount: count
    });
  }

  render() {
    return (
      <div>
        <ClickerContainer
          color="Red"
          backgroundColor="red"
          textColor="black"
          count={this.state.redCount}
          handleClick={this.clickRed} />
        <ClickerContainer
          color="Blue"
          backgroundColor="blue"
          textColor="white"
          count={this.state.blueCount}
          handleClick={this.clickBlue} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));