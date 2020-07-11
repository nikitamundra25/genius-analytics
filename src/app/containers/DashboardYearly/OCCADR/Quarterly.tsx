import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const Monthlydailydata = [
  {
    name: "Q1",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "Q2",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "Q3",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "Q4",
    OCC: 74,
    ADR: 76,
  },
];
const Charts1 = [
  {
    dataSource: Monthlydailydata,
    xName: "name",
    yName: "OCC",
    type: "Column",
    fill: "#2b588f",
    name: "OCC",
    width: 1,
  },
  {
    dataSource: Monthlydailydata,
    xName: "name",
    yName: "ADR",
    type: "Line",
    fill: "#e46d09",
    name: "ADR",
    width: 2,
    marker: {
      visible: false,
      width: 10,
      height: 10,
      fill: "#2f5891",
      border: { width: 1, color: "#e46d09" },
      dataLabel: {
        visible: false,
        position: "Top",
        font: {
          fontWeight: "600",
          color: "#000000",
        },
      },
    },
  },
];
const QuarterlyOCCADR = ({ id }: any) => {
  return (
    <>
      {" "}
      <Card>
        <WidgetHeader title={"Quarterly OCC & ADR"} showToggle={false} />
        <Card.Body>
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={id}
              chartSettings={{
                primaryXAxis: {
                  valueType: "Category",
                  interval: 1,
                  majorGridLines: { width: 0 },
                },
                primaryYAxis: {
                  labelFormat: "{value}%",
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
              charts={Charts1}
            />
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};

export default QuarterlyOCCADR;
