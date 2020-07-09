import React from "react";
import { Card } from "react-bootstrap";
const WorldMap = () => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Booking Channel Mix </Card.Title>
        <div className='action-wrap'>
          <div className='action-btn '>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn active'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <div id='container'>
          {/* use from here https://ej2.syncfusion.com/react/demos/#/material/maps/legend */}
          Map Goes Here
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorldMap;
