import React from "react";
import { Card } from "react-bootstrap";

import MixedCharts from "../../../components/Charts/MixedCharts";
import WidgetHeader from "../../../components/WidgetHeader";

const RGIdata = [
  { x: "RGI", y1: 2, y2: -1 },
  { x: "ARI", y1: 2, y2: 3 },
  { x: "MPI", y1: 2, y2: 1 },
];
const Charts = [
  {
    dataSource: RGIdata,
    xName: "x",
    yName: "y1",
    type: "Bar",
    fill: "#3467a6",
    name: "HOTEL",
    width: 1,
    marker: {
      dataLabel: {
        visible: true,
        rx: 10,
        ry: 10,
        font: {
          fontWeight: "600",
          color: "#000",
        },
      },
    },
  },
  {
    dataSource: RGIdata,
    xName: "x",
    yName: "y2",
    type: "Bar",
    fill: "#819bc6",
    name: "MARKET",
    width: 1,
    marker: {
      dataLabel: {
        visible: true,
        rx: 10,
        ry: 10,
        font: {
          fontWeight: "600",
          color: "#000",
        },
      },
    },
  },
];
export default (props: any) => {
  return (
    <Card>
      <WidgetHeader title={"RGI YoY Variance"} activeToggle={"graph"} />

      <Card.Body>
        <MixedCharts
          id='adfdsf'
          charts={Charts}
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
            tooltip: { enable: true },
          }}
        />
      </Card.Body>
    </Card>
  );
};
