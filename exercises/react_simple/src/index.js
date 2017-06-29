import React from "react"
import ReactDOM from "react-dom";

// import components
import CustomNavbar from "./navbar.js";

class App extends React.Component {
    render() {
        let myLinks = [
            {
                text: "Home",
                link: "http://google.com"
            },
            {
                text: "About",
                link: "http://google.com"
            },
            {
                text: "Sample Post",
                link: "http://google.com"
            },
            {
                text: "Contact",
                link: "http://google.com"
            },
        ];
        return (
            <div>
                <CustomNavbar brand="Ebayy" links={myLinks}/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector("#root"));