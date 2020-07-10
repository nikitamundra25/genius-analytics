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
  Legend
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const DailyOccupacy: React.FC = (): JSX.Element => {
  const dailyocc = [
    {
      name: "1",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "2",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "3",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "4",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "5",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "6",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "7",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "8",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "9",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "10",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "11",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "12",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "13",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "14",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "15",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "16",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "17",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "18",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "19",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "20",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "21",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "22",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "23",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "24",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "25",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "26",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "27",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "28",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
    {
      name: "29",
      OCC: 50,
      Budget: 64,
      LY: 134,
    },
    {
      name: "30",
      OCC: 88,
      Budget: 80,
      LY: 157,
    },
    {
      name: "Total",
      OCC: 74,
      Budget: 76,
      LY: 257,
    },
  ];

  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Daily Occupacy Vs. BUD Vs. LY</Card.Title>
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
                      id={"dailyocc"}
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
                          dataSource={dailyocc}
                          xName='name'
                          yName='OCC'
                          type='Line'
                          fill={"#4176b9"}
                          name={"OCC"}
                          width={2}
                          marker={{
                            visible: false,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#4176b9' } ,
                          }}></SeriesDirective>
                         <SeriesDirective
                          dataSource={dailyocc}
                          xName='name'
                          yName='Budget'
                          type='Line'
                          fill={"#b82f2c"}
                          name={"Budget"}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: false,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#b82f2c' } ,
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
                          dataSource={dailyocc}
                          xName='name'
                          yName='LY'
                          type='Line'
                          fill={"#94b54e"}
                          name={"LY"}
                          width={2}
                          dashArray='5'
                          marker={{
                            visible: false,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#94b54e' } ,
                            dataLabel: {
                              visible: true,
                              position: "Bottom",
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

export default DailyOccupacy;
