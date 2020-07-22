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
} from "@syncfusion/ej2-react-charts";

const MixedCharts = ({ charts = [], id, chartSettings = {} }: any) => {
  // class MixedCharts extends Component<any, any> {
      
  return (
    <ChartComponent
      id={id}
      style={{ textAlign: "center" }}
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
