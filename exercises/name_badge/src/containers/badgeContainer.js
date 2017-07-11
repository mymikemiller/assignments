import React from "react"
import { Button, Form, FormGroup, FormControl } from "react-bootstrap";
import autobind from "react-autobind";

import BadgeList from "../components/badgeList.js";

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
      input: {
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        about: ""
      }
    }
  }
  handleInput(key, event) {
    console.log("handleInput");
    let input = {
      ...this.state.input
    }
    input[key] = event.target.value;
    this.setState({
      ...this.state,
      input: input
    });
  }
  submit() {
    let newBadge = {
      firstName: this.state.input.firstName,
      lastName: this.state.input.lastName,
      phone: this.state.input.phone,
      email: this.state.input.email,
      placeOfBirth: this.state.input.placeOfBirth,
      favoriteFood: this.state.input.favoriteFood,
      about: this.state.input.about
    }
    this.setState({
      ...this.state,
      input: {}
    });

    let existingBadges = this.state.badges;
    existingBadges.push(newBadge);
    this.setState({
      ...this.state,
      badges: existingBadges,
      firstNameValue: ""
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
            <FormControl type="text" placeholder="First Name"
              onChange={(event) => { this.handleInput("firstName", event) }}
              value={this.state.input.firstName} />
            <FormControl type="text" placeholder="Last Name"
              onChange={(event) => { this.handleInput("lastName", event) }}
              value={this.state.input.lastName} />
            <FormControl type="text" placeholder="Phone"
              onChange={(event) => { this.handleInput("phone", event) }}
              value={this.state.input.phone} />
            <FormControl type="text" placeholder="Email"
              onChange={(event) => { this.handleInput("email", event) }}
              value={this.state.input.email} />
            <FormControl type="text" placeholder="Place of Birth"
              onChange={(event) => { this.handleInput("placeOfBirth", event) }}
              value={this.state.input.placeOfBirth} />
            <FormControl type="text" placeholder="Favorite Food"
              onChange={(event) => { this.handleInput("favoriteFood", event) }}
              value={this.state.input.favoriteFood} />
            <textarea placeholder="About"
              onChange={(event) => { this.handleInput("about", event) }}
              value={this.state.input.about} />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
        <BadgeList badges={this.state.badges} />>
      </div>
    )
  }
}

export default BadgeContainer;