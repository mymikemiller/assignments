import React from "react";

class DJ extends React.Component {
  render() {
    return (
      <div className="shape" style={this.props.style} onClick={() => { this.props.handleClick() }}></div >
    )
  }
}

export default DJ;