import React from "react";
import { Card } from "react-bootstrap";

import MixedCharts from "../../../components/Charts/MixedCharts";
import WidgetHeader from "../../../components/WidgetHeader";

export default ({ graphdata = [] }:any) => {
  return (
    <Card>
      <WidgetHeader title={"RGI YoY Variance"} activeToggle={"graph"} />
      <Card.Body>
        <MixedCharts
          id='adfdsf'
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
      </Card.Body>
    </Card>
  );
};
