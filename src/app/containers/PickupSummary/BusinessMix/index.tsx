import React from "react";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);



const PickupBusinessMix = (props:any) => {
  const{index, DowData, setHeight} = props;

  console.log(setHeight, "setHeight");
  
  
  const labeltemplate = (args:any) => {
    return (<div  style={{fontSize: '11px', padding: '3px 3px 3px 3px' , borderRadius: '3px'}}>
      <span>{args.point.y}%</span>
    </div>);
};

  const Charts = [
    {
      dataSource: DowData,
      xName: "name",
      yName: "RoomNts",
      type: "Area",
      //fill: "#4684bd",
      fill: "url(#pickupmix-chart)",
      name: "Room Nts",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          fill:"#2b72b5",
          template: labeltemplate,
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
      type: "Spline",
      fill: "#ee792b",
      name: "ADR",
      width: 3,
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

  


  const SAMPLE_CSS = `
      #pickupmix-chart stop {
      stop-color: #4684bd;
    }
    #pickupmix-chart stop[offset="0"] {
      stop-opacity: 1;
    }
    #pickupmix-chart stop[offset="1"] {
      stop-opacity: 0.3;
    }
    `;

  return (
    <>
    <style>
          {SAMPLE_CSS}
      </style>
          <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
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
                height: setHeight,
               // height:"200px"
              }}
              charts={Charts}
            />
          </React.Suspense>
        <div className="sub-title">Business Mix</div>

        <svg style={{ height: '0' }}>
          <defs>
              <linearGradient id="pickupmix-chart" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" />
                  <stop offset="1" />
              </linearGradient>
          </defs>
      </svg>

    </>
  );
};

export default PickupBusinessMix;
