import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import MixedCharts from "../../../components/Charts/MixedCharts";
import WidgetHeader from "../../../components/WidgetHeader";

export default ({ graphdata = [] }:any) => {

  const Charts = [
    {
      dataSource: graphdata,
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
      dataSource: graphdata,
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

  return (
    <Card>
      <WidgetHeader title={"RGI YoY Variance"} activeToggle={"graph"} />
      <Card.Body>
         <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
        <MixedCharts
          id='adfdsf'
          charts={Charts}
          // legend = {false}
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
            tooltip: { enable: false },
          }}
        />
        </React.Suspense>
      </Card.Body>
    </Card>
  );
};
