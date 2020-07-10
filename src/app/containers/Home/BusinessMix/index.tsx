import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  BarSeries,
  Category,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

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
            <div>
              <ChartComponent
                id={"businesschart1"}
                style={{ textAlign: "center" }}
                primaryXAxis={{
                  valueType: "Category",
                  interval: 1,
                  majorGridLines: { width: 0 },
                }}
                primaryYAxis={{
                  labelFormat: "{value}%",
                  edgeLabelPlacement: "Shift",
                  majorGridLines: { width: 0 },
                  majorTickLines: { width: 0 },
                  lineStyle: { width: 0 },
                  labelStyle: {
                    color: "transparent",
                  },
                }}
                title={"Business Mix %"}
                chartArea={{ border: { width: 0 } }}
                width={Browser.isDevice ? "100%" : "100%"}
                height={"250px"}
                tooltip={{ enable: true }}>
                <Inject services={[BarSeries, DataLabel, Category, Tooltip]} />
                <SeriesCollectionDirective>
                  <SeriesDirective
                    dataSource={Businessdata}
                    xName='x'
                    yName='y'
                    type='Bar'
                    fill='#5b9cd6'
                    name={"Business Mix %"}
                    width={1}
                    marker={{
                      dataLabel: {
                        visible: true,
                        position: "Middle",
                        font: {
                          fontWeight: "600",
                          color: "#ffffff",
                        },
                      },
                    }}></SeriesDirective>
                </SeriesCollectionDirective>
              </ChartComponent>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div>
              <ChartComponent
                id={"businesschart2"}
                style={{ textAlign: "center" }}
                primaryXAxis={{
                  valueType: "Category",
                  interval: 1,
                  majorGridLines: { width: 0 },
                }}
                primaryYAxis={{
                  labelFormat: "{value}%",
                  edgeLabelPlacement: "Shift",
                  majorGridLines: { width: 0 },
                  majorTickLines: { width: 0 },
                  lineStyle: { width: 0 },
                  labelStyle: {
                    color: "transparent",
                  },
                }}
                title={"Business Mix ADR"}
                chartArea={{ border: { width: 0 } }}
                width={Browser.isDevice ? "100%" : "100%"}
                height={"250px"}
                tooltip={{ enable: true }}>
                <Inject services={[BarSeries, DataLabel, Category, Tooltip]} />
                <SeriesCollectionDirective>
                  <SeriesDirective
                    dataSource={BusinessADRdata}
                    xName='x'
                    yName='y'
                    type='Bar'
                    fill='#4473c5'
                    name={"Business Mix ADR"}
                    width={1}
                    marker={{
                      dataLabel: {
                        visible: true,
                        position: "Middle",
                        font: {
                          fontWeight: "600",
                          color: "#ffffff",
                        },
                      },
                    }}></SeriesDirective>
                </SeriesCollectionDirective>
              </ChartComponent>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};
