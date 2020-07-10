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
  LineSeries ,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const BookingChannel: React.FC = (): JSX.Element => {
  const BookingChannel = [
    {
      name: "Direct",
      RoomNts: 180,
      ARR: 228,
    },
    {
      name: "GDS",
      RoomNts: 110,
      ARR: 203,
    },
    {
      name: "OTAs",
      RoomNts: 200,
      ARR: 158,
    },
    {
      name: "Brand Website",
      RoomNts: 120,
      ARR: 161,
    },
    {
      name: "Corporate Website",
      RoomNts: 50,
      ARR: 198,
    },
  ];
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Booking Channel</Card.Title>
        <div className='action-wrap'>
          <div className='action-btn active'>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
      <ChartComponent
                      id={"BookingChannel"}
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
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={BookingChannel}
                          xName='name'
                          yName='RoomNts'
                          type='Column'
                          fill={"#4f81bc"}
                          name={"Room Nts"}
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
                          dataSource={BookingChannel}
                          xName='name'
                          yName='ARR'
                          type='Line'
                          fill={"#b73632"}
                          name={"ARR"}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: true,
                            width: 8, 
                            height: 8, 
                            fill: "#b73632",
                            border: { width: 0, color: '#b73632' } ,
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
                    
      </Card.Body>
    </Card>
  );
};

export default BookingChannel;
