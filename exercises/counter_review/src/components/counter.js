import React from "react";

class Counter extends React.Component {
  render() {
    return (
      < div style={this.props.style} >
        <h1>{this.props.counter}</h1>
        <button onClick={() => { this.props.handleDown() }}>DOWN</button>
        <button onClick={() => { this.props.handleUp() }}>UP</button>
      </div >
    )
  }
}

export default Counter;