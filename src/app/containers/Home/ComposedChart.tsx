import React from "react";
import { Card, Col } from "react-bootstrap";
// import {
//   ResponsiveContainer,
//   Legend,
//   Tooltip,
//   Bar,
//   XAxis,
//   Line,
//   ComposedChart,
// } from "recharts";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  LineSeries 
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

export const ComposedChartComponent = (props: any) => {
  const OCCData1 = [
    {
      x: "Mon",
      y1: 50,
      y2: 64,
      y3: 134,
      y4: 111,
    },
    {
      x: "Tue",
      y1: 88,
      y2: 80,
      y3: 157,
      y4: 169,
    },
    {
      x: "Wed",
      y1: 74,
      y2: 76,
      y3: 257,
      y4: 231,
    },
    {
      x: "Thu",
      y1: 50,
      y2: 64,
      y3: 134,
      y4: 111,
    },
    {
      x: "Fri",
      y1: 88,
      y2: 80,
      y3: 157,
      y4: 169,
    },
    {
      x: "Sat",
      y1: 74,
      y2: 76,
      y3: 257,
      y4: 231,
    },
    {
      x: "Sun",
      y1: 88,
      y2: 80,
      y3: 157,
      y4: 169,
    },
    {
      x: "Total",
      y1: 74,
      y2: 76,
      y3: 257,
      y4: 231,
    },
  ];

  const OCCData2 = [
    {
      x: "Midweek OCC",
      y1: 50,
      y2: 64,
      y3: 134,
      
    },
    {
      x: "Weekend OCC",
      y1: 88,
      y2: 80,
      y3: 157,
     
    },
    {
      x: "Total OCC",
      y1: 74,
      y2: 76,
      y3: 257,
     
    },
  ];
 

  return (
  <>
              <Col xs={12} md={7}>
              <div>
                <ChartComponent
                  id={"occChart1"}
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
                  chartArea={{ border: { width: 0 } }}
                  width={Browser.isDevice ? "100%" : "100%"}
                 
                  tooltip={{ enable: true }}>
                  <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={OCCData1}
                      xName='x'
                      yName='y1'
                      type='Column'
                      fill={"#96b7c6"}
                      name={"OCC TY"}
                      width={1}
                      marker={{
                        dataLabel: {
                          visible: true,
                          position: "Bottom",
                          font: {
                            fontWeight: "600",
                            color: "#ffffff",
                          },
                        },
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={OCCData1}
                      xName='x'
                      yName='y2'
                      type='Column'
                      fill={"#5fa5bb"}
                      name={"OCC LY"}
                      width={1}
                      marker={{
                        dataLabel: {
                          visible: true,
                          position: "Top",
                          font: {
                            fontWeight: "600",
                            color: "#ffffff",
                          },
                        },
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={OCCData1}
                      xName='x'
                      yName='y3'
                      type='Line'
                      fill={"#204b7d"}
                      name={"ADR TY"}
                      width={2}
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#F8AB1D' } ,
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={OCCData1}
                      xName='x'
                      yName='y4'
                      type='Line'
                      fill={"#204b7d"}
                      name={"ADR LY"}
                      width={2}
                      dashArray='5'
                      
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#F8AB1D' } ,
                      }}
                      ></SeriesDirective>
                      {/* <SeriesDirective dataSource={RommTypeData} xName='x' yName='y3' name='Germany'
                                width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                            </SeriesDirective> */}
                  </SeriesCollectionDirective>
                </ChartComponent>
              </div>
             
              </Col>
              <Col xs={12} md={5}>
              <div>
                <ChartComponent
                  id={"occChart2"}
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
                  chartArea={{ border: { width: 0 } }}
                  width={Browser.isDevice ? "100%" : "100%"}
                 
                  tooltip={{ enable: true }}>
                  <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={OCCData2}
                      xName='x'
                      yName='y1'
                      type='Column'
                      fill={"#96b7c6"}
                      name={"TY"}
                      width={1}
                      marker={{
                        dataLabel: {
                          visible: true,
                          position: "Bottom",
                          font: {
                            fontWeight: "600",
                            color: "#ffffff",
                          },
                        },
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={OCCData2}
                      xName='x'
                      yName='y2'
                      type='Column'
                      fill={"#5fa5bb"}
                      name={"LY"}
                      width={1}
                      marker={{
                        dataLabel: {
                          visible: true,
                          position: "Top",
                          font: {
                            fontWeight: "600",
                            color: "#ffffff",
                          },
                        },
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={OCCData2}
                      xName='x'
                      yName='y3'
                      type='Line'
                      fill={"#204b7d"}
                      name={"Var"}
                      width={2}
                      dashArray='5'
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#F8AB1D' } ,
                      }}></SeriesDirective>
                      
                  </SeriesCollectionDirective>
                </ChartComponent>
              </div>
             
              </Col>
           </>
  );
};


export const ComposedChartStatics = (props: any) => {

  const RommTypeData = [
    {
      x: "0BRM",
      y1: 50,
      y2: 64,
      y3: 134,
      y4: 111,
    },
    {
      x: "1BRM",
      y1: 88,
      y2: 80,
      y3: 157,
      y4: 169,
    },
    {
      x: "2BRM",
      y1: 74,
      y2: 76,
      y3: 257,
      y4: 231,
    },
  ];

  return (
  <>
               <Col xs={12} md={6}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Room Type Statics</Card.Title>
                <div className="action-wrap">
                  <div className="action-btn ">
                    <span className="icon-grid"></span>
                  </div>
                  <div className="action-btn active">
                    <span className="icon-pie-chart"></span>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
              <div>
                <ChartComponent
                  id={"Room-chart"}
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
                  chartArea={{ border: { width: 0 } }}
                  width={Browser.isDevice ? "100%" : "100%"}
                 
                  tooltip={{ enable: true }}>
                  <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={RommTypeData}
                      xName='x'
                      yName='y1'
                      type='Column'
                      fill={"#96b7c6"}
                      name={"OCC TY"}
                      width={1}
                      marker={{
                        dataLabel: {
                          visible: true,
                          position: "Bottom",
                          font: {
                            fontWeight: "600",
                            color: "#ffffff",
                          },
                        },
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={RommTypeData}
                      xName='x'
                      yName='y2'
                      type='Column'
                      fill={"#5fa5bb"}
                      name={"OCC LY"}
                      width={1}
                      marker={{
                        dataLabel: {
                          visible: true,
                          position: "Top",
                          font: {
                            fontWeight: "600",
                            color: "#ffffff",
                          },
                        },
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={RommTypeData}
                      xName='x'
                      yName='y3'
                      type='Line'
                      fill={"#204b7d"}
                      name={"ADR TY"}
                      width={2}
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#F8AB1D' } ,
                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={RommTypeData}
                      xName='x'
                      yName='y4'
                      type='Line'
                      fill={"#204b7d"}
                      name={"ADR LY"}
                      width={2}
                      dashArray='5'
                      
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#F8AB1D' } ,
                      }}
                      ></SeriesDirective>
                      {/* <SeriesDirective dataSource={RommTypeData} xName='x' yName='y3' name='Germany'
                                width={2} marker={{ visible: true, width: 10, height: 10 }} type='Line'>
                            </SeriesDirective> */}
                  </SeriesCollectionDirective>
                </ChartComponent>
              </div>
              </Card.Body>
            </Card>
          </Col>
           </>
  );
};
