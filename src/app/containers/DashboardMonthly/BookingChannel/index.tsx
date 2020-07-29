import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);




const BookingChannel = ({ graphdata = [] }:any) => {
  const Charts = [
    {
      dataSource: graphdata,
      xName: "name",
      yName: "RoomNts",
      type: "Column",
      fill: "#4f81bc",
      name: "Room Nts",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Middle",
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
      yName: "ARR",
      type: "Spline",
      fill: "#b73632",
      name: "ARR",
      width: 3,
      dashArray:'5',
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#b73632",
        border: { width: 0, color: "#b73632" },
        dataLabel: {
          visible: true,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#b73632",
          
          },
        },
      },
    },
  ];
  return (
    <Card>
    <WidgetHeader
      title={"Booking Channel"}
      activeToggle={"graph"}
    />
      {/* <Card.Body> */}
        <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
          <MixedCharts
            id={"BookingChannel"}
            legend = {false}
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
    
  );
};

export default BookingChannel;
