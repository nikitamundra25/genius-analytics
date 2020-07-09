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
import { Browser } from "@syncfusion/ej2-base";

export default (props: any) => {
  const { chartDetails } = props;
  return (
    <>
      {chartDetails.range ? (
        <div className={`${chartDetails.textClass} h3 px-3 pt-2`}>
          <i className={`${chartDetails.arrowClass}`}></i> {chartDetails.range}
        </div>
      ) : null}
      <div>
        <ChartComponent
          id={`Ychart${chartDetails.id}`}
          style={{ textAlign: "center" }}
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: { color: "transparent" },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          width={Browser.isDevice ? "100%" : "100%"}
          height={"250px"}>
          <Inject services={[ColumnSeries, Tooltip, Category, DataLabel]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartDetails.data}
              xName='x'
              yName='y'
              type='Column'
              fill={chartDetails.color}
              name={chartDetails.title}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  );
};
