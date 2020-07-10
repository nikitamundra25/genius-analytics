import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

export default ({ id, color, title, data, chartSettings = {} }: any) => {
  console.log(data, id);
  return (
    <ChartComponent
      id={`Ychart${id}`}
      style={{ textAlign: "center" }}
      chartArea={{ border: { width: 0 } }}
      width={"100%"}
      height={"250px"}
      {...chartSettings}>
      <Inject services={[ColumnSeries, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data}
          xName='x'
          yName='y'
          type='Column'
          fill={color}
          name={title}
          marker={{
            dataLabel: {
              visible: true,
              position: "Top",
              font: { fontWeight: "600", color: "#ffffff" },
            },
          }}></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
