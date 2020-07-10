import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const Monthlydailydata = [
  {
    name: "1",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "2",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "3",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "4",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "5",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "6",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "7",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "8",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "9",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "10",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "11",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "12",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "13",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "14",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "15",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "16",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "17",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "18",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "19",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "20",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "21",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "22",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "23",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "24",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "25",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "26",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "27",
    OCC: 88,
    ADR: 80,
  },
  {
    name: "28",
    OCC: 74,
    ADR: 76,
  },
  {
    name: "29",
    OCC: 50,
    ADR: 64,
  },
  {
    name: "30",
    OCC: 88,
    ADR: 80,
  },
];

const Monthlydailytotaldata = [
  {
    name: "WE",
    OCC: 90,
    ADR: 64,
  },
  {
    name: "WD",
    OCC: 86,
    ADR: 80,
  },
  {
    name: "Total",
    OCC: 88,
    ADR: 76,
  },
];
const Charts1 = [
  {
    dataSource: Monthlydailydata,
    xName: "name",
    yName: "OCC",
    type: "Column",
    fill: "#2b588f",
    name: "OCC",
    width: 1,
    
  },
  {
    dataSource: Monthlydailydata,
    xName: "name",
    yName: "ADR",
    type: "Line",
    fill: "#e46d09",
    name: "ADR",
    width: 2,
    marker: {
      visible: false,
      width: 10,
      height: 10,
      fill: "#2f5891",
      border: { width: 1, color: "#e46d09" },
      dataLabel: {
        visible: false,
        position: "Top",
        font: {
          fontWeight: "600",
          color: "#000000",
        },
      },
    },
  },
];

const Charts2 = [
  {
    dataSource: Monthlydailytotaldata,
    xName: "name",
    yName: "OCC",
    type: "Column",
    fill: "#2b588f",
    name: "OCC",
    width: 1,
  },
  {
    dataSource: Monthlydailytotaldata,
    xName: "name",
    yName: "ADR",
    type: "Line",
    fill: "#e46d09",    
    name: "ADR",
    width: 2,
    marker: {
      visible: false,
      width: 10,
      height: 10,
      fill: "#2f5891",
      border: { width: 1, color: "#e46d09" },
      dataLabel: {
        visible: true,
        position: "Bottom",
        font: {
          fontWeight: "600",
          color: "#ffffff",
        },
      },
    },
  },
];

const MonthlyDailyOccupacy: React.FC = (): JSX.Element => {

  
  return (
    <Card>
       <WidgetHeader title={"Monthly Daily Occupacy & ADR"} activeToggle={"graph"} />
      {/* <Card.Header className='d-flex align-items-center justify-content-between'>
        <Card.Title>Monthly Daily Occupacy & ADR</Card.Title>
        <div className='action-wrap'>
          <div className='action-btn active'>
            <span className='icon-grid'></span>
          </div>
          <div className='action-btn'>
            <span className='icon-pie-chart'></span>
          </div>
        </div>
      </Card.Header> */}
      <Card.Body>
      <Row>
        <Col xs={12} md={9}>
        <React.Suspense fallback={<Loader />}>
              <MixedCharts
                id={"line-and-column"}
                chartSettings={{
                  primaryXAxis: {
                    valueType: "Category",
                    interval: 1,
                    majorGridLines: { width: 0 },
                  },
                  primaryYAxis: {
                    labelFormat: "{value}%",
                    edgeLabelPlacement: "Shift",
                    majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 },
                    lineStyle: { width: 0 },
                    labelStyle: {
                      color: "transparent",
                    },
                  },
                  tooltip: { enable: true },
                }}
                charts={Charts1}
              />
            </React.Suspense>
        {/* <ChartComponent
                      id={"occChart1"}
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
                      height={"250px"}
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={Monthlydailydata}
                          xName='name'
                          yName='OCC'
                          type='Column'
                          fill={"#2b588f"}
                          name={"OCC"}
                          width={1}
                          marker={{
                            dataLabel: {
                              visible: true,
                              position: "Middle",
                              font: {
                                fontWeight: "600",
                                color: "#ffffff",
                              },
                            },
                          }}></SeriesDirective>
                         
                          <SeriesDirective
                          dataSource={Monthlydailydata}
                          xName='name'
                          yName='ADR'
                          type='Line'
                          fill={"#e46d09"}
                          name={"ADR"}
                          width={2}
                          marker={{
                            visible: false,
                            height: 10, 
                            width: 10,
                            // shape: 'Pentagon',
                            border: { width: 2, color: '#e46d09' } ,
                            
                          }}></SeriesDirective>
                         
                         
                      </SeriesCollectionDirective>
                    </ChartComponent> */}
        </Col>
        <Col xs={12} md={3}>
        <React.Suspense fallback={<Loader />}>
              <MixedCharts
                id={"occChart2"}
                chartSettings={{
                  primaryXAxis: {
                    valueType: "Category",
                    interval: 1,
                    majorGridLines: { width: 0 },
                  },
                  primaryYAxis: {
                    labelFormat: "{value}%",
                    edgeLabelPlacement: "Shift",
                    majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 },
                    lineStyle: { width: 0 },
                    labelStyle: {
                      color: "transparent",
                    },
                  },
                  tooltip: { enable: true },
                }}
                charts={Charts2}
              />
            </React.Suspense>
        {/* <ChartComponent
                      id={"occChart2"}
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
                      height={"250px"}
                      tooltip={{ enable: true }}>
                      <Inject services={[ColumnSeries, LineSeries ,DataLabel, Category, Tooltip]} />
                      <SeriesCollectionDirective>
                        <SeriesDirective
                          dataSource={Monthlydailytotaldata}
                          xName='name'
                          yName='OCC'
                          type='Column'
                          fill={"#2b588f"}
                          name={"OCC "}
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
                          dataSource={Monthlydailytotaldata}
                          xName='name'
                          yName='ADR'
                          type='Line'
                          fill={"#e46d09"}
                          name={"ADR "}
                          width={2}
                          marker={{
                            visible: false,
                            width: 10, 
                            height: 10, 
                            border: { width: 2, color: '#e46d09' } ,
                            dataLabel: {
                              visible: true,
                              position: "Bottom",
                              font: {
                                fontWeight: "600",
                                color: "#ffffff",
                              },
                            },
                          }}></SeriesDirective>
                         
                         
                      </SeriesCollectionDirective>
                    </ChartComponent> */}
                    
        </Col>
      </Row>
     </Card.Body>
    </Card>
  );
};

export default MonthlyDailyOccupacy;
