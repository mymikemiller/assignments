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
        completed: false,
        editTitle: ""
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
      titleValue: "",
      editTitle: ""
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
  setEditText(index, newTitle) {
    let existingTodos = [...this.state.todos];
    existingTodos[index].editTitle = newTitle;
    this.setState({
      ...this.state,
      todos: existingTodos,
    });
    console.log("setEditText editTitle", existingTodos[index].editTitle);
  }
  setTitle(index) {
    let existingTodos = [...this.state.todos];
    existingTodos[index].title = existingTodos[index].editTitle;
    existingTodos[index].editTitle = "";
    this.setState({
      ...this.state,
      todos: existingTodos,
    });
  }

  inputEditText(index, newTitle) {
    console.log("in inputEditText", newTitle);
    let existingTodos = [...this.state.todos];
    existingTodos[index].editTitle = newTitle;
    this.setState({
      ...this.state,
      todos: existingTodos,
    });
  }
  inputTitle(event) {
    this.setState({
      ...this.state,
      titleValue: event.target.value
    });
  }
  render() {
    return (
      <div className="containerContainer">
        <div className="todoContainer">
          <h1>Todo List</h1>
          <Form onSubmit={(e) => { this.addTodo(); e.preventDefault(); }}>
            <FormGroup>
              <ControlLabel>Input a todo item:</ControlLabel>
              <div className="inputAndButton">
                <FormControl type="text"
                  className="form-control"
                  placeholder="Todo Title"
                  value={this.state.titleValue}
                  onChange={this.inputTitle} />
                <Button type="submit" bsStyle="primary">Add Todo</Button>
              </div>
            </FormGroup>
          </Form>
          <TodoList todos={this.state.todos}
            handleInputTitle={this.input}
            handleRemove={this.remove}
            handleSubmitEditTitle={this.setTitle}
            handleInputEditText={this.inputEditText} />
        </div>
      </div>
    )
  }
}

export default TodoContainer;