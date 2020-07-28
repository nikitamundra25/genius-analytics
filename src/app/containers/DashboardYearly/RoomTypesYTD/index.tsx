import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);




const RoomTypesYTD = ({ graphdata = [] }: any) => {
  const Charts = [
    {
      dataSource: graphdata,
      xName: "name",
      yName: "OCCTY",
      type: "Column",
      fill: "#99bac9",
      name: "OCC TY",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        },
      },
    },
    {
      dataSource: graphdata,
      xName: "name",
      yName: "OCCLY",
      type: "Column",
      fill: "#64acc4",
      name: "OCC LY",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          },
        },
      },
    },
    {
      dataSource: graphdata,
      xName: "name",
      yName: "ADRTY",
      type: "Line",
      fill: "#101238",
      name: "ADR TY",
      width: 2,
      dashArray: 5,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill:"#57b9d5",
        border: { width: 0, color: "#57b9d5" },
        dataLabel: {
          fill:"#01224e",
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#fff",
          },
        },
      },
    },
    {
      dataSource: graphdata,
      xName: "name",
      yName: "ADRLY",
      type: "Line",
      fill: "#8f2826",
      name: "ADR LY",
      width: 2,
      dashArray: 3,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill:"#57b9d5",
        border: { width: 0, color: "#57b9d5" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          fill:"#c50000",
          font: {
            fontWeight: "600",
            color: "#ffffff",
          
          },
        },
      },
    },
  ];
  return (
    <>
      <Card>
        <WidgetHeader title={"Room Types - YTD"} activeToggle={"graph"} />
        {/* <Card.Body> */}
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <MixedCharts
              id={"RoomTypes"}
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
              charts={Charts}
            />
          </React.Suspense>
        {/* </Card.Body> */}
      </Card>
    </>
  );
};

export default RoomTypesYTD;
