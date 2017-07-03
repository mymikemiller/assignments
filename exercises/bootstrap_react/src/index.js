import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import components
import CustomNavbar from "./navbar.js";
import Content from "./content.js";
import Header from "./header.js";

class App extends React.Component {
    render() {
        return (
            <div className="content">
                <CustomNavbar brand="Start Bootstrap" links={
                    [
                        {
                            text: "Portfolio",
                            link: "https://blackrockdigital.github.io/startbootstrap-freelancer/#portfolio"
                        }, {
                            text: "About",
                            link: "https://blackrockdigital.github.io/startbootstrap-freelancer/#about"
                        }, {
                            text: "Contact",
                            link: "https://blackrockdigital.github.io/startbootstrap-freelancer/#contact"
                        }
                    ]
                } />
                <Header title="Start Bootstrap" separator="-----★-----"></Header>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));