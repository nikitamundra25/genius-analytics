import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const RoomTypeStatistics = ({ graphdata = [] }:any) => {
  const Charts = [
    {
      dataSource: graphdata,
      xName: "name",
      yName: "OCCTY",
      type: "Column",
      fill: "#9ec2d2",
      name: "OCC TY",
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
      yName: "OCCLY",
      type: "Column",
      fill: "#61a7c0",
      name: "OCC LY",
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
      yName: "ADRTY",
      type: "Line",
      fill: "#202c47",
      name: "ADR TY",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#202c47",
        border: { width: 0, color: "#202c47" },
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
      yName: "ADRLY",
      type: "Line",
      fill: "#81cbe8",
      name: "ADR LY",
      width: 2,
      dashArray:'5',
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#81cbe8",
        border: { width: 0, color: "#81cbe8" },
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
    <Card>
      <WidgetHeader
        title={"Room Type Statistics"}
        activeToggle={"graph"}
      />
        {/* <Card.Body> */}
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={"RoomChart"}
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
    
  );
};

export default RoomTypeStatistics;
