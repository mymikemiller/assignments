import React from "react";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class Todo extends React.Component {
  genTodos() {
    this.todoListItems = this.props.todos.map((item, index) => {
      return (
        <li key={item + index} className="todoListItem">
          <Button bsStyle="danger" bsSize="xsmall" onClick={() => { this.props.handleRemove(index) }}>Delete</Button>
          <Button bsSize="xsmall" onClick={() => { this.props.handleEdit(index) }}>Edit</Button>
          {item.title}</li>
      )
    });
  }
  render() {
    this.genTodos();
    return (
      <div>
        <h1>{this.props.brand}</h1>
        <Form onSubmit={(e) => { this.props.handleAddClick(); e.preventDefault() }}>
          <FormGroup>
            <ControlLabel>Input a todo item:</ControlLabel>
            <div className="inputAndButton">
              <FormControl type="text" className="form-control" placeholder="Todo Title" value={this.props.titleValue} onChange={this.props.handleInput} />
              <Button type="submit" bsStyle="primary">Add Todo</Button>
            </div>
          </FormGroup>
        </Form>
        <ul>
          {this.todoListItems}
        </ul>
      </div >
    )
  }
}

export default Todo;