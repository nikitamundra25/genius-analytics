import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

const SeriesChart = ({ data }: any) => {
  return (
    <ChartComponent
      id={"Room-chart"}
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
      height={"250px"}
      tooltip={{ enable: true }}>
      <Inject
        services={[
          ColumnSeries,
          LineSeries,
          DataLabel,
          Category,
          Tooltip,
          Legend,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName='name'
          yName='OCCTY'
          type='Column'
          fill={"#a1c6d6"}
          name={"OCC TY"}
          width={1}
          marker={{
            dataLabel: {
              visible: true,
              position: "Bottom",
              font: {
                fontWeight: "600",
                color: "#ffffff",
              },
            },
          }}></SeriesDirective>
        <SeriesDirective
          dataSource={data}
          xName='name'
          yName='OCCLY'
          type='Column'
          fill={"#65adc5"}
          name={"OCC LY"}
          width={1}
          marker={{
            dataLabel: {
              visible: true,
              position: "Bottom",
              font: {
                fontWeight: "600",
                color: "#ffffff",
              },
            },
          }}></SeriesDirective>
        <SeriesDirective
          dataSource={data}
          xName='name'
          yName='ADRTY'
          type='Line'
          fill={"#1b4479"}
          name={"ADR TY"}
          width={2}
          marker={{
            visible: true,
            width: 10,
            height: 10,
            border: { width: 2, color: "#1b4479" },
            dataLabel: {
              visible: true,
              position: "Top",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
            },
          }}></SeriesDirective>
        <SeriesDirective
          dataSource={data}
          xName='name'
          yName='ADRLY'
          type='Line'
          fill={"#05234e"}
          name={"ADR LY"}
          width={2}
          dashArray='5'
          marker={{
            visible: true,
            width: 10,
            height: 10,
            border: { width: 2, color: "#05234e" },
            dataLabel: {
              visible: true,
              position: "Top",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
            },
          }}></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default SeriesChart;
