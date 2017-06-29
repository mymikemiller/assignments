import React from "react";
import ReactDOM from "react-dom";

//import components
import Navbar from "./navbar.js";

import "./index.css"

class App extends React.Component {
    render() {
        return (
            <div className="sarah">
                <Navbar />
                <h1>Hello</h1>
                <h2>It's Me</h2>
                <p>Hello it's me you're looking for</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
