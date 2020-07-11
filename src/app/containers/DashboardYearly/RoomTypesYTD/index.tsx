import React from "react";
import { Card } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const RoomTypesYTD = () => {
  return (
    <>
      <Card>
        <WidgetHeader title={"Monthly OCC & ADR"} showToggle={false} />
        <Card.Body>
          <React.Suspense fallback={<Loader />}>
            <MixedCharts
              id={"fasdfadsf"}
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
              charts={[]}
            />
          </React.Suspense>
        </Card.Body>
      </Card>
    </>
  );
};

export default RoomTypesYTD;
