import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import SiteContainer from "./containers/site-container.js";

let mySites = [
  {
    name: "Atitlan",
    image: "/images/atitlan.jpg",
    description: "A place where Jacob cannot go."
  },
  {
    name: "Antarctica",
    image: "/images/antarctica.jpg",
    description: "Penguins!"
  },
  {
    name: "Machu Picchu",
    image: "/images/machupicchu.jpg",
    description: "A very high place."
  },
  {
    name: "Disneyworld",
    image: "/images/disneyworld.jpg",
    description: "The happiest place on Earth."
  },
  {
    name: "Germany",
    image: "/images/germany.jpg",
    description: "Beer!"
  },
  {
    name: "Denmark",
    image: "/images/denmark.jpg",
    description: "Cheese!"
  },
  {
    name: "Hawaii",
    image: "/images/hawaii.jpg",
    description: "Surfing!"
  },
  {
    name: "The Moon",
    image: "/images/moon.jpg",
    description: "Also Cheese!"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <SiteContainer sites={mySites} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));