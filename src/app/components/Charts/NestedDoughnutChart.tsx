import * as React from "react";
// import "./index.css";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationChart,
  AccumulationDataLabel,
  AccumulationAnnotation,
  AccumulationAnnotationsDirective,
  AccumulationAnnotationDirective,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";
AccumulationChart.Inject(AccumulationDataLabel);
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
/**
 * Sample for annotation
 */
const  getValue = (series:any, pointIndex:any, y:any) => {
  let totalValue = 0;
  for (let ser of series) {
    totalValue += ser.points[pointIndex].y;
  }
  return Math.round((y / totalValue) * 100) + "%";
}
export let data1 = [
  { x: "Labour", y: 18, text: "18%" },
  { x: "Legal", y: 8, text: "8%" },
  { x: "Production", y: 15, text: "15%" },
  { x: "License", y: 11, text: "11%" },
  { x: "Facilities", y: 18, text: "18%" },
  { x: "Taxes", y: 14, text: "14%" },
  { x: "Insurance", y: 16, text: "16%" },
];

 const NestedDoughnutComponent = () => {
  let isRender:boolean = false;
  let pie :any
  let dataSource:any = [
    { x: "2014", y0: 51, y1: 77, y2: 66, y3: 34 },
    { x: "2015", y0: 67, y1: 49, y2: 19, y3: 38 },
    { x: "2016", y0: 143, y1: 121, y2: 91, y3: 44 },
    { x: "2017", y0: 19, y1: 28, y2: 65, y3: 51 },
    { x: "2018", y0: 30, y1: 66, y2: 32, y3: 61 },
    { x: "2019", y0: 189, y1: 128, y2: 122, y3: 76 },
    { x: "2020", y0: 72, y1: 97, y2: 65, y3: 82 },
  ];
  let pieDataSource:any = [
    { x: "UK", y: 51, text: "22%" },
    { x: "Germany", y: 77, text: "34%" },
    { x: "France", y: 66, text: "29%" },
    { x: "Italy", y: 34, text: "15%" },
  ];
 const  onChartLoad = (args:any) => {
    let chart:any = document.getElementById('charts');
    chart.setAttribute('title', '');
   isRender = true;
    pie = new AccumulationChart({
        background: 'transparent',
        series: [{
                radius: '53%', innerRadius: '70%', animation: { enable: false },
                dataSource:pieDataSource,
                xName: 'x', yName: 'y', dataLabel: { visible: false, position: 'Inside', font: { color: 'white' }, name: 'text' },
            }],
        load: (args:any) => {
            let selectedTheme = "Material";
            // selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    pie.appendTo('#chart_annotation');
}
;


const loaded = (args:any) => {
    if (isRender) {
        pie.destroy();
        pie = new AccumulationChart({
        background: 'transparent',
        series: [{
                radius: '53%', innerRadius: '50%', animation: { enable: false },
                dataSource: pieDataSource,
                xName: 'x', yName: 'y', dataLabel: { visible: false, position: 'Inside', font: { color: 'white' }, name: 'text' },
            }],
        load: (args:any) => {
            let selectedTheme:any = 'Material';
            // selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
        },
        legendSettings: { visible: false }
    });
    pie.appendTo('#chart_annotation');
    }
}
  return (
    <AccumulationChartComponent id="charts" loaded={loaded} animationComplete={onChartLoad}  
    // style={{ "height":"100%" ,"width":"100%"  }}
    >
      <Inject services={[AccumulationAnnotation]} />
      <AccumulationAnnotationsDirective>
        <AccumulationAnnotationDirective
          content='<div id="chart_annotation" style="width: 490px; height: 490px"></div>'
          x="50%"
          y="50%"
          coordinateUnits="Pixel"
          region="Series"
        ></AccumulationAnnotationDirective>
      </AccumulationAnnotationsDirective>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataLabel={{ visible: true, position: "Outside" }}
          dataSource={data1}
          innerRadius="75%"
          xName="x"
          yName="y"
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default NestedDoughnutComponent;