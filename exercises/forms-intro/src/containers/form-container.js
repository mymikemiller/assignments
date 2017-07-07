import React from "react";
import autoBind from "react-autobind";

import "./form-container.css";
import Forms from "../components/form.js";

class FormsContainer extends React.Component {
  componentWillMount() {
    autoBind(this);
  }

  constructor() {
    super();
    this.state = {
      names: ["Jordan", "Mike"],
      nameValue: ""
    }
  }

  addName() {
    this.setState({
      ...this.state,
      names: [...this.state.names, this.state.nameValue],
      nameValue: ""
    })
  }

  remove(index) {
    let oldNames = [...this.state.names];
    oldNames.splice(index, 1);
    this.setState({
      ...this.state,
      names: oldNames
    })
  }

  input(event) {
    this.setState({
      ...this.state,
      nameValue: event.target.value
    });
  }


  render() {
    return (
      <div className="containerContainer">
        <div className="formContainer">
          <Forms brand="Atom Sucks" nameValue={this.state.nameValue} handleInput={this.input} handleRemove={this.remove} names={this.state.names} handleButtonClick={this.addName} />
        </div>
      </div>
    )
  }
}

export default FormsContainer;