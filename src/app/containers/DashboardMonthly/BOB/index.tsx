import React from "react";
import { Card } from "react-bootstrap";
// import TableForm from "../Tables/TableForm";

const BOB: React.FC = (): JSX.Element => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Business on the Books</Card.Title>
        <div className='action-wrap'>
          <div className='action-btn active'>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        {/* <TableForm /> */}
      </Card.Body>
    </Card>
  );
};
export default BOB;
