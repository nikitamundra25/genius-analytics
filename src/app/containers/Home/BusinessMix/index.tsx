import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import BarChartComponent from "../Charts/BarChart";

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
export default (props: any) => {
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Business Mix</Card.Title>
          <div className='action-wrap'>
            <div className='action-btn '>
              <span className='icon-grid'></span>
            </div>
            <div className='action-btn active'>
              <span className='icon-pie-chart'></span>
            </div>
          </div>
        </Card.Header>

        <Row>
          <Col xs={12} md={6}>
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
      </Card>
    </>
  );
};
