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
  { x: "Direct", y: 258, text: "258" },
  { x: "GDS", y: 103, text: "103" },
  { x: "OTA's", y: 292, text: "292" },
  { x: "Brand.com", y: 202, text: "202" },
];

const NestedDoughnutComponent = ({ setHeight }: any) => {
  // console.log("nested chart comp" , setHeight);
  let isRender: boolean = false;
  let pie: any;

  let pieDataSource: any = [
    { x: "Direct", y: 86, text: "86" },
    { x: "GDS", y: 188, text: "188" },
    { x: "OTA's", y: 201, text: "201" },
    { x: "Brand.com", y: 216, text: "216" },
  ];
  const onChartLoad = (args: any) => {
    let chart: any = document.getElementById("charts");
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
      legendSettings: { visible: false },
      enableBorderOnMouseMove: false,
    });
    pie.appendTo("#chart_annotation");
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
        legendSettings: { visible: false },
        enableBorderOnMouseMove: false,
      });
      pie.appendTo("#chart_annotation");
    }
  };
  return (
    <AccumulationChartComponent
      id="charts"
      loaded={loaded}
      animationComplete={onChartLoad}
      style={{ height: "100%", width: "100%" }}
      legendSettings={{
        visible: false,
        position: "Bottom",
      }}
      enableBorderOnMouseMove={false}
    >
      <Inject services={[AccumulationAnnotation]} />
      <AccumulationAnnotationsDirective>
        <AccumulationAnnotationDirective
          content={`<div id="chart_annotation" style="width: ${setHeight}; height: ${setHeight};"></div>`}
          //content='<div id="chart_annotation" style="width: 195px; height: 195px;"></div>'
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

export default NestedDoughnutComponent;
