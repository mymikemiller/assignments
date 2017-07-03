import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./navbar.css";

class CustomNavbar extends React.Component {
    render() {
        let links = this.props.links.map((item) => {
            return (
                <NavItem href={item.link}>
                    {item.text}
                </NavItem>
            )
        });
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='#'>{this.props.brand}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {links}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default CustomNavbar;