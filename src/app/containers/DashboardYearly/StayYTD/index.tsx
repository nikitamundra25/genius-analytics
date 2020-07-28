import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const StayYTD = ({ graphdata = [] }: any) => {
  const Charts = [
    {
      dataSource: graphdata,
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
    {
      dataSource: graphdata,
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
            color: "#000000",
          
          },
        },
      },
    },
  ];
  return (
    <>
      <Card>
        <WidgetHeader title={"Length of Stay & ADR - YTD"} activeToggle={"graph"} />
        {/* <Card.Body> */}
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
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

export default StayYTD;
