import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const StayData = [
  { x: 'Total', y1: 2.9,  y2: 175   },
  { x: 'BAR', y1: 2.3,  y2: 201   },
  { x: 'COR', y1: 1.9,  y2: 187  },
  { x: 'DIS', y1: 3.3,  y2: 149  },
  { x: 'GRP', y1: 4.1,  y2: 166  },
  { x: 'MTG', y1: 3.5,  y2: 171   },
  { x: 'FIT', y1: 2.8,  y2: 149  },
];

const Charts = [
  {
    dataSource: StayData,
    xName: "x",
    yName: "y1",
    type: "Column",
    name: "Stay",
    width: 1,
    marker: {
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
  // {
  //   dataSource: StayData,
  //   xName: "x",
  //   yName: "y2",
  //   type: "StackingColumn",
  //   name: "BAR",
  //   width: 1,
  //   marker: {
  //     dataLabel: {
  //       visible: true,
  //       position: "Top",
  //       font: {
  //         fontWeight: "600",
  //         color: "#000000",
  //       },
  //     },
  //   },
  // },
  // {
  //   dataSource: StayData,
  //   xName: "x",
  //   yName: "y3",
  //   type: "StackingColumn",
  //   name: "COR",
  //   width: 1,
  //   marker: {
  //     dataLabel: {
  //       visible: true,
  //       position: "Top",
  //       font: {
  //         fontWeight: "600",
  //         color: "#000000",
  //       },
  //     },
  //   },
  // },
  // {
  //   dataSource: StayData,
  //   xName: "x",
  //   yName: "y4",
  //   type: "StackingColumn",
  //   name: "DIS",
  //   width: 1,
  //   marker: {
  //     dataLabel: {
  //       visible: true,
  //       position: "Top",
  //       font: {
  //         fontWeight: "600",
  //         color: "#000000",
  //       },
  //     },
  //   },
  // },
  // {
  //   dataSource: StayData,
  //   xName: "x",
  //   yName: "y5",
  //   type: "StackingColumn",
  //   name: "GRP",
  //   width: 1,
  //   marker: {
  //     dataLabel: {
  //       visible: true,
  //       position: "Top",
  //       font: {
  //         fontWeight: "600",
  //         color: "#000000",
  //       },
  //     },
  //   },
  // },
  // {
  //   dataSource: StayData,
  //   xName: "x",
  //   yName: "y5",
  //   type: "StackingColumn",
  //   name: "MTG",
  //   width: 1,
  //   marker: {
  //     dataLabel: {
  //       visible: true,
  //       position: "Top",
  //       font: {
  //         fontWeight: "600",
  //         color: "#000000",
  //       },
  //     },
  //   },
  // },
  // {
  //   dataSource: StayData,
  //   xName: "x",
  //   yName: "y7",
  //   type: "StackingColumn",
  //   name: "FIT",
  //   width: 1,
  //   marker: {
  //     dataLabel: {
  //       visible: true,
  //       position: "Top",
  //       font: {
  //         fontWeight: "600",
  //         color: "#000000",
  //       },
  //     },
  //   },
  // },
  {
    dataSource: StayData,
    xName: "x",
    yName: "y2",
    type: "Line",
    fill: "#5685c1",
    name: "ADR",
    width: 2,
    marker: {
      visible: true,
      width: 8,
      height: 8,
      fill:"#5685c1",
      border: { width: 0, color: "#5685c1" },
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

 
 
  
];


const StayYTD = () => {
  return (
    <>
      <Card>
        <WidgetHeader title={"Length of Stay & ADR - YTD"} showToggle={false} />
        {/* <Card.Body> */}
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={"stay"}
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

export default StayYTD;
