import React from "react";

import Todo from "../components/todo.js";

class TodoList extends React.Component {
  items() {
    return this.props.todos.map((item, index) => {
      return (
        <li key={item + index} className="todoListItem">
          <Todo
            index={index}
            title={item.title}
            handleInput={this.props.handleInput}
            handleRemove={this.props.handleRemove}
            handleEditTitle={this.props.handleEditTitle} />
        </li>
      )
    });
  }
  render() {
    return (
      <ul>
        {this.items()}
      </ul>
    )
  }
}

export default TodoList;