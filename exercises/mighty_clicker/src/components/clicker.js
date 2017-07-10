import React from "react";

class Clicker extends React.Component {
  render() {
    const style = {
      backgroundColor: this.props.backgroundColor,
      color: this.props.textColor
    }
    return (
      <div>
        <button onClick={this.props.handleClick} style={style}> {this.props.color} Click</button>
        {this.props.count}
      </div>
    )
  }
}

export default Clicker;