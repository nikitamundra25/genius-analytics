import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";

const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);



const QuarterlyOCCADR = ({ id,graphdata = []  }: any) => {

  const Charts1 = [
    {
      dataSource: graphdata,
      xName: "name",
      yName: "OCC",
      type: "Column",
      fill: "#3a71b4",
      name: "OCC %",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Top",
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
      yName: "ADR",
      type: "Line",
      fill: "#bb423d",
      name: "ADR",
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
        fill: "#bb423d",
        border: { width: 0, color: "#bb423d" },
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
  return (
    <>
      {" "}
      <Card>
        <WidgetHeader title={"Quarterly OCC & ADR"} showToggle={false} />
        {/* <Card.Body> */}
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
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
        {/* </Card.Body> */}
      </Card>
    </>
  );
};

export default QuarterlyOCCADR;
