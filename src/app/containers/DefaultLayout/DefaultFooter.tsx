import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class DefaultFooter extends Component {
  render() {
    return <React.Fragment >
      <div className="w-100">
        <Row>
          <Col sm={"6"}><div>2020 © Genius.</div></Col>
          {/* <Col sm={"6"}>
            <div className="text-sm-right ">Design &amp; Developed by Chapter247</div>
          </Col> */}
        </Row>
      </div>
      
      
    </React.Fragment>;
  }
}

export default DefaultFooter;
