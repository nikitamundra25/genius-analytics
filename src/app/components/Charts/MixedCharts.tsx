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
  SplineSeries,
  AxesDirective, AxisDirective,
} from "@syncfusion/ej2-react-charts";

const MixedCharts = ({ charts = [], id="mixed-map", chartSettings = {},legend= true,height="100%" }: any) => {
  // class MixedCharts extends Component<any, any> {
      const legendSettings = { visible: legend };
      const textRender = (args:any) => {
        if (parseInt(args.text) < 0) {
            args.font.color = 'red';
        }
        let value:any = parseInt(args.text); 
    if(Math.abs(value) > 999){
      args.text =  value.toLocaleString()
    }
      };

  return (
    <ChartComponent
      id={id}
      legendSettings={legendSettings}
      //style={{ textAlign: "center", "height": "250px", "width": "100%" }}
      chartArea={{ border: { width: 0 } }}
      // width={"100%"}
      // height={"270px"}
      // height="100%" width="100%"
      style={{ "height":height ,
      "width":"100%"  }}
      textRender = {textRender}
      // fill="transparent"
      // background='transparent'
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
      <AxesDirective>
        <AxisDirective 
          rowIndex={1} 
          name='yAxis1' 
          opposedPosition={true}
          //title='percent' 
          labelFormat='{value}%'  
          majorGridLines={{ width: 0 }}
          majorTickLines={{ width: 0}}
          lineStyle={{ width: 0 } }
          visible={false}
        >
        </AxisDirective>
        <AxisDirective 
          rowIndex={1} 
          name='yAxis2' 
          opposedPosition={true}
          //title='percent' 
          labelFormat='{value}'  
          majorGridLines={{ width: 0 }}
          majorTickLines={{ width: 0}}
          lineStyle={{ width: 0 } }
          visible={false}
          
        >
        </AxisDirective>
      </AxesDirective>
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
