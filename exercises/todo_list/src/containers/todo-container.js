import React from "react";
import autoBind from "react-autobind";

import "./todo-container.css";
import Todo from "../components/todo.js";

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
    console.log(this.state.titleValue);
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
          <Todo brand="Todo List"
            todos={this.state.todos}
            titleValue={this.state.titleValue}
            handleInput={this.input}
            handleRemove={this.remove}
            handleEdit={this.edit}
            handleAddClick={this.addTodo} />
        </div>
      </div>
    )
  }
}

export default TodoContainer;