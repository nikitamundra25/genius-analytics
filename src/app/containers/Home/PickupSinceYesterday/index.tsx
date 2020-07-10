import React from "react";
import { Card, Row, Col } from "react-bootstrap";
const BarChartReferenceLineComponent = React.lazy(() =>
  import("../Charts/BarChartsReferenceLine")
);
const BarChartReferenceLine = [
  {
    id: "1",
    title: "Room Nights",
    color: "#f07623",
    data: [
      { x: "BAR", y: 64 },
      { x: "COR", y: 32 },
      { x: "PROMO", y: 46 },
      { x: "FIT", y: 28 },
      { x: "GROUPS", y: -12 },
    ],
  },
  {
    id: "2",
    title: "ADR",
    color: "#f07623",
    data: [
      { x: "BAR", y: 2.8 },
      { x: "COR", y: 1.2 },
      { x: "PROMO", y: -2.2 },
      { x: "FIT", y: 1.1 },
      { x: "GROUPS", y: -1.2 },
    ],
  },
  {
    id: "3",
    title: "Revenue",
    color: "#f07623",
    data: [
      { x: "BAR", y: 15.5 },
      { x: "COR", y: 1.3 },
      { x: "PROMO", y: -1.2 },
      { x: "FIT", y: 2.8 },
      { x: "GROUPS", y: -1.4 },
    ],
  },
];
const PickupSinceYesterday: React.FC = (): JSX.Element => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Pick up Since Yesterday</Card.Title>
        <div className='action-wrap'>
          <div className='action-btn '>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn active'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>

      <Row className='row-inner'>
        {BarChartReferenceLine.map((key: any, index: number) => {
          return (
            <Col xs={12} md={4} key={index}>
              <BarChartReferenceLineComponent chartDetails={key} />
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default PickupSinceYesterday;
