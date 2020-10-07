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
AccumulationChart.Inject(AccumulationDataLabel);

export let data1 = [
  { x: "Direct", y: 284, text: "284" },
  { x: "GDS", y: 412, text: "412" },
  { x: "OTA's", y: 184, text: "184" },
  { x: "Brand.com", y: 285, text: "285" },
];

const NestedDoughnutComponent2 = ({ setHeight }: any) => {
  // console.log("nested chart comp" , setHeight);
  let isRender: boolean = false;
  let pie: any;

  let pieDataSource: any = [
    { x: "Direct", y: 430, text: "430" },
    { x: "GDS", y: 207, text: "207" },
    { x: "OTA's", y: 357, text: "357" },
    { x: "Brand.com", y: 278, text: "278" },
  ];
  const onChartLoad = (args: any) => {
    let chart: any = document.getElementById("chartsnest");
    chart.setAttribute("title", "");
    isRender = true;
    pie = new AccumulationChart({
      background: "transparent",
      series: [
        {
          palettes: ["#5b9bd5", "#ed7d31", "#a5a5a5", "#ffc000"],
          radius: "100%",
          innerRadius: "75%",
          animation: { enable: false },
          dataSource: pieDataSource,
          xName: "x",
          yName: "y",
          dataLabel: {
            visible: true,
            position: "Inside",
            font: { color: "black" },
            name: "text",
          },
        },
      ],
      load: (args: any) => {
        let selectedTheme = "Material";
        // selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.accumulation.theme =
          selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
      },
      legendSettings: { visible: true },
      enableBorderOnMouseMove: false,
    });
    pie.appendTo("#chart_annotation_nest");
  };
  const loaded = (args: any) => {
    if (isRender) {
      pie.destroy();
      pie = new AccumulationChart({
        background: "transparent",
        series: [
          {
            palettes: ["#5b9bd5", "#ed7d31", "#a5a5a5", "#ffc000"],
            radius: "100%",
            innerRadius: "75%",
            animation: { enable: false },
            dataSource: pieDataSource,
            xName: "x",
            yName: "y",
            dataLabel: {
              visible: true,
              position: "Inside",
              angle: 90,
              enableRotation: true,
              font: { color: "black" },
              name: "text",
            },
          },
        ],
        load: (args: any) => {
          let selectedTheme: any = "Material";
          // selectedTheme = selectedTheme ? selectedTheme : 'Material';
          args.accumulation.theme =
            selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
        },
        legendSettings: { visible: true },
        enableBorderOnMouseMove: false,
      });
      pie.appendTo("#chart_annotation_nest");
    }
  };
  return (
    <AccumulationChartComponent
      id="chartsnest"
      loaded={loaded}
      animationComplete={onChartLoad}
      //style={{ height: "100%", width: "100%" }}
      legendSettings={{
        visible: true,
        position: "Bottom",
      }}
      enableBorderOnMouseMove={false}
      style={{ height: "100%", width: "100%" }}
    >
      <Inject services={[AccumulationAnnotation]} />
      <AccumulationAnnotationsDirective>
        <AccumulationAnnotationDirective
          content={`<div id="chart_annotation_nest" style="width: ${setHeight}; height: ${setHeight};"></div>`}
          //content='<div id="chart_annotation_nest" style="width: 195px; height: 195px;"></div>'
          x="50%"
          y="50%"
          coordinateUnits="Pixel"
          region="Series"
        ></AccumulationAnnotationDirective>
      </AccumulationAnnotationsDirective>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          palettes={["#5b9bd5", "#ed7d31", "#a5a5a5", "#ffc000"]}
          dataSource={data1}
          innerRadius="82%"
          radius="100%"
          xName="x"
          yName="y"
          dataLabel={{
            visible: true,
            position: "Inside",
            name: "text",
            font: {
              fontWeight: "600",
            },
          }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default NestedDoughnutComponent2;
