import React from "react";

//

import ReactDOM from "react-dom"
import ChosenNameContainer from "./containers/chosen-name-container";
import FormContainer from "./containers/form-container";

import "./css/index.css";

//

class App extends React.Component {
  render() {
    return (
      <div>
        <FormContainer />
        <ChosenNameContainer />
      </div>
    )
  }
}

//
ReactDOM.render(<App />, document.querySelector("#root"));