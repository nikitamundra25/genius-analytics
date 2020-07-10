import React from "react";
import { Card } from "react-bootstrap";

export default (props: any) => {
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Geographic Origin of business</Card.Title>
        </Card.Header>
        <Card.Body>Map Goes Here</Card.Body>
      </Card>
    </>
  );
};
