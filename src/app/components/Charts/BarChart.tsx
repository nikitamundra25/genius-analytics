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
// import { Browser } from '@syncfusion/ej2-base';

export const BarChartComponent = (barChart: any) => {
  console.log("barChartbarChart",barChart.height);
  
  return (
    <ChartComponent
      id={`chart-${barChart.id}`}
      style={{ textAlign: "center" }}
      chartArea={{ border: { width: 0 } }}
      height={barChart.height || "270px"}
      // width={Browser.isDevice ? '100%' : '80%'}
      width={barChart.width || "100%"}
      // fill="transparent"
      // background='transparent'
      {...(barChart.chartSettings || {
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
        title: "Business Mix %",
        tooltip: { enable: true },
      })}>
      <Inject services={[BarSeries, DataLabel, Category, Tooltip]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={barChart.data}
          xName='x'
          yName='y'
          type='Bar'
          fill={barChart.color}
          name={barChart.title}
          width={1}
          cornerRadius={{ bottomLeft: 0, bottomRight: 7, topLeft: 0, topRight: 7 }}
          marker={{
            dataLabel: {
              visible: true,
              position: "Middle",
              font: {
                fontWeight: "600",
                color: "#ffffff",
              },
            },
          }}
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
export default BarChartComponent;
