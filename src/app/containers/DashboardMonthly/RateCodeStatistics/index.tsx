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

const RateCodeStatistics: React.FC = (): JSX.Element => {
  const Ratecode = [
    {
      name: "BAR",
      RoomNts: 250,
      ARR: 199,
    },
    {
      name: "PRM",
      RoomNts: 210,
      ARR: 144,
    },
    {
      name: "COR1",
      RoomNts: 100,
      ARR: 168,
    },
    {
      name: "COR2",
      RoomNts: 70,
      ARR: 154,
    },
    {
      name: "FIT",
      RoomNts: 165,
      ARR: 149,
    },
    {
      name: "FLS",
      RoomNts: 50,
      ARR: 138,
    },
    {
      name: "GRP",
      RoomNts: 169,
      ARR: 166,
    },
  ];
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Rate Code Statistics</Card.Title>
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
          id={"Ratecode"}
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            labelFormat: "{value}",
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
              dataSource={Ratecode}
              xName='name'
              yName='RoomNts'
              type='Column'
              fill={"#386fb0"}
              name={"Room Nts"}
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
              dataSource={Ratecode}
              xName='name'
              yName='ARR'
              type='Line'
              fill={"#b73632"}
              name={"ARR "}
              width={2}
              dashArray='5'
              marker={{
                visible: true,
                width: 8,
                height: 8,
                fill: "#b73632",
                border: { width: 0, color: "#b73632" },
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

export default RateCodeStatistics;
