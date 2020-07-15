import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

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
const Charts = [
  {
    dataSource: RommTypeData,
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
    dataSource: RommTypeData,
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
    dataSource: RommTypeData,
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
    dataSource: RommTypeData,
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


const RoomTypesYTD = () => {
  return (
    <>
      <Card>
        <WidgetHeader title={"Room Types - YTD"} showToggle={false} />
        {/* <Card.Body> */}
          <React.Suspense fallback={<Loader />}>
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
