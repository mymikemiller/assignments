import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Import components
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <div></div>
        <Navbar brand="CatBabies" links={
          [
            {
              text: "Main Coons",
              link: "http://google.com"
            },
            {
              text: "Blog",
              link: "http://yahoo.com"
            }
          ]
        } />
        <Content>
          <h1 className="title">Hello hello, I don't know why you say goodbye</h1>
          <p>I don't know everything</p>
        </Content>
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
