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
// import { Browser } from '@syncfusion/ej2-base';

export default ({ id, color, title, data, chartSettings = {} }: any) => {
  const textRender = (args:any) => { 
    if (parseInt(args.text) < 0) {
      args.font.color = 'red';
  }
  };
  return (
    <ChartComponent
      id={`Ychart${id}`}
      style={{ textAlign: "center","height":"100%" ,
      "width":"100%"  }}
      chartArea={{ border: { width: 0 } }}
      // width={"100%"}
      // width={Browser.isDevice ? '100%' : '80%'}
      // height={"270px"}
      textRender={textRender}
      // fill="transparent"
      // background='transparent'
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
          cornerRadius={{ bottomLeft: 0, bottomRight: 0, topLeft: 7, topRight: 7 }}
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
