import React from "react";
import ReactDOM from "react-dom";

//import css
import "./index.css";

//import Components
import CustomNavbar from "./navbar.js";
import Header from "./header.js";
import Footer from "./footer.js";
import ArticleList from "./article-list.js";

class App extends React.Component {
    render() {
        let myLinks = [
            {
                text: "Home",
                link: "http://google.com"
            }, {
                text: "About",
                link: "http://atom.io"
            }, {
                text: "Sample Post",
                link: "/page1"
            }, {
                text: "Contact",
                link: "http://catbabies.com"
            }
        ];
        let myArticles = [
            {
                name: "Man must explore, and this is exploration at its greatest",
                desc: "Problems look mighty small from 150 miles up",
                date: "Posted by Start Bootstrap on September 24, 2014",
                url: "#"
            }, {
                name: "I believe every human has a finite number of heartbeats. I do not intend to waste any of mine",
                desc: " ",
                date: "Posted by Start Bootstrap on September 18, 2014",
                url: "#"
            }, {
                name: "Science has not yet mastered prophecy",
                desc: "We predict too much for the next year and yet far too little for the next ten.",
                date: "Posted by Start Bootstrap on August 24, 2014",
                url: "#"
            }, {
                name: "Failure is not an option",
                desc: "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
                date: "Posted by Start Bootstrap on July 8, 2014",
                url: "#"
            }
        ];
        return (
            <div>
            <CustomNavbar brand="Ebayye" links={myLinks} bigfoot={false} />
                <Header />
                <ArticleList articles={myArticles} />
                <Footer />
            </div>
        )
    }
}
ReactDOM.render(
    <App />, document.querySelector("#root"));