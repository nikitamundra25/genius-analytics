import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";
// import { Pie, Line, } from 'react-chartjs-2';
import "./index.scss";
import { ReactSortable } from "react-sortablejs";
import graphStats from "./GraphStats.json";
import { TableForm } from "./TableForm";
import { BarChartComponent } from "./BarChart";
import { BarChartReferenceLineComponent } from "./BarChartsReferenceLine";
import { BarChartColumn } from "./BarChartcolumn";
import { ComposedChartComponent, ComposedChartStatics } from "./ComposedChart";
import { BusinessMixComponent } from "./BusinessMix";
import { PieChartComponent } from "./PieChart";
import { HighChartComponent } from "./HighChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const barChartBusinessMetrics = [
  {
    id: "1",
    title: "OCC",
    color: "#2e75b7",
    data : [
      { x: 'STLY', y: 71.0 }, 
      { x: 'LY', y: 61.0 },
      { x: 'BUD', y: 67.8 }, 
      { x: 'BOB', y: 76.1 }
  ],
  },
  {
    id: "2",
    title: "ADR",
    color: "#5398d9",
    data : [
      { x: 'STLY', y: 71.0 }, 
      { x: 'LY', y: 61.0 },
      { x: 'BUD', y: 67.8 }, 
      { x: 'BOB', y: 76.1 }
  ],
  },
  {
    id: "3",
    title: "Revenue",
    color: "#1f4e79",
    data : [
      { x: 'STLY', y: 71.0 }, 
      { x: 'LY', y: 61.0 },
      { x: 'BUD', y: 67.8 }, 
      { x: 'BOB', y: 76.1 }
  ],
  },
  {
    id: "4",
    title: "Revpar",
    color: "#9dc3e7",
    data : [
      { x: 'STLY', y: 71.0 }, 
      { x: 'LY', y: 61.0 },
      { x: 'BUD', y: 67.8 }, 
      { x: 'BOB', y: 76.1 }
  ],
  },
  
];

const RTGBarChart = [
  {
    id: "r1",
    title: "RGI",
    color: "#2e75b7",
    data : [
      { x: 'My RevPAR', y: 115.0 }, 
      { x: 'RevPAR Compact', y: 96.0 },
      { x: 'RG1', y: 119.8 }, 
      
  ],
  },
  {
    id: "r2",
    title: "MPI",
    color: "#5398d9",
    data : [
      { x: 'My OCC', y: 65.0 }, 
      { x: 'OCC Compact', y: 68.0 },
      { x: 'MP1', y: 96.8 }, 
  ],
  },
  {
    id: "r3",
    title: "ARI",
    color: "#1f4e79",
    data : [
      { x: 'My ARR', y: 175.0 }, 
      { x: 'ARR Compact', y: 140.0 },
      { x: 'AR1', y: 124.8 }, 
  ],
  },
  
];

const BarChartReferenceLine = [
  {
    id: "1",
    title: "Room Nights",
    color: "#f07623",
    data: [
      { x: "BAR", y: 64 },
      { x: "COR", y: 32 },
      { x: "PROMO", y: 46 },
      { x: "FIT", y: 28 },
      { x: "GROUPS", y: -12 },
    ],
  },
  {
    id: "2",
    title: "ADR",
    color: "#f07623",
    data: [
      { x: "BAR", y: 2.8 },
      { x: "COR", y: 1.2 },
      { x: "PROMO", y: -2.2 },
      { x: "FIT", y: 1.1 },
      { x: "GROUPS", y: -1.2 },
     
    ],
  },
  {
    id: "3",
    title: "Revenue",
    color: "#f07623",
    data: [
      { x: "BAR", y: 15.5 },
      { x: "COR", y: 1.3 },
      { x: "PROMO", y: -1.2 },
      { x: "FIT", y: 2.8 },
      { x: "GROUPS", y: -1.4 },

    ],
  },
];

const pieChartData = [
  {
    title: "Booking Channel Mix",
    data: [
      { name: "Brand.com", value: 400 },
      { name: "OTA", value: 300 },
      { name: "GDS", value: 300 },
      { name: "Direct", value: 200 },
    ],
    color: ["#4d94d4", "#f48138", "#a5a5a5", "#fcc400"],
  },
];

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
      startDate: new Date(),
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
        {chartType.name === "Business on the Books" ? (
          <TableForm />
        ) : chartType.name === "Key Business Metrics" ? (
          <Col xs={12} md={6}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Key Business Metrics</Card.Title>
                <div className="action-wrap">
                  <div className="action-btn ">
                    <span className="icon-grid"></span>
                  </div>
                  <div className="action-btn active">
                    <span className="icon-pie-chart"></span>
                  </div>
                </div>
              </Card.Header>
              
              <Row className="row-inner">
                {barChartBusinessMetrics.map((key: any) => {
                  return <BarChartComponent barChart={key} />;
                })}
              </Row>
              
            </Card>
          </Col>
        ) : chartType.name === "Room Nights" ? (
          <Col xs={12} md={6}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Pick up Since Yesterday</Card.Title>
                <div className="action-wrap">
                  <div className="action-btn ">
                    <span className="icon-grid"></span>
                  </div>
                  <div className="action-btn active">
                    <span className="icon-pie-chart"></span>
                  </div>
                </div>
              </Card.Header>

              <Row className="row-inner">
                {BarChartReferenceLine.map((key: any) => {
                  return (
                    <Col xs={12} md={4}>
                      <BarChartReferenceLineComponent chartDetails={key} />
                    </Col>
                  );
                })}
              </Row>
            </Card>
          </Col>
        ) : chartType.name === "Occupacy Statics" ? (
          <Col xs={12} md={6}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Occupacy Statics</Card.Title>
                <div className="action-wrap">
                  <div className="action-btn ">
                    <span className="icon-grid"></span>
                  </div>
                  <div className="action-btn active">
                    <span className="icon-pie-chart"></span>
                  </div>
                </div>
              </Card.Header>
              <Row className="row-inner">
                <ComposedChartComponent />
              </Row>
            </Card>
          </Col>
        ) : chartType.name === "Business Mix" ? (
          <BusinessMixComponent />
        ) : chartType.name === "Room Type Statics" ? (
          <ComposedChartStatics />
        )  : chartType.name === "Booking Channel Mix" ? (
          <Col xs={12} md={6}>
            
              {pieChartData.map((key: any) => {
                return <PieChartComponent chartDetails={key} />;
              })}
           
          </Col>
        ) : chartType.name === "Geographic Origin of business" ? (
          <Col xs={12} md={6}>
           <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Geographic Origin of business</Card.Title>
                
              </Card.Header>
              <Card.Body></Card.Body>
            </Card>
              {/* {pieChartData.map((key: any) => {
                return <PieChartComponent chartDetails={key} />;
              })} */}
            
          </Col>
        ): chartType.name === "MTD RGI Performance" ? (
          <Col xs={12} md={12}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>MTD RGI Performance</Card.Title>
                
              </Card.Header>
              <Card.Body>
                <Row>
                {/* {RTGBarChart.map((key: any) => {
                  return (
                    
                      <BarChartColumn chartDetails1={key} />
                      // <BarChartReferenceLineComponent chartDetails={key} />
                    
                  );
                })} */}
              </Row>
              </Card.Body>
            </Card>
            
          </Col>
        ) : chartType.name === "RGI YoY Variance" ? (
          <Col xs={12} md={5}>
            
              {/* {RTGBarChart.map((key: any) => {
                return (
                  <></>
                    // <BarChartReferenceLineComponent chartDetails={key} />
                  
                );
              })} */}
            
          </Col>
        )   : null}
      </>
    );
  };

  reorderListNew = (newOrderedList: any) => {
    this.setState({ graphList: newOrderedList });
  };

  render() {
    const { graphList, startDate } = this.state;

    return (
      <div className="animated fadeIn">
        {graphList && graphList.length ? (
          <ReactSortable
            group="groupName"
            animation={300}
            delay={2}
            list={graphList}
            className="row"
            setList={this.reorderListNew}
            swapThreshold={1}
            forceFallback
          >
            {graphList.map((chartConfig: any, index: number) => {
              return <>{this.getChart(chartConfig)}</>;
            })}
          </ReactSortable>
        ) : null}
      </div>
    );
  }
}

export default HomeComponent;
