import React from "react";
import { Card } from "react-bootstrap";
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

const RommTypeData = [
  {
    name: "0BRM",
    OCCTY: 50,
    OCCLY: 64,
    ADRTY: 134,
    ADRLY: 111,
  },
  {
    name: "1BRM",
    OCCTY: 88,
    OCCLY: 80,
    ADRTY: 157,
    ADRLY: 169,
  },
  {
    name: "2BRM",
    OCCTY: 74,
    OCCLY: 76,
    ADRTY: 257,
    ADRLY: 231,
  },
];
export default (props: any) => {
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Room Type Statics</Card.Title>
          <div className='action-wrap'>
            <div className='action-btn '>
              <span className='icon-grid'></span>
            </div>
            <div className='action-btn active'>
              <span className='icon-pie-chart'></span>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
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
                  height={"250px"}
                  tooltip={{ enable: true }}>
                  <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip, Legend]} />
                  <SeriesCollectionDirective>
                    <SeriesDirective
                      dataSource={RommTypeData}
                      xName='name'
                      yName='OCCTY'
                      type='Column'
                      fill={"#a1c6d6"}
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
                      xName='name'
                      yName='OCCLY'
                      type='Column'
                      fill={"#65adc5"}
                      name={"OCC LY"}
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
                      xName='name'
                      yName='ADRTY'
                      type='Line'
                      fill={"#1b4479"}
                      name={"ADR TY"}
                      width={2}
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#1b4479' } ,
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
                      dataSource={RommTypeData}
                      xName='name'
                      yName='ADRLY'
                      type='Line'
                      fill={"#05234e"}
                      name={"ADR LY"}
                      width={2}
                      dashArray='5'
                      marker={{
                        visible: true,
                        width: 10, 
                        height: 10, 
                        border: { width: 2, color: '#05234e' } ,
                        dataLabel: {
                          visible: true,
                          position: "Top",
                          font: {
                            
                            fontWeight: "600",
                            color: "#000000",
                    },
                      },
                    }} ></SeriesDirective>
                     
                  </SeriesCollectionDirective>
                </ChartComponent>
          
        </Card.Body>
      </Card>
    </>
  );
};
