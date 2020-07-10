import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
const BarChartComponent = React.lazy(() => import("../Charts/BarChart"));

const barChartBusinessMetrics = [
  {
    id: "1",
    title: "OCC",
    color: "#2e75b7",
    data: [
      { x: "STLY", y: 71.0 },
      { x: "LY", y: 61.0 },
      { x: "BUD", y: 67.8 },
      { x: "BOB", y: 76.1 },
    ],
  },
  {
    id: "2",
    title: "ADR",
    color: "#5398d9",
    data: [
      { x: "STLY", y: 71.0 },
      { x: "LY", y: 61.0 },
      { x: "BUD", y: 67.8 },
      { x: "BOB", y: 76.1 },
    ],
  },
  {
    id: "3",
    title: "Revenue",
    color: "#1f4e79",
    data: [
      { x: "STLY", y: 71.0 },
      { x: "LY", y: 61.0 },
      { x: "BUD", y: 67.8 },
      { x: "BOB", y: 76.1 },
    ],
  },
  {
    id: "4",
    title: "Revpar",
    color: "#9dc3e7",
    data: [
      { x: "STLY", y: 71.0 },
      { x: "LY", y: 61.0 },
      { x: "BUD", y: 67.8 },
      { x: "BOB", y: 76.1 },
    ],
  },
];

const KeyBusinessMetrics: React.FC = (): JSX.Element => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Key Business Metrics</Card.Title>
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
        {barChartBusinessMetrics.map((key: any, index: number) => {
          return (
            <Col key={index} sm={3} md={3}>
              <React.Suspense fallback={<Loader />}>
                <BarChartComponent {...key} />
              </React.Suspense>
            </Col>
          );
        })}
      </Row>
    </Card>
  );
};

export default KeyBusinessMetrics;
