import React from "react";

// Get the thing that connects react to redux
import { connect } from "react-redux";

// Get bindActionCreators to bind the 'this' to the Store
import { bindActionCreators } from "redux";

// import everything from actions
import * as actionCreators from "../actions/"

import ChosenName from "../components/chosen-name.js"

class ChosenNameContainer extends React.Component {
  render() {
    return (
      <ChosenName
        chosenName={this.props.chosenName}
      />
    )
  }
}

// Map our data from Store to Props
const mapStateToProps = (state) => {
  return state;
}

// Take all our actions (actionCreators) and map them to props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

// Connect Store to ChosenNameContainer
export default connect(mapStateToProps, mapDispatchToProps)(ChosenNameContainer);