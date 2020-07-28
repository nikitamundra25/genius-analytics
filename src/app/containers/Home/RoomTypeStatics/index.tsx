import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


export default ({ graphdata = [] }:any) => {
  const Charts = [
    {
      dataSource: graphdata,
      xName: "name",
      yName: "OCCTY",
      type: "Column",
      fill: "#a1c6d6",
      name: "OCC TY",
      width: 1,
    },
    {
      dataSource: graphdata,
      xName: "name",
      yName: "OCCLY",
      type: "Column",
      fill: "#65adc5",
      name: "OCC LY",
      width: 1,
    },
    {
      dataSource: graphdata,
      xName: "name",
      yName: "ADRTY",
      type: "Line",
      fill: "#1f487c",
      name: "ADR TY",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#1f487c",
        border: { width: 0, color: "#1f487c" },
        dataLabel: {
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
    {
      dataSource: graphdata,
      xName: "name",
      yName: "ADRLY",
      type: "Line",
      fill: "#05234e",
      name: "ADR LY",
      width: 2,
      dashArray: 5,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#1f487c",
        border: { width: 0, color: "#1f487c" },
        dataLabel: {
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#000000",
          },
        },
      },
    },
  ];

  return (
    <>
      <Card>
        <WidgetHeader title={"Room Type Statics"} activeToggle={"graph"} />
        <Card.Body>
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <MixedCharts
              id='room-type'
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
                  visible:false,
                },
                tooltip: { enable: true },
              }}
            />
            {/* <SeriesChart data={RommTypeData} /> */}
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};
