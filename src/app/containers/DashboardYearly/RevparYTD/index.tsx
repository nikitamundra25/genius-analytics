import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const RevparYTD = ({ graphdata = [] }: any) => {
  const Charts = [
    {
      dataSource: graphdata,
      xName: "name",
      yName: "OCC",
      type: "Area",
      fill: "#c4e6ef",
      name: "OCC %",
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
      xName: "name",
      yName: "RevPAR",
      type: "Line",
      fill: "#76923c",
      name: "RevPAR",
      width: 2,
      
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill:"#76923c",
        border: { width: 0, color: "#76923c" },
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
      xName: "name",
      yName: "NrevPAR",
      type: "Line",
      fill: "#bf0b0b",
      name: "NrevPAR",
      width: 2,
      marker: {
        visible: false,
        width: 8,
        height: 8,
        fill: "#bf0b0b",
        border: { width: 0, color: "#bf0b0b" },
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
        <WidgetHeader title={"RevPAR Vs. NrevPAR - YTD"} showToggle={false} />
        {/* <Card.Body> */}
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <MixedCharts
              id={"RevPAR"}
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

export default RevparYTD;
