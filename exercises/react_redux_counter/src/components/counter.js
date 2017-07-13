import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.count}</h3>
        <button onClick={this.props.handleAdd}>+</button>
        <button onClick={this.props.handleSubtract}>-</button>
      </div>
    )
  }
}

export default Counter;

