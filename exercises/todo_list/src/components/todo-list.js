import React from "react";
import autoBind from "react-autobind";

import Todo from "../components/todo.js";

class TodoList extends React.Component {
  componentWillMount() {
    autoBind(this);
  }
  inputEditText(index, newTitle) {
    console.log("inputEditText newTitle", newTitle);
    this.props.handleInputEditText(index, newTitle);
  }
  items() {
    return this.props.todos.map((item, index) => {
      console.log("handleInputEditText:", this.props.handleInputEditText)
      return (
        <li key={item + index} className="todoListItem">
          <Todo
            index={index}
            title={item.title}
            editTitle={item.editTitle}
            handleInputTitle={this.props.handleInputTitle}
            handleRemove={this.props.handleRemove}
            handleSubmitEditTitle={this.props.handleSubmitEditTitle}
            handleInputEditText={this.inputEditText} />
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