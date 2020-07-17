import React from "react";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const PickupDOWOCCSegment = (props:any) => {
  const{index,OccData} = props;
  const Charts = [
    {
      dataSource: OccData,
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
      dataSource: OccData,
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
  return (
    <>
     
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={`DOWChart-${index}`}
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

export default PickupDOWOCCSegment;
