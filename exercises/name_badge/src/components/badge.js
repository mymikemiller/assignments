import React from "react";
import { Grid, Row, Col, TextArea } from "react-bootstrap"
require("./badge.css");

class Badge extends React.Component {
  render() {
    let addBorderStyle = {
      border: "1px solid black"
    }
    let aboutTextArea = {
      border: "1px solid black",
      minWidth: "100"
    }
    return (
      <div>
        <Row>
          <Col xs={8} xsOffset={2} style={addBorderStyle}>
            <Grid>
              <Row>
                <Col xs={4}>
                  Name: {this.props.firstName} {this.props.lastName}
                </Col>
                <Col xs={4} xsOffset={1}>
                  Phone: {this.props.phone}
                </Col>
              </Row>
              <Row>
                <Col xs={4} >
                  Place of Birth: {this.props.placeOfBirth}
                </Col>
                <Col xs={4} xsOffset={1}>
                  Favorite Food: {this.props.favoriteFood}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  Email: {this.props.email}
                </Col>
              </Row>
              <Row>
                <Col xs={8} style={aboutTextArea}>
                  <textarea readOnly>{this.props.about}</textarea>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </div >
    )
  }
}

export default Badge;