import React from "react";
import ReactDOM from "react-dom";
import BadgeContainer from "./containers/badgeContainer.js";
import autobind from "react-autobind";

class App extends React.Component {
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
  render() {
    return (
      <div>
        <BadgeContainer
          badges={this.state.badges}
          handleSubmit={this.submit}
          handleInputFirstName={this.inputFirstName}
          firstName={this.state.firstNameValue} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));