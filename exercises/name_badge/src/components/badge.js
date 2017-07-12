import React from "react";
import { Grid, Row, Col } from "react-bootstrap"
require("./badge.css");

class Badge extends React.Component {
  render() {
    let aboutTextArea = {
      minWidth: "100%",
    }
    return (
      <div>
        <Row>
          <Col xs={8} xsOffset={2}>
            <Grid fluid className="badge">
              <Row className="badgeLabelRow">
                <Col className="badgeLabel" xs={12}>
                  <h4>Badge:</h4>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  Name: {this.props.info.firstName} {this.props.info.lastName}
                </Col>
                <Col xs={4} xsOffset={1}>
                  Phone: {this.props.info.phone}
                </Col>
              </Row>
              <Row>
                <Col xs={4} >
                  Place of Birth: {this.props.info.placeOfBirth}
                </Col>
                <Col xs={4} xsOffset={1}>
                  Favorite Food: {this.props.info.favoriteFood}
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  Email: {this.props.info.email}
                </Col>
              </Row>
              <Row>
                <Col xs={8} style={aboutTextArea}>
                  <textarea readOnly value={this.props.info.about}></textarea>
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