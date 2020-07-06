import React, { Component } from "react";
import {  Col, Row } from "react-bootstrap";
// import { Pie, Line, } from 'react-chartjs-2';
import "./index.scss";
import { ReactSortable } from "react-sortablejs";
import graphStats from "./GraphStats.json";
import { TableForm } from "./TableForm";
import { BarChartComponent } from "./BarChart";
import { BarChartReferenceLineComponent } from "./BarChartsReferenceLine";
import { ComposedChartComponent, ComposedChartStatics } from "./ComposedChart";
import { BusinessMixComponent } from "./BusinessMix";
import { PieChartComponent } from "./PieChart";
import { HighChartComponent } from "./HighChart";

const barChartBusinessMetrics = [
  {
    title: "OCC",
    data: [
      {
        name: "BOB",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "BUD",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "LY",
        uv: 2000,
        pv: 8,
        amt: 2290,
      },
      {
        name: "STLY",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
    ],
    label: "abc",
    fill: "#2e75b7",
    isXAxis: true,
    isYAxis: true,
    isRTG: false
  },
  {
    title: "ADR",
    data: [
      {
        name: "BOB",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "BUD",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "LY",
        uv: 2000,
        pv: 8,
        amt: 2290,
      },
      {
        name: "STLY",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
    ],
    label: "abc",
    fill: "#5398d9",
    isXAxis: false,
    isYAxis: true,
    isRTG: false
  },
  {
    title: "Revenue",
    data: [
      {
        name: "BOB",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "BUD",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "LY",
        uv: 2000,
        pv: 8,
        amt: 2290,
      },
      {
        name: "STLY",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
    ],
    label: "abc",
    fill: "#1f4e78",
    isXAxis: false,
    isYAxis: true,
    isRTG: false
  },
  {
    title: "RevPAR",
    data: [
      {
        name: "BOB",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "BUD",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "LY",
        uv: 2000,
        pv: 8,
        amt: 2290,
      },
      {
        name: "STLY",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
    ],
    label: "abc",
    fill: "#9dc3e7",
    isXAxis: false,
    isYAxis: true,
    isRTG: false
  },
];


const RTGBarChart = [
  {
    title: "MTD RGI Performance",
    data: [
      {
        name: "Bar",
        uv: 15.5,
      },
      {
        name: "COR",
        uv: 1.3,
      },
      {
        name: "PROMO",
        uv: -1.2,
      },
      {
        name: "FIT",
        uv: 2.8,
      },
      {
        name: "GROUPS",
        uv: -1.4,
      },
    ],
    fill: "#f47926",
    isXAxis: true,
    isYAxis: true,
    isRTG: true,
    width: 400,
    height:300,
    barSize:20
  },

  {
    title: "RGI YoY Variance",
    data: [
      {
        name: "Bar",
        uv: 15.5,
      },
      {
        name: "COR",
        uv: 1.3,
      },
      {
        name: "PROMO",
        uv: -1.2,
      },
      {
        name: "FIT",
        uv: 2.8,
      },
      {
        name: "GROUPS",
        uv: -1.4,
      },
    ],
    fill: "#f47926",
    isXAxis: true,
    isYAxis: true,
    isRTG: true,
    width: 400,
    height:300,
    barSize:20
  },
]

const BarChartReferenceLine = [
  {
    title: "Room Nights",
    data: [
      {
        name: "Bar",
        uv: 64,
      },
      {
        name: "COR",
        uv: 32,
      },
      {
        name: "PROMO",
        uv: 46,
      },
      {
        name: "FIT",
        uv: 28,
      },
      {
        name: "GROUPS",
        uv: -12,
      },
    ],
    range: 198,
    fill : "#f47926",
    height:200
  },
  {
    title: "ADR",
    data: [
      {
        name: "Bar",
        uv: 2.8,
      },
      {
        name: "COR",
        uv: 1.3,
      },
      {
        name: "PROMO",
        uv: -2.2,
      },
      {
        name: "FIT",
        uv: 1.1,
      },
      {
        name: "GROUPS",
        uv: -1.1,
      },
    ],
    range: 2.6,
    height:200,
    fill : "#f47926"
  },
  {
    title: "Revenue",
    data: [
      {
        name: "Bar",
        uv: 15.5,
      },
      {
        name: "COR",
        uv: 1.3,
      },
      {
        name: "PROMO",
        uv: -1.2,
      },
      {
        name: "FIT",
        uv: 2.8,
      },
      {
        name: "GROUPS",
        uv: -1.4,
      },
    ],
    range: "19.4k",
    fill : "#f47926",
    height:200
  },
];

const pieChartData = [
  {
      title:"Booking Channel Mix",
      data:[
          { name: "Brand.com", value: 400 },
          { name: "OTA", value: 300 },
          { name: "GDS", value: 300 },
          { name: "Direct", value: 200 },
        ],
        color : ["#4d94d4", "#f48138", "#a5a5a5", "#fcc400"]
  },
  {
      title:"Geographic Origin of Business",
      data: [
          { name: "United kingdom", value: 500 },
          { name: "United States", value: 300 },
          { name: "Australia", value: 200 },
          { name: "France", value: 200 },
          { name: "Argentina", value: 100 },
          { name: "Germany", value: 70 },
          { name: "Spain", value: 60 },
          { name: "Switzerland", value: 50 },
          { name: "Netherlanda", value: 50 },
        ],
        color: [
          "#3a71b4",
          "#c03c38",
          "#9bc24b",
          "#7856a0",
          "#35a8c5",
          "#ff932e",
          "#234d7f",
          "#872522",
          "#69862a",
        ]
  }
]


const combi = {
  title: {
    text: "Combination chart",
  },
  xAxis: {
    categories: ["Mon", "Tue", "Wed", "thu", "Fri", "Sat", "Sun", "Total"],
  },
  labels: {
    items: [
      {
        html: "Total fruit consumption",
        style: {
          left: "50px",
          top: "18px",
          color: "black",
        },
      },
    ],
  },
  series: [
    {
      type: "column",
      name: "OCC TY",
      data: [50, 88, 74, 68, 67, 74, 43, 65],
    },
    {
      type: "column",
      name: "OCC LY",
      data: [64, 80, 76, 73, 64, 76, 43, 69],
    },
    {
      type: "spline",
      name: "Average",
      data: [3, 2.67, 3, 6.33, 3.33],
      marker: {
        lineWidth: 2,
        lineColor: "red",
        fillColor: "white",
      },
    },
  ],
};


const stackchart = {
  chart: {
    type: "bar",
  },
  title: {
    text: "OCC",
  },
  xAxis: {
    categories: ["BOB", "BUD", "LY", "STLY"],
    title: false,
  },
  yAxis: {
    min: 0,
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: "bold",
        color: "gray",
      },
    },
  },

  legend: {
    reversed: true,
    enabled: false,
  },
  plotOptions: {
    series: {
      stacking: "normal",
    },
    column: {
      stacking: "normal",
      dataLabels: {
        enabled: true,
      },
    },
  },
  series: [
    {
      name: "Joe",
      data: [76.1, 67.8, 61.0, 71.0],
    },
  ],
};


//Random Numbers
function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let elements = 27;
let data1 = [];
let data2 = [];
let data3 = [];

for (let i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(15000, 25000));
  data3.push(15000);
}

class HomeComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      graphList: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      graphList: graphStats.graphCard,
    });
  };

  getChart = (chartType: any) => {
    return (
      <>
        {
          chartType.name === "Business on the Books" ? (
            <TableForm />
          ) : chartType.name === "Key Business Metrics" ? (
            <Col xs={12} md={6}>
              <div className="main-title">Key Business Metrics</div>
              <Row className="row-inner">
                {barChartBusinessMetrics.map((key: any) => {
                  return <BarChartComponent barChart={key} />;
                })}
              </Row>
            </Col>
          ) : 
          chartType.name === "Room Nights" ? (
            <Col xs={12} md={12}>
            <div className="main-title">Pick up Since Yesterday</div>
            <Row className="row-inner">
          {  BarChartReferenceLine.map((key:any)=>{
             return <Col xs={12} md={4}>
              <BarChartReferenceLineComponent
                chartDetails={key}
              />
              </Col>
            })}
            </Row>
            </Col>
          )  : chartType.name === "Occupacy Statics" ? (
            <Col xs={12} md={12}>
            <Row>
            <ComposedChartComponent />
          </Row>
          </Col>
          )  : chartType.name === "Business Mix" ? (
            <BusinessMixComponent />
          ) : chartType.name === "Booking Channel Mix" ? (
            <Col xs={12} md={6}>
            <Row>
            {  pieChartData.map((key:any)=>{
             return <PieChartComponent
                chartDetails={key}
              />
            })}
            </Row>
            </Col>
          ) : chartType.name === "Room Type Statics" ?
          <ComposedChartStatics/>
          : chartType.name === "MTD RGI Performance" ?
          <Col xs={12} md={7}>
          <Row>
          {  RTGBarChart.map((key:any)=>{
            return  <Col xs={12} md={6}>
            <BarChartReferenceLineComponent
            chartDetails={key}
          />
          </Col>
           })}
           </Row>
           </Col>
          : chartType.name === "Pick up Since Yesterday" ?
          <HighChartComponent
          title={"Pick up Since Yesterday"}
          options={stackchart}
          />
          : chartType.name === "Pick up Since Yesterday1" ?
          <HighChartComponent
          title={"Pick up Since Yesterday"}
          options={combi}
          />
          : null
        }
      </>
    );
  };

  reorderListNew = (newOrderedList: any) => {
    console.log("newOrderedListnewOrderedList", newOrderedList);
    this.setState({ graphList: newOrderedList });
  };

  render() {
    const { graphList } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          {graphList && graphList.length ? (
            <ReactSortable
            group="groupName"
            animation={300}
              delay={2}
              list={graphList}
              className="w-100"
              setList={this.reorderListNew}
              swapThreshold={1}
              forceFallback
            >
              {graphList.map((chartConfig: any, index: number) => {
                return <>{this.getChart(chartConfig)}</>;
              })}
            </ReactSortable>
          ) : null}
        </Row>
      </div>
    );
  }
}

export default HomeComponent;
