import React from "react";
import {  Col } from "react-bootstrap";
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

export default (props: any) => {
  const OCCData2 = [
    {
      name: "Midweek OCC",
      TY: 73,
      LY: 71,
      Var: 73,
    },
    {
      name: "Weekend OCC",
      TY: 65,
      LY: 73,
      Var: 11,
    },
    {
      name: "Total OCC",
      TY: 69,
      LY: 72,
      Var: 43,
    },
  ];
  const OCCData1 = [
    {
      name: "Mon",
      OCCTY: 50,
      OCCLY: 64,
      ADRLY: 185,
      ADRTY: 195,
    },
    {
      name: "Tue",
      OCCTY: 88,
      OCCLY: 80,
      ADRLY: 202,
      ADRTY: 207,
    },
    {
      name: "Wed",
      OCCTY: 74,
      OCCLY: 76,
      ADRLY: 184,
      ADRTY: 194,
    },
    {
      name: "Thu",
      OCCTY: 68,
      OCCLY: 73,
      ADRLY: 176,
      ADRTY: 196,
    },
    {
      name: "Fri",
      OCCTY: 67,
      OCCLY: 64,
      ADRLY: 155,
      ADRTY: 156,
    },
    {
      name: "Sat",
      OCCTY: 74,
      OCCLY: 76,
      ADRLY: 143,
      ADRTY: 150,
    },
    {
      name: "Sun",
      OCCTY: 63,
      OCCLY: 43,
      ADRLY: 157,
      ADRTY: 172,
    },
    {
      name: "Total",
      OCCTY: 45,
      OCCLY: 69,
      ADRLY: 170,
      ADRTY: 175,
    },
  ];

  return (
    <>
      <Col xs={12} md={8}>
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
                  height={"250px"}
                  tooltip={{ enable: true }}>
                  <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={OCCData1}
                      xName='name'
                      yName='OCCTY'
                      type='Column'
                      fill={"#244d81"}
                      name={"OCC TY"}
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
                      <SeriesDirective
                      dataSource={OCCData1}
                      xName='name'
                      yName='OCCLY'
                      type='Column'
                      fill={"#4f81bc"}
                      name={"OCC LY"}
                      width={1}
                      dashArray='5'
                      marker={{
                        visible: false,
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
                      xName='name'
                      yName='ADRTY'
                      type='Line'
                      fill={"#2bb5ec"}
                      name={"ADR TY"}
                      width={2}
                      dashArray='5'
                      marker={{
                        visible: false,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#2bb5ec' } ,
                        dataLabel: {
                          visible: true,
                          position: "Top",
                          font: {
                            
                            fontWeight: "600",
                            color: "#000000",
                    },
                      },

                      }}></SeriesDirective>
                      <SeriesDirective
                      dataSource={OCCData1}
                      xName='name'
                      yName='ADRLY'
                      type='Line'
                      fill={"#293046"}
                      name={"ADR LY"}
                      width={2}
                      dashArray='5'
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#293046' } ,
                        dataLabel: {
                          visible: true,
                          position: "Middle",
                          font: {
                            
                            fontWeight: "600",
                            color: "#000000",
                    },
                      },
                      }}
                      ></SeriesDirective>
                    
                  </SeriesCollectionDirective>
                </ChartComponent>
      </Col>
      <Col xs={12} md={4}>
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
                  height={"250px"}
                  tooltip={{ enable: true }}>
                  <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={OCCData2}
                      xName='name'
                      yName='TY'
                      type='Column'
                      fill={"#8293b1"}
                      name={"TY"}
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
                      <SeriesDirective
                      dataSource={OCCData2}
                      xName='name'
                      yName='LY'
                      type='Column'
                      fill={"#3269aa"}
                      name={"LY"}
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
                      <SeriesDirective
                      dataSource={OCCData2}
                      xName='name'
                      yName='Var'
                      type='Line'
                      fill={"#2f5891"}
                      name={"Var"}
                      width={2}
                      dashArray='5'
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        fill:'#2f5891',
                        border: { width: 1, color: '#ddd' } ,
                        dataLabel: {
                                visible: true,
                                position: "Top",
                                font: {
                                  
                                  fontWeight: "600",
                                  color: "#000000",
                          },
                            },
                      }}></SeriesDirective>
                      
                  </SeriesCollectionDirective>
                </ChartComponent>
       
        
      </Col>
    </>
  );
};
