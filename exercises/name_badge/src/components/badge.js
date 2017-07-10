import React from "react";

class Badge extends React.Component {
  render() {
    return (
      <div>
        Name: {this.props.firstName} {this.props.lastName}
        Email: {this.props.email}
        Phone: {this.props.phone}
        Place of Birth: {this.props.placeOfBirth}
        Favorite Food: {this.props.favoriteFood}
      </div>
    )
  }
}

export default Badge;