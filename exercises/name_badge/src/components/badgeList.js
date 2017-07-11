import React from "react"
import autobind from "react-autobind";

import Badge from "../components/badge.js";

class BadgeList extends React.Component {
  componentWillMount() {
    autobind(this);
  }
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
        {this.genBadges()}
      </div>

    );
  }
}

export default BadgeList;