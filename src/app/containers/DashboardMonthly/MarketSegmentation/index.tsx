import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const MarketSegmentation = ({ graphdata = [] }:any) => {
  const Charts = [
    {
      dataSource: graphdata,
      xName: "name",
      yName: "RMS2018",
      type: "Column",
      fill: "#3d78c0",
      name: "RMS 2018",
      width: 1,
      marker: {
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
    {
      dataSource: graphdata,
      xName: "name",
      yName: "RMS2017",
      type: "Column",
      fill: "#98c0e3",
      name: "RMS 2017",
      width: 1,
      marker: {
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
    {
      dataSource: graphdata,
      xName: "name",
      yName: "ADR2018",
      type: "Spline",
      fill: "#50aec7",
      name: "ADR 2018",
      width: 3,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#50aec7",
        border: { width: 0, color: "#50aec7" },
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
      yName: "ADR2017",
      type: "Spline",
      fill: "#24446e",
      name: "ADR 2017",
      width: 3,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#24446e",
        border: { width: 0, color: "#24446e" },
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
      <WidgetHeader
        title={"Market Segmentation"}
        activeToggle={"graph"}
      />
        {/* <Card.Body> */}
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <MixedCharts
              id={"MarketChart"}
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

export default MarketSegmentation;


