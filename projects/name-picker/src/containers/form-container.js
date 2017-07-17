import React from "react";
import autobind from "react-autobind";

// Get the thing to connect react to the Store
import { connect } from "react-redux";

// Get 'bindActionCreators' to bind 'this' to the Store
import { bindActionCreators } from "redux";

// Get all the actions and put them in an object called actionCreators
import * as actionCreators from "../actions/";

import Form from "../components/form.js";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      nameOne: "",
      nameTwo: "",
      nameThree: ""
    }
    autobind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  render() {
    return (
      <Form handleChange={this.handleChange}
        handleClick={this.props.pickName}
        input={this.state} />
    )
  }
}

// Tell redux how to connect the state to component via props
const mapStateToProps = (state) => {
  return state;
}

// Tell redux how to turn actions into functions that can be called in react via props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);