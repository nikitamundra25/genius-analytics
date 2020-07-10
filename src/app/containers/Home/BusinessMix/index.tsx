import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

const Businessdata = [
  { x: "BAR1", y: 23 },
  { x: "Discount", y: 27 },
  { x: "Corporate", y: 15 },
  { x: "Cor Group", y: 8 },
  { x: "Leisure Group", y: 13 },
  { x: "FIT", y: 14 },
];

const BusinessADRdata = [
  { x: "BAR", y: 150.55 },
  { x: "Discount", y: 127.32 },
  { x: "Corporate", y: 144.32 },
  { x: "Cor Group", y: 132.33 },
  { x: "Leisure Group", y: 115 },
  { x: "FIT", y: 111 },
];
export default (props: any) => {
  return (
    <>
      <Card>
        <WidgetHeader title={"Business Mix"} activeToggle={"graph"} />
        <Card.Body>
          <Row>
            <Col xs={12} md={6}>
              <React.Suspense fallback={<Loader />}>
                <BarChartComponent
                  id={"business-card-percent"}
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
                    title: "Business Mix %",
                    tooltip: { enable: true },
                  }}
                  title={"Business Mix %"}
                  color='#5b9cd6'
                  data={Businessdata}
                />
              </React.Suspense>
            </Col>

            <Col xs={12} md={6}>
              <BarChartComponent
                id={"business-card-adr"}
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
                  title: "Business Mix ADR",
                  tooltip: { enable: true },
                }}
                title={"Business Mix ADR"}
                color='#4473c5'
                data={BusinessADRdata}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
