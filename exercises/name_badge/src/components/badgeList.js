import React from "react"
import autobind from "react-autobind";

import Badge from "../components/badge.js";
require("./badgeList.css")

class BadgeList extends React.Component {
  componentWillMount() {
    autobind(this);
  }
  genBadges() {
    return this.props.badges.map((badge, index) => {
      return (
        <div key={index}>
          <Badge
            info={badge}
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