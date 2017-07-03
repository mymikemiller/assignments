import React from "react";

class Site extends React.Component {
  render() {
    return (
      <div onClick={() => {
        this.props.handleClick(this.props.desc)
      }}
        className="site-circle" style={{
          backgroundImage: `url('${this.props.image}')`
        }}>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
}

export default Site;