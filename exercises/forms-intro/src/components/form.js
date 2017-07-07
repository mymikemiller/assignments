import React from "react";

import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

class Forms extends React.Component {
  genNames() {
    this.nameListItems = this.props.names.map((item, index) => {
      return (
        <li key={item + index} onClick={() => {
          this.props.handleRemove(index)
        }}>{item}</li>
      )
    })
  }
  render() {
    this.genNames();
    return (
      < div >
        <h1>{this.props.brand}</h1>
        <FormGroup>
          <ControlLabel>Input a name:</ControlLabel>
          <FormControl type="text" className="form-control" placeholder="Name" value={this.props.nameValue} onChange={this.props.handleInput} />
        </FormGroup>
        <Button bsStyle="primary" onClick={this.props.handleButtonClick}>Add Name</Button>

        <ul>
          {this.nameListItems}
        </ul>
      </div >
    )
  }
}

export default Forms;