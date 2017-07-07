import React from "react";
import { Button } from "react-bootstrap";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Button bsStyle="danger" bsSize="xsmall" onClick={() => { this.props.handleRemove(this.props.index) }}>Delete</Button>
          <Button bsSize="xsmall" onClick={() => { this.props.handleEdit(this.props.index) }}>Edit</Button>
          {this.props.title}
        </ul>
      </div >
    )
  }
}

export default Todo;