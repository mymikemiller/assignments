import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./navbar.css";

class CustomNavbar extends React.Component {
  render() {
    return (
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'><img src={this.props.image}/></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default CustomNavbar;