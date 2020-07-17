import React from "react";
import { Card } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


export default ({ graphdata = [] }:any) => {
  return (
    <>
      <Card>
        <WidgetHeader title={"Room Type Statics"} activeToggle={"graph"} />
        <Card.Body>
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id='room-type'
              charts={graphdata}
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
            />
            {/* <SeriesChart data={RommTypeData} /> */}
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};
