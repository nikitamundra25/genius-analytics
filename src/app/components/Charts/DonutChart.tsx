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

export const DonutChartComponent = ({
  id,
  data,
  width = "100%",
  height,
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
      enableSmartLabels={true}
      enableAnimation={false}
      center={{ x: "50%", y: "50%" }}
      tooltip={{
        enable: true,
        // eslint-disable-next-line
        format: "${point.x} : <b>${point.y}%</b>",
      }}>
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
          explode={true}
          explodeAll={false}
          explodeOffset='5%'
          // explodeIndex={0}
          innerRadius='40%' 
          // startAngle={0}
          // endAngle={360} 
          dataLabel={{
            visible: true,
            position: "Inside",
            name: "text",
            font: {
              fontWeight: "600",
            },
          }}
          radius='70%'></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default DonutChartComponent;
