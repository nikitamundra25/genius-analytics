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
  Legend
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

export const RGIBarChartComponent = (props: any) => {
  const { chartDetails } = props;

  return (
   
      
      <div>
        <ChartComponent
          id={`chart${chartDetails.id}`}
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
          
          tooltip={{ enable: true }}>
          <Inject services={[BarSeries, DataLabel, Category, Tooltip, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartDetails.data}
              xName='x'
              yName='y1'
              type='Bar'
              fill={"#3467a6"}
              name={"HOTEL"}
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
              dataSource={chartDetails.data}
              xName='x'
              yName='y2'
              type='Bar'
              fill={"#819bc6"}
              name={"MARKET"}
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
