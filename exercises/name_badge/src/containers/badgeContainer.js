import React from "react"
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import autobind from "react-autobind";

import Badge from "../components/badge.js";

class BadgeContainer extends React.Component {
  componentWillMount() {
    autobind(this);
  }
  constructor() {
    super();
    this.state = {
      badges: [{
        firstName: "Mike",
        lastName: "Miller",
        email: "mikem.exe@gmail.com",
        placeOfBirth: "Wisconsin",
        phone: "707.867.5350",
        favoriteFood: "Chicken Strips",
        about: "A software engineer with a passion for learning"
      }],
      firstNameValue: "",
      lastNameValue: "",
      emailValue: "",
      placeOfBirthValue: "",
      phoneValue: "",
      favoriteFoodValue: "",
      aboutValue: ""
    }
  }
  inputFirstName(event) {
    this.setState({
      ...this.state,
      firstNameValue: event.target.value
    });
  }
  submit() {
    console.log("submit");
    let newBadge = {
      firstName: this.state.firstNameValue,
      lastName: this.state.lastNameValue,
      email: this.state.email,
      placeOfBirth: this.state.placeOfBirthValue,
      phone: this.state.email,
      favoriteFood: this.state.favoriteFoodValue,
      about: this.state.aboutValue
    }
    let existingBadges = this.state.badges;
    existingBadges.push(newBadge);
    this.setState({
      ...this.state,
      badges: existingBadges,
      firstNameValue: ""
    });
  }
  genBadges() {
    return this.state.badges.map((badge, index) => {
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
          console.log("onSubmit");
          e.preventDefault();
          this.submit();
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