import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

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
      <WidgetHeader title={"Key Business Metrics"} activeToggle={"graph"} />
      <Card.Body>
      <Row className='row-inner'>
        {barChartBusinessMetrics.map((key: any, index: number) => {
          return (
            <Col key={index} sm={3} md={3}>
              <div className="w-100">
              <React.Suspense fallback={<Loader />}>
                <BarChartComponent
                  chartSettings={{
                    primaryXAxis: {
                      valueType: "Category",
                      interval: 1,
                      // majorGridLines: { width: 0 },
                    },
                    primaryYAxis: {
                      labelFormat: "{value}%",
                      // edgeLabelPlacement: "Shift",
                      // majorGridLines: { width: 0 },
                      // majorTickLines: { width: 0 },
                      // lineStyle: { width: 0 },
                      // labelStyle: {
                      //   color: "transparent",
                      // },
                    },
                    title: key.title,
                    tooltip: { enable: true,  position: 'LeftTop' },
                  }}
                  {...key}
                />
              </React.Suspense>
              </div>
            </Col>
          );
        })}
      </Row>
     </Card.Body>
    </Card>
  );
};

export default KeyBusinessMetrics;
