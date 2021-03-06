import React from "react";
import autoBind from "react-autobind";
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";

class Todo extends React.Component {
  componentWillMount() {
    autoBind(this);
  }

  inputTitleForEdit(event) {
    console.log("inputTitleForEdit:", event.target.value);
    this.props.handleInputEditText(this.props.index, event.target.value);
  }

  render() {
    return (
      <div>
        <ul>
          {/*Delete Button*/}
          <Button bsStyle="danger"
            bsSize="xsmall" onClick={() => {
              this.props.handleRemove(this.props.index)
            }}>Delete</Button>

          {/*Edit Button*/}
          <Button bsSize="xsmall" onClick={() => {
            this.props.handleEdit(this.props.index)
          }}>Edit</Button>

          {this.props.title}

          <Form onSubmit={(e) => {
            this.props.handleSubmitEditTitle(
              this.props.index,
              this.edittedTitle);
            e.preventDefault();
          }}>
            <FormGroup>
              <div className="inputAndButton">
                <FormControl type="text"
                  placeholder="Todo Title"
                  onChange={(e) => { this.inputTitleForEdit(e) }}
                  value={this.props.editTitle} />
                <Button type="submit" bsStyle="primary" >Submit</Button>
              </div>
            </FormGroup>
          </Form>
        </ul>
      </div >
    )
  }
}

export default Todo;