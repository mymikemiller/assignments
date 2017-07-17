import React from "react";

import "../css/form.css"

class Form extends React.Component {
  render() {
    return (
      //
      <div>
        <input placeholder="Name One"
          className="form-control form-custom" />

        <input placeholder="Name Two"
          className="form-control form-custom" />

        <input placeholder="Name Three"
          className="form-control form-custom" />

        <button className="btn btn-primary">Choose</button>
      </div>
    )
  }
}

export default Form;