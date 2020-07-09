import React from "react";
import { Card} from "react-bootstrap";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  BarSeries,
  Category,
  Tooltip,
  Legend
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";


const RGIdata = [
  { x: "RGI", y1: 2,  y2: -1},
  { x: "ARI", y1: 2,  y2: 3},
  { x: "MPI", y1: 2 , y2: 1},
];

export default (props: any) => {
  return (
    <Card>
      <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>RGI YoY Variance</Card.Title>
      </Card.Header>
      <Card.Body>
      <ChartComponent
          id={`chartRGI`}
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
          <Inject services={[BarSeries, DataLabel, Category, Tooltip, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={RGIdata}
              xName='x'
              yName='y1'
              type='Bar'
              fill={"#3467a6"}
              name={"HOTEL"}
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
              dataSource={RGIdata}
              xName='x'
              yName='y2'
              type='Bar'
              fill={"#819bc6"}
              name={"MARKET"}
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
          </SeriesCollectionDirective>
        </ChartComponent>
      </Card.Body>
    </Card>
  );
};
