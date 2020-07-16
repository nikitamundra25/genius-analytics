import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

const RTGBarChart = [
  {
    id: "r1",
    title: "RGI",
    color: "#2e75b7",
    data: [
      { x: "My RevPAR", y: 115.0 },
      { x: "RevPAR Compact", y: 96.0 },
      { x: "RGI", y: 119.8 },
    ],
  },
  {
    id: "r2",
    title: "MPI",
    color: "#5398d9",
    data: [
      { x: "My OCC", y: 65.0 },
      { x: "OCC Compact", y: 68.0 },
      { x: "MPI", y: 96.8 },
    ],
  },
  {
    id: "r3",
    title: "ARI",
    color: "#1f4e79",
    data: [
      { x: "My ARR", y: 175.0 },
      { x: "ARR Compact", y: 140.0 },
      { x: "ARI", y: 124.8 },
    ],
  },
];

export default (props: any) => {
  return (
    <Card>
      <WidgetHeader title={"MTD RGI Performance"} />
      <Card.Body>
        <Row>
          {RTGBarChart.map((key: any, index: number) => {
            return (
              <Col key={index} sm={4} md={4}>
                <React.Suspense fallback={<Loader />}>
                <BarChartComponent
                  chartSettings={{
                    primaryXAxis: {
                      valueType: "Category",
                      interval: 1,
                      majorGridLines: { width: 0 },
                    },
                    primaryYAxis: {
                      labelFormat: "{value}%",
                      edgeLabelPlacement: "Shift",
                      majorGridLines: { width: 0 },
                      majorTickLines: { width: 0 },
                      lineStyle: { width: 0 },
                      labelStyle: {
                        color: "transparent",
                      },
                    },
                    title: key.title,
                    tooltip: { enable: true },
                  }}
                  key={index}
                  {...key}
                />
                  
                </React.Suspense>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};
