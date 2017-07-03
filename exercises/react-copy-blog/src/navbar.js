import React from "react";

class CustomNavbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active">
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default CustomNavbar;