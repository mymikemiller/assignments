import React from "react";

import DJ from "../components/dj.js";
import autoBind from "react-autobind";

class DJContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      style: {
        backgroundColor: "lawngreen"
      }
    }
    autoBind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.switchToDiamond);
  }
  switchToCircle() {
    this.setState({
      style: {
        ...this.state.style,
        backgroundColor: "red",
        borderRadius: "50%",
        transform: "unset"
      }
    })
  }
  switchToDiamond() {
    this.setState({
      style: {
        ...this.state.style,
        borderRadius: "unset",
        backgroundColor: "blue",
        transform: "rotate(45deg)"
      }
    })
  }

  render() {
    return (
      <DJ style={this.state.style} handleClick={this.switchToCircle} handleScroll={this.switchToDiamond} />
    )
  }
}

export default DJContainer;