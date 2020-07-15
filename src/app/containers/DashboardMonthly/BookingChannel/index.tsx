import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const BookingData = [
  {
    name: "Direct",
    RoomNts: 180,
    ARR: 228,
  },
  {
    name: "GDS",
    RoomNts: 110,
    ARR: 203,
  },
  {
    name: "OTAs",
    RoomNts: 200,
    ARR: 158,
  },
  {
    name: "Brand Website",
    RoomNts: 120,
    ARR: 161,
  },
  {
    name: "Corporate Website",
    RoomNts: 50,
    ARR: 198,
  },
];

const Charts = [
  {
    dataSource: BookingData,
    xName: "name",
    yName: "RoomNts",
    type: "Column",
    fill: "#4f81bc",
    name: "Room Nts",
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
    dataSource: BookingData,
    xName: "name",
    yName: "ARR",
    type: "Line",
    fill: "#b73632",
    name: "ARR",
    width: 2,
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
          color: "#000000",
        
        },
      },
    },
  },
];

const BookingChannel: React.FC = (): JSX.Element => {
 
  return (
    <Card>
    <WidgetHeader
      title={"Booking Channel"}
      activeToggle={"graph"}
    />
      {/* <Card.Body> */}
        <React.Suspense fallback={<Loader />}>
          <MixedCharts
            id={"BookingChannel"}
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

export default BookingChannel;
