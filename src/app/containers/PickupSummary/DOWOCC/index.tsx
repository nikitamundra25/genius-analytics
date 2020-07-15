import React from "react";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const DOWData = [
  {
    name: "Mon",
    RoomNts: 59,
    ADR: 100,
  },
  {
    name: "Tue",
    RoomNts: 69,
    ADR: 54,
  },
  {
    name: "Wed",
    RoomNts: 75,
    ADR: 26,
  },
  {
    name: "Thu",
    RoomNts: 62,
    ADR: 56,
  },
  {
    name: "Fri",
    RoomNts: 76,
    ADR: 56,
  },
  {
    name: "Sat",
    RoomNts: 88,
    ADR: 46,
  },
  {
    name: "Sun",
    RoomNts: 45,
    ADR: 60,
  },
  {
    name: "Total",
    RoomNts: 68,
    ADR: 59,
  },
];
const Charts = [
  {
    dataSource: DOWData,
    xName: "name",
    yName: "RoomNts",
    type: "Column",
    fill: "#4684bd",
    name: "Room Nts",
    width: 1,
    marker: {
      dataLabel: {
        visible: true,
        position: "Bottom",
        font: {
          fontWeight: "600",
          color: "#fff",
        },
      },
    },
  },
 
  {
    dataSource: DOWData,
    xName: "name",
    yName: "ADR",
    type: "Line",
    fill: "#ee792b",
    name: "ADR",
    width: 2,
    dashArray: "5",
    marker: {
      visible: true,
      width: 8,
      height: 8,
      fill:"#ee792b",
      border: { width: 0, color: "#ee792b" },
      dataLabel: {
        visible: true,
        position: "Top",
        fill:"#ee792b",
        font: {
          fontWeight: "600",
          color: "#ffffff",
        
        },
      },
    },
  },
];


const PickupSegment = () => {
  return (
    <>
     
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={"DOWChart"}
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
        <div className="sub-title">DOW OCC</div>
    </>
  );
};

export default PickupSegment;
