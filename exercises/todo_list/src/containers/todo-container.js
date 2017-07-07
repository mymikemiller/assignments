import React from "react";
import autoBind from "react-autobind";
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

import TodoList from "../components/todo-list.js";

import "./todo-container.css";

class TodoContainer extends React.Component {
  componentWillMount() {
    autoBind(this);
  }
  constructor() {
    super();
    this.state = {
      todos: [{
        title: "Do all the things",
        completed: false
      }],
      titleValue: ""
    }
  }
  addTodo() {
    let newTodo = {
      title: this.state.titleValue,
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
      titleValue: ""
    });
  }
  remove(index) {
    let oldTodos = [...this.state.todos];
    oldTodos.splice(index, 1);
    this.setState({
      ...this.state,
      todos: oldTodos
    });
  }
  edit(index) {
    console.log(`edit ${index}`)
    //do nothing for now
  }
  input(event) {
    this.setState({
      ...this.state,
      titleValue: event.target.value
    });
  }
  render() {
    return (
      <div className="containerContainer">
        <div className="todoContainer">
          <div>
            <h1>Todo List</h1>
            <Form onSubmit={(e) => { this.addTodo(); e.preventDefault(); }}>
              <FormGroup>
                <ControlLabel>Input a todo item:</ControlLabel>
                <div className="inputAndButton">
                  <FormControl type="text" className="form-control" placeholder="Todo Title" value={this.props.titleValue} onChange={this.input} />
                  <Button type="submit" bsStyle="primary">Add Todo</Button>
                </div>
              </FormGroup>
            </Form>
            <TodoList todos={this.state.todos}
              handleInput={this.input}
              handleRemove={this.remove}
              handleEdit={this.edit} />
          </div>
        </div>
      </div>
    )
  }
}

export default TodoContainer;