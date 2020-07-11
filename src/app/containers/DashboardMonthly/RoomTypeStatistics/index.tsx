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
  LineSeries,
  Legend,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const RoomTypeStatistics: React.FC = (): JSX.Element => {
  const RoomData = [
    {
      name: "0BRM",
      OCCTY: 50,
      OCCLY: 64,
      ADRLY: 134,
      ADRTY: 111,
    },
    {
      name: "1BRM",
      OCCTY: 88,
      OCCLY: 80,
      ADRLY: 157,
      ADRTY: 169,
    },
    {
      name: "2BRM",
      OCCTY: 74,
      OCCLY: 76,
      ADRLY: 257,
      ADRTY: 231,
    },
  ];

  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Business on the Books</Card.Title>
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
          id={"RoomChart"}
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
          <Inject
            services={[
              ColumnSeries,
              LineSeries,
              DataLabel,
              Category,
              Tooltip,
              Legend,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={RoomData}
              xName='name'
              yName='OCCTY'
              type='Column'
              fill={"#9ec2d2"}
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
              dataSource={RoomData}
              xName='name'
              yName='OCCLY'
              type='Column'
              fill={"#61a7c0"}
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
              dataSource={RoomData}
              xName='name'
              yName='ADRTY'
              type='Line'
              fill={"#202c47"}
              name={"ADR TY"}
              width={2}
              marker={{
                visible: true,
                width: 8,
                height: 8,
                fill: "#202c47",
                border: { width: 0, color: "#202c47" },
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
              dataSource={RoomData}
              xName='name'
              yName='ADRLY'
              type='Line'
              fill={"#81cbe8"}
              name={"ADR LY"}
              width={2}
              dashArray='5'
              marker={{
                visible: true,
                width: 8,
                height: 8,
                fill: "#81cbe8",
                border: { width: 0, color: "#81cbe8" },
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

export default RoomTypeStatistics;
