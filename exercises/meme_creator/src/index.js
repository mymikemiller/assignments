import React from "react";

// Get the thing that provides Store to your app
import { Provider } from "react-redux";

// Get the thing that makes the Store
import { createStore } from "redux";

// Get the reducer to handle State
import reducers from "./reducers/";

import ReactDOM from "react-dom";
import MemeContainer from "./containers/meme-container.js";
import FormContainer from "./containers/form-container.js";

import "./css/index.css";

// Make the store
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <MemeContainer />
            </div>
            <div className="col-md-6">
              <FormContainer />
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">Made by Mike</span>
          </div>
        </footer>
      </div>
    )
  }
}

// Give the store to the app through Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));