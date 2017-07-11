import React from "react";
import { Grid, Row, Col } from "react-bootstrap"

class Badge extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={5}>
              Name: {this.props.firstName} {this.props.lastName}
            </Col>
            <Col xs={5}>
              Email: {this.props.email}
            </Col>
            Phone: {this.props.phone}
            Place of Birth: {this.props.placeOfBirth}
            Favorite Food: {this.props.favoriteFood}
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Badge;