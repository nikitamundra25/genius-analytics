import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const MarketData = [
  {
    name: "BAR",
    RMS2018: 50,
    RMS2017: 64,
    ADR2018: 185,
    ADR2017: 195,
  },
  {
    name: "MTG",
    RMS2018: 88,
    RMS2017: 80,
    ADR2018: 202,
    ADR2017: 207,
  },
  {
    name: "COR",
    RMS2018: 74,
    RMS2017: 76,
    ADR2018: 184,
    ADR2017: 194,
  },
  {
    name: "CON",
    RMS2018: 68,
    RMS2017: 73,
    ADR2018: 176,
    ADR2017: 196,
  },
  {
    name: "GRP",
    RMS2018: 67,
    RMS2017: 64,
    ADR2018: 155,
    ADR2017: 156,
  },
  {
    name: "FIT",
    RMS2018: 74,
    RMS2017: 76,
    ADR2018: 143,
    ADR2017: 150,
  },
  {
    name: "DIS",
    RMS2018: 63,
    RMS2017: 43,
    ADR2018: 157,
    ADR2017: 172,
  },
];
const Charts = [
  {
    dataSource: MarketData,
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
    dataSource: MarketData,
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
    dataSource: MarketData,
    xName: "name",
    yName: "ADR2018",
    type: "Line",
    fill: "#50aec7",
    name: "ADR 2018",
    width: 2,
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
    dataSource: MarketData,
    xName: "name",
    yName: "ADR2017",
    type: "Line",
    fill: "#24446e",
    name: "ADR 2017",
    width: 2,
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


const MarketSegmentation = () => {
  return (
    <>
      <Card>
      <WidgetHeader
        title={"Market Segmentation"}
        activeToggle={"graph"}
      />
        {/* <Card.Body> */}
          <React.Suspense fallback={<Loader />}>
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


