import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
import moment from "moment";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const format = "MMM";

const RevParData = [
  {
    name: moment().month(0).format(format),
    OCC: 75,
    RevPAR: 132,
    NrevPAR: 115,
  },
  {
    name: moment().month(1).format(format),
    OCC: 86,
    RevPAR: 133,
    NrevPAR: 117,
  },
  {
    name: moment().month(2).format(format),
    OCC: 93,
    RevPAR: 135,
    NrevPAR: 124,
  },
  {
    name: moment().month(3).format(format),
    OCC: 94,
    RevPAR: 146,
    NrevPAR: 122,
  },
  {
    name: moment().month(4).format(format),
    OCC: 89,
    RevPAR: 154,
    NrevPAR: 143,
  },
  {
    name: moment().month(5).format(format),
    OCC: 91,
    RevPAR: 161,
    NrevPAR: 152,
  },
  {
    name: moment().month(6).format(format),
    OCC: 88,
    RevPAR: 167,
    NrevPAR: 157,
  },
  {
    name: moment().month(7).format(format),
    OCC: 85,
    RevPAR: 144,
    NrevPAR: 118,
  },
  {
    name: moment().month(8).format(format),
    OCC: 89,
    RevPAR: 156,
    NrevPAR: 144,
  },
  {
    name: moment().month(9).format(format),
    OCC: 95,
    RevPAR: 150,
    NrevPAR: 142,
  },
  {
    name: moment().month(10).format(format),
    OCC: 91,
    RevPAR: 143,
    NrevPAR: 145,
  },
  {
    name: moment().month(11).format(format),
    OCC: 88,
    RevPAR: 150,
    NrevPAR: 130,
  },
  {
    name: "Total",
    OCC: 90,
    RevPAR: 149,
    NrevPAR: 135,
  },
];
const Charts = [
  {
    dataSource: RevParData,
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
    dataSource: RevParData,
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
    dataSource: RevParData,
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


const RevparYTD = () => {
  return (
    <>
      <Card>
        <WidgetHeader title={"RevPAR Vs. NrevPAR - YTD"} showToggle={false} />
        {/* <Card.Body> */}
          <React.Suspense fallback={<Loader />}>
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
