import React from "react";
import autobind from "react-autobind";

// Get the thing that connects react to redux
import { connect } from "react-redux";

// Get bindActionCreators to bind the 'this' to the Store
import { bindActionCreators } from "redux";

// import everything from actions
import * as actionCreators from "../actions/"

import Meme from "../components/meme.js";

class MemeContainer extends React.Component {
  componentWillMount() {
    autobind(this);
  }
  render() {
    return (
      <div>
        <Meme
          top={this.props.top}
          bottom={this.props.bottom}
          url={this.props.url} />
      </div>
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

// Connect Store to MemeContainer
export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);