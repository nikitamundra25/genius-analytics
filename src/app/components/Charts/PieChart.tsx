import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PieSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
  Legend,
} from "@syncfusion/ej2-react-charts";

export const PieChartComponent = ({
  id,
  data,
  width = "100%",
  height,
  color,
  chartSettings
}: any) => {
  return (
    <AccumulationChartComponent
      id={`pie${id}`}
      legendSettings={{
        visible: true,
        position: "Bottom",
      }}
      width={width}
      height={height}
      background='transparent'
      tooltip={{
        enable: true,
        // eslint-disable-next-line
        format: "${point.x} : <b>${point.y}%</b>",
      }}
      {...chartSettings.chartComponent}
      >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationTooltip,
          AccumulationDataLabel,
          Legend,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={data}
          xName='x'
          yName='y'
          dataLabel={{
            visible: true,
            position: "Inside",
            name: "text",
            font: {
              fontWeight: "600",
            },
          }}
          {...chartSettings.SeriesDirective}
          ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChartComponent;
