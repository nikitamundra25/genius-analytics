import React from "react";
import { Card, Row, Col } from "react-bootstrap";
const BarChartColumnComponent = React.lazy(() =>
  import("../Charts/BarChartcolumn")
);

const RTGBarChart = [
  {
    id: "r1",
    title: "RGI",
    color: "#2e75b7",
    data: [
      { x: "My RevPAR", y: 115.0 },
      { x: "RevPAR Compact", y: 96.0 },
      { x: "RG1", y: 119.8 },
    ],
  },
  {
    id: "r2",
    title: "MPI",
    color: "#5398d9",
    data: [
      { x: "My OCC", y: 65.0 },
      { x: "OCC Compact", y: 68.0 },
      { x: "MP1", y: 96.8 },
    ],
  },
  {
    id: "r3",
    title: "ARI",
    color: "#1f4e79",
    data: [
      { x: "My ARR", y: 175.0 },
      { x: "ARR Compact", y: 140.0 },
      { x: "AR1", y: 124.8 },
    ],
  },
];

export const PieChartComponent = (props: any) => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>MTD RGI Performance</Card.Title>
      </Card.Header>
      <Card.Body>
        <Row>
          {RTGBarChart.map((key: any, index: number) => {
            return (
              <Col key={index} sm={4} md={4}>
                {" "}
                <BarChartColumnComponent key={index} chartDetails1={key} />
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PieChartComponent;
