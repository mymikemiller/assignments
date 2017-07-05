import React from "react";
import ReactDOM from "react-dom";


import "./css/index.css";

import DJContainer from "./containers/dj-container.js";

class App extends React.Component {
  render() {
    let shapes = [];
    for (let x = 0; x < 5; x++) {
      shapes.push(<DJContainer key={x} />);
    }
    return (
      <div>
        {shapes}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));