import React from "react";

import "../css/form.css";

class Form extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Image URL"
          value={this.props.input.url}
          onChange={(event) => { this.props.handleChange("url", event) }}
          className="form-control form-custom" />

        <input placeholder="Top Text"
          value={this.props.input.top}
          onChange={(event) => { this.props.handleChange("top", event) }}
          className="form-control form-custom" />

        <input placeholder="Bottom Text"
          value={this.props.input.bottom}
          onChange={(event) => { this.props.handleChange("bottom", event) }}
          className="form-control form-custom" />

        <button className="btn btn-primary"
          onClick={() => {
            // Call handleClick = makeMeme and pass it the meme (input)
            this.props.handleClick(this.props.input)
          }}>Make</button>
      </div>
    )
  }
}

export default Form;