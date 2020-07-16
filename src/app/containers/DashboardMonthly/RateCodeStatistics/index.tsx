import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

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
const Charts = [
  {
    dataSource: Ratecode,
    xName: "name",
    yName: "RoomNts",
    type: "Column",
    fill: "#386fb0",
    name: "Room Nts",
    width: 1,
    marker: {
      dataLabel: {
        visible: true,
        position: "Middle",
        font: {
          fontWeight: "600",
          color: "#ffffff",
        },
      },
    },
  },
  {
    dataSource: Ratecode,
    xName: "name",
    yName: "ARR",
    type: "Line",
    fill: "#b73632",
    name: "ARR",
    width: 2,
    dashArray:'5',
    marker: {
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
    },
  },
];


const RateCodeStatistics = () => {
  return (
    <>
      <Card>
      <WidgetHeader
        title={"Rate Code Statistics"}
        activeToggle={"graph"}
      />
        {/* <Card.Body> */}
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={"Ratecode"}
              chartSettings={{
                primaryXAxis: {
                  valueType: "Category",
                  interval: 1,
                  majorGridLines: { width: 0 },
                },
                primaryYAxis: {
                  labelFormat: "{value}",
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

export default RateCodeStatistics;
