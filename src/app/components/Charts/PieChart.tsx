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
  height = "100%",
  color,
  chartSettings
}: any) => {

  const textRender = (args:any) => { 
    if (parseInt(args.text) < 0) {
      args.font.color = 'red';
  }
  };
  return (
    <AccumulationChartComponent
      id={`pie${id}`}
      legendSettings={{
        visible: true,
        position: "Bottom",
      }}
      style={{ "height":"100%" ,
      "width":"100%"  }}
      // width={width}
      // height={height}
      textRender ={textRender}
      // background='transparent'
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
          OuterRadius="10%"
          {...chartSettings.SeriesDirective}
          ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChartComponent;
