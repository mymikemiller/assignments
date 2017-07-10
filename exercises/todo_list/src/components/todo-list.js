import React from "react";
import autoBind from "react-autobind";

import Todo from "../components/todo.js";

class TodoList extends React.Component {
  componentWillMount() {
    autoBind(this);
  }
  setText() {
    console.log(this.props.handleSetEditText);
  }
  items() {
    return this.props.todos.map((item, index) => {
      return (
        <li key={item + index} className="todoListItem">
          <Todo
            index={index}
            title={item.title}
            editTitle={item.editTitle}
            handleInput={this.props.handleInput}
            handleRemove={this.props.handleRemove}
            handleEditTitle={this.props.handleEditTitle}
            handleSetEditText={this.setText} />
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