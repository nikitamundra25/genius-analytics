import React  from "react";
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
  BarSeries,
  AreaSeries,
  StackingColumnSeries,
  SplineAreaSeries,
  SplineSeries
} from "@syncfusion/ej2-react-charts";

const MixedCharts = ({ charts = [], id, chartSettings = {},legend= true }: any) => {
  // class MixedCharts extends Component<any, any> {
      const legendSettings = { visible: legend };
  return (
    <ChartComponent
      id={id}
      legendSettings={legendSettings}
      //style={{ textAlign: "center", "height": "250px", "width": "100%" }}
      chartArea={{ border: { width: 0 } }}
      width={"100%"}
      height={"250px"}
      {...chartSettings}>
      <Inject
        services={[
          BarSeries,
          ColumnSeries,
          LineSeries,
          AreaSeries,
          DataLabel,
          Category,
          Tooltip,
          Legend,
          StackingColumnSeries,
          SplineAreaSeries,
          SplineSeries
        ]}
      />
      <SeriesCollectionDirective>
        {charts.map(({ marker, ...chart }: any, index: number) => {    
          return (
            <SeriesDirective
              key={index}
              {...chart}
              marker={
                marker
                  ? marker
                  : {
                      dataLabel: {
                        visible: true,
                        position: "Middle",
                        font: {
                          fontWeight: "600",
                          color: "#ffffff",
                        },
                      },
                    }
              }
            />
          );
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default MixedCharts;
