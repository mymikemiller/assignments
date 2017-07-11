import React from "react"
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";

import Badge from "../components/badge.js";

class BadgeContainer extends React.Component {
  genBadges() {
    return this.props.badges.map((badge, index) => {
      return (
        <div key={index}>
          <Badge
            firstName={badge.firstName}
            lastName={badge.lastName}
            placeOfBirth={badge.placeOfBirth}
            email={badge.email}
            phone={badge.phone}
            favoriteFood={badge.favoriteFood}
            about={badge.about}
          />
        </div>
      )
    });
  }
  render() {
    return (
      <div>
        <Form onSubmit={(e) => {
          this.props.handleSubmit();
          e.preventDefault();
        }}>
          <FormGroup>
            <FormControl type="text" placeholder="First Name" onChange={this.props.handleInputFirstName} value={this.props.firstName} />
            <FormControl type="text" placeholder="Last Name" />
            <FormControl type="text" placeholder="Phone" />
            <FormControl type="text" placeholder="Email" />
            <FormControl type="text" placeholder="Place of Birth" />
            <FormControl type="text" placeholder="Favorite Food" />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
        {this.genBadges()}
      </div>
    )
  }
}

export default BadgeContainer;