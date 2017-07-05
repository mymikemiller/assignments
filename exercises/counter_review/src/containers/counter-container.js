import React from "react";
import autoBind from "react-autobind";
import Counter from "../components/counter.js";

class CounterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 100,
      style: {
        color: "black",
        backgroundColor: "green"
      }
    }
    autoBind(this);
  }

  up() {
    // Create and set a new state. Don't modify the original otherwise react won't realize there are changes.
    this.setState({
      counter: this.state.counter + 1,
      style: {
        ...this.state.style,
        color: "red"
      }
    });
  }
  down() {
    this.setState({
      counter: this.state.counter - 1,
      style: {
        ...this.state.style,
        color: "blue"
      }
    })
  }
  render() {
    return (<Counter style={this.state.style} handleUp={this.up} handleDown={this.down} counter={this.state.counter} />);
  }
}

export default CounterContainer;