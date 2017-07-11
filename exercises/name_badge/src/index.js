import React from "react";
import ReactDOM from "react-dom";
import BadgeContainer from "./containers/badgeContainer.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <BadgeContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));