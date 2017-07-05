import React from "react"
import ReactDOM from "react-dom"

import "./css/index.css";

import CounterContainer from "./containers/counter-container.js"

class App extends React.Component {
  render() {
    return (
      <CounterContainer />
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));