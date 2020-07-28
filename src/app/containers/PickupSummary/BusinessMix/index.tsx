import React from "react";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);



const PickupBusinessMix = (props:any) => {
  const{index, DowData} = props;
  const Charts = [
    {
      dataSource: DowData,
      xName: "name",
      yName: "RoomNts",
      type: "Area",
      fill: "#4684bd",
      name: "Room Nts",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          fill:"#2b72b5",
          font: {
            fontWeight: "600",
            color: "#fff",
          },
        },
      },
    },
   
    {
      dataSource: DowData,
      xName: "name",
      yName: "ADR",
      type: "Line",
      fill: "#ee792b",
      name: "ADR",
      width: 2,
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
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <MixedCharts
              id={`PickupBusinessChart-${index}`}
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
                  visible:false,
                },
                tooltip: { enable: true },
              }}
              charts={Charts}
            />
          </React.Suspense>
        <div className="sub-title">Business Mix</div>
    </>
  );
};

export default PickupBusinessMix;
