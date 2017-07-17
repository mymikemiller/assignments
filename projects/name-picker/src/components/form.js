import React from "react";

import "../css/form.css"

class Form extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Name One"
          value={this.props.input.nameOne}
          onChange={(event) => { this.props.handleChange("nameOne", event) }}
          className="form-control form-custom" />

        <input placeholder="Name Two"
          value={this.props.input.nameTwo}
          onChange={(event) => { this.props.handleChange("nameTwo", event) }}
          className="form-control form-custom" />

        <input placeholder="Name Three"
          value={this.props.input.nameThree}
          onChange={(event) => { this.props.handleChange("nameThree", event) }}
          className="form-control form-custom" />

        <button className="btn btn-primary"
          onClick={() => {
            // Call handleClick = pickName and pass it the names (input)
            this.props.handleClick(this.props.input)
          }}>Choose</button>
      </div>
    )
  }
}

export default Form;