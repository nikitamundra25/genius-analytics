import React from "react";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);





const PickupSegment = (props: any) => {
  const{index, segmentData} = props;
  const Charts = [
    {
      dataSource: segmentData,
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
      dataSource: segmentData,
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

  return (
    <>
     
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={`PickupChart-${index}`}
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
