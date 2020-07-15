import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

const Businessdata = [
  { x: "BAR", y: 23 },
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

const BarChartData = [
  {
    id: "business-card-percent",
    chartSettings: {
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
    },
    title: "Business Mix %",
    color: "#5b9cd6",
    data: Businessdata,
  },
  {
    id: "business-card-adr",
    chartSettings: {
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
    },
    title: "Business Mix ADR",
    color: "#4473c5",
    data: BusinessADRdata,
  },
];
export default (props: any) => {
  return (
    <>
      <Card>
        <WidgetHeader title={"Business Mix"} activeToggle={"graph"} />
        <Card.Body>
          <Col md={12} xs={12}>
            <Row>
              {BarChartData.map((key: any, index: number) => {
                return (
                  <Col xs={12} md={6}>
                    <div className="w-100">
                      <React.Suspense fallback={<Loader />}>
                        <BarChartComponent
                          id={key.id}
                          chartSettings={key.chartSettings}
                          title={key.title}
                          color={key.color}
                          data={key.data}
                        />
                      </React.Suspense>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Card.Body>
      </Card>
    </>
  );
};
