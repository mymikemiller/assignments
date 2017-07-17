import React from "react";
import autobind from "react-autobind";

//

import FormContainer from "../components/form.js";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      nameOne: "",
      nameTwo: "",
      nameThree: ""
    }
    autobind(this);
  }
  //
  render() {
    return (
      <Form />
    )
  }
}

//

export default FormContainer