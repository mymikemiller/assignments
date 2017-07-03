import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import components
import CustomNavbar from "./navbar.js";
import CharacterList from "./character_list.js";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <CustomNavbar image="animaniacs-logo.jpg"/>
        <CharacterList characters={
          [
            {
              name: "Pinky",
              image: "http://clipart.toonarific.com/data/media/146/Pinky.gif",
              catchphrase: "Narf"
            }, {
              name: "The Brain",
              image: "http://i.kinja-img.com/gawker-media/image/upload/s--RWVXqMqZ--/ijogpvmtgijecl8nd7i4.png",
              catchphrase: "The same thing we do every night. Try to take over the world!"
            }, {
              name: "Yakko",
              image: "https://vignette1.wikia.nocookie.net/animaniacs/images/6/68/Yakko_Warner.png/revision/latest?cb=20130118164439",
              catchphrase: "Goodnight everybody!"
            }, {
              name: "Wakko",
              image:"https://vignette2.wikia.nocookie.net/animaniacs/images/0/0d/Wakko_Warner.png/revision/latest?cb=20130118164509",
              catchphrase:"Faboo!"
            }, {
              name:"Dot",
              image:"http://vignette4.wikia.nocookie.net/animaniacs/images/e/ec/Dot_.png/revision/latest?cb=20140212150817",
              catchphrase: "I'm cute!"
            }, {
              name: "Hello Nurse",
              image: "https://vignette2.wikia.nocookie.net/looneytunes/images/9/9c/Nurse_300-1-.gif/revision/latest?cb=20110311162042",
              catchphrase:"Hellooooo, Nurse!"
            }, {
              name:"Slappy Squirrel",
              image:"http://t08.deviantart.net/1C9CL52Q1qZS-mqfMgNSC4E672E=/300x200/filters:fixed_height(100,100):origin()/pre01/0d87/th/pre/i/2006/077/c/4/slappy_squirrel_by_rage28.png",
              catchphrase:"I'm Slappy Squirrel, and I'm so old my blood is solid."
            }
          ]
        } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));