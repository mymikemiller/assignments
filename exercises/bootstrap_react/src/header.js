import React from "react";
import "./header.css";


class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src="https://blackrockdigital.github.io/startbootstrap-freelancer/img/profile.png" />

        <div className="header-text">
          <div className="header-title">{this.props.title}</div>
          <div>{this.props.separator}</div>
          <div>Web Developer - Graphic Artist - User Experience Designer</div>
        </div>
      </div>
    )
  }
}

export default Header;