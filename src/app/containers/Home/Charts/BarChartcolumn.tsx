import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  BarSeries,
  Category,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

export default (props: any) => {
  const { chartDetails1 } = props;

  return (
    <div>
      <ChartComponent
        height={"250px"}
        id={`chart${chartDetails1.id}`}
        style={{ textAlign: "center" }}
        primaryXAxis={{
          valueType: "Category",
          interval: 1,
          majorGridLines: { width: 0 },
        }}
        primaryYAxis={{
          labelFormat: "{value}%",
          edgeLabelPlacement: "Shift",
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          labelStyle: {
            color: "transparent",
          },
        }}
        chartArea={{ border: { width: 0 } }}
        width={Browser.isDevice ? "100%" : "100%"}
        title={chartDetails1.title}
        tooltip={{ enable: true }}>
        <Inject services={[BarSeries, DataLabel, Category, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={chartDetails1.data}
            xName='x'
            yName='y'
            type='Bar'
            fill={chartDetails1.color}
            name={chartDetails1.title}
            width={1}
            marker={{
              dataLabel: {
                visible: true,
                position: "Top",
                font: {
                  fontWeight: "600",
                  color: "#ffffff",
                },
              },
            }}></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};
