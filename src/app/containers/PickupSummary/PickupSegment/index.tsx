import React from "react";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const PickupData = [
  {
    name: "Best Flexible Rate",
    RoomNts: 8,
    ADR: 100,
  },
  {
    name: "Leisure Break",
    RoomNts: 17,
    ADR: 54,
  },
  {
    name: "Corporate Contracted",
    RoomNts: 63,
    ADR: 26,
  },
  {
    name: "Consortia",
    RoomNts: 38,
    ADR: 56,
  },
  {
    name: "Promotions",
    RoomNts: 25,
    ADR: 56,
  },
  {
    name: "Groups",
    RoomNts: 18,
    ADR: 46,
  },
  {
    name: "OTAs",
    RoomNts: 18,
    ADR: 60,
  },
  {
    name: "FIT",
    RoomNts: 12,
    ADR: 59,
  },
];
const Charts = [
  {
    dataSource: PickupData,
    xName: "name",
    yName: "RoomNts",
    type: "Column",
    fill: "#4684bd",
    name: "Room Nts",
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
    dataSource: PickupData,
    xName: "name",
    yName: "ADR",
    type: "Line",
    fill: "#ee792b",
    name: "ADR",
    width: 2,
    marker: {
      visible: false,
      width: 8,
      height: 8,
      fill:"#ee792b",
      border: { width: 0, color: "#ee792b" },
      dataLabel: {
        visible: true,
        position: "Top",
        fill:"#ee792b",
        border: { width: 1, color: "#4684bd" },
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
              id={"PickupChart"}
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
          <div className="sub-title">Pick up by segment</div>
    </>
  );
};

export default PickupSegment;
