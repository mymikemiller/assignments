import React from "react";
import ReactDOM from "react-dom";

import TodoContainer from "./containers/todo-container.js";

class App extends React.Component {
  render() {
    return (
      <TodoContainer />
    )
  }
}



ReactDOM.render(<App />, document.querySelector("#root"));