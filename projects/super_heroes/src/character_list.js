import React from "react";
import "./character_list.css";
import Character from "./character.js";

class CharacterList extends React.Component {
  alertCatchphrase(catchphrase) {
      alert(catchphrase)
  }
  render() {
    let characters = this.props.characters.map((character) => {
      return (
        <div>
        <Character  name={character.name} catchphrase={character.catchphrase} image={character.image} sayCatchphrase={this.alertCatchphrase}  />
        </div>
      )
    });
    return (
      <div>
        {characters}
      </div>
    )
  }
}

export default CharacterList;