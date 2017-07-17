import React from "react";

// Get the thing that provides Store to your app
import { Provider } from "react-redux";

// Get the thing that makes the Store
import { createStore } from "redux";

// Get the reducer to handle State
import reducers from "./reducers/";

import ReactDOM from "react-dom"
import ChosenNameContainer from "./containers/chosen-name-container";
import FormContainer from "./containers/form-container";

import "./css/index.css";

// Make the store
const store = createStore(reducers);

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
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));