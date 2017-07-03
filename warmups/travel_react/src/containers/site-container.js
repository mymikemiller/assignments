import React from "react";
import { Col } from "react-bootstrap";

import Site from "../components/site.js";

class SiteContainer extends React.Component {
  alertDesc(desc) {
    alert(`Description: ${desc}`);
  }
  render() {
    let sites = this.props.sites.map((item) => {
      return (
        <Col key={item.name} xs={4} sm={3} lg={2}>
          <Site handleClick={this.alertDesc} image={item.image} name={item.name} desc={item.description} />
        </Col >
      )
    });
    return (
      <div className="container">
        <div className="row">
          {sites}
        </div>
      </div>
    );
  }
}

export default SiteContainer;