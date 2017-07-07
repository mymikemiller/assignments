import React from "react";
import ReactDOM from "react-dom";

import FormsContainer from "./containers/form-container.js";

class App extends React.Component {
  render() {
    return (
      <FormsContainer />
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));