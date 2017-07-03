import React from "react";
import "./character.css";
import { Button } from "react-bootstrap";

class Character extends React.Component {
  render() {
    return (
      <div className="character">
        <h1>{this.props.name}</h1>
        <img src={this.props.image}/>
        <Button bsStyle="primary" onClick={() => { this.props.sayCatchphrase(this.props.catchphrase) }}>Say Catchphrase!</Button>
      </div>
    )
  }
}

export default Character;