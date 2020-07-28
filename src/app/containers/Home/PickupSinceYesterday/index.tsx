import React  from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const PickupSinceYesterday = ({ graphdata = [] }:any) => {

  // const BarChartReferenceLine = [
  //   {
  //     id: "1",
  //     title: "Room Nights",
  //     color: "#f07623",
  //     data: graphdata[0].data,
  //     range: "198",
  //     arrowClass: "cui-arrow-top",
  //     textClass: "text-success",
  //   },
  //   {
  //     id: "2",
  //     title: "ADR",
  //     color: "#f07623",
  //     data: graphdata[1].data,
  //     range: "2.6",
  //     arrowClass: "cui-arrow-bottom",
  //     textClass: "text-danger",
  //   },
  //   {
  //     id: "3",
  //     title: "Revenue",
  //     color: "#f07623",
  //     data: graphdata[2].data,
  //     range: "19.4 k",
  //     arrowClass: "cui-arrow-top",
  //     textClass: "text-success",
  //   },
  // ];

  const BarChartReferenceLine = [
    {
      id: "1",
      title: "Room Nights",
      range: "198",
      arrowClass: "cui-arrow-top",
      textClass: "text-success",
      charts: {
        dataSource: graphdata[0].data,
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "#f07623",
        name: "RGI",
        width: 1,
        cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 7, topRight: 7 },
        marker: {
          dataLabel: {
            visible: true,
            rx: 10,
            ry: 10,
            font: {
              fontWeight: "600",
              color: "#000",
            },
          },
        },
      },
    },
    {
      id: "2",
      title: "ADR",
      range: "2.6",
      arrowClass: "cui-arrow-bottom",
      textClass: "text-danger",
      charts: {
        dataSource: graphdata[1].data,
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "#f07623",
        name: "MPI",
        width: 1,
        cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 7, topRight: 7 },
        marker: {
          dataLabel: {
            visible: true,
            rx: 10,
            ry: 10,
            font: {
              fontWeight: "600",
              color: "#000",
            },
          },
        },
      },
    },
    {
      id: "3",
      title: "Revenue",
      range: "19.4 k",
      arrowClass: "cui-arrow-top",
      textClass: "text-success",
      charts: {
        dataSource: graphdata[2].data,
        xName: "x",
        yName: "y",
        type: "Column",
        fill: "#f07623",
        name: "ARI",
        width: 1,
        cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 7, topRight: 7 },
        marker: {
          dataLabel: {
            visible: true,
            rx: 10,
            ry: 10,
            font: {
              fontWeight: "600",
              color: "#000",
            },
          },
        },
      },
    },
  ];

  return (
    <Card>
      <WidgetHeader title={"Pick up Since Yesterday"} activeToggle={"graph"} />

      <Card.Body>
        <Row className='row-inner'>
          {BarChartReferenceLine && BarChartReferenceLine.length ? 
          BarChartReferenceLine.map((key: any, index: number) => {
            return (
              <Col xs={12} md={4} key={index}>
                <div className="pickup-card">
                  <div  className="text-left range-text">
                    <div className="sub-inner-title">{key.title}</div>
                    {key.range ? (
                      <div className={`${key.textClass} h3  pt-2 mb-0`}>
                        <i className={`${key.arrowClass}`}></i> {key.range}
                      </div>
                    ) : null}
                  </div>
 
                  <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
                    <MixedCharts
                        id={`pickup-${index}`}
                        charts={[key.charts]}
                        legend = {false}
                        chartSettings={{
                          width: "100%",
                          height: "200px",
                          
                          chartArea:{ border: { width: 0 } },
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
                            visible:false,
                          },
                         
                          tooltip: { enable: true },
                          //title: key.title,
                        }}
                      />
                    {/* <ColumnChart
                      {...key}
                      chartSettings={{
                        primaryXAxis: {
                          valueType: "Category",
                          interval: 1,
                          majorGridLines: { width: 0 },
                        },
                        primaryYAxis: {
                          majorGridLines: { width: 0 },
                          majorTickLines: { width: 0 },
                          lineStyle: { width: 0 },
                          labelStyle: { color: "transparent" },
                        },
                        tooltip: { enable: true },
                        marker: {
                          dataLabel: {
                            visible: true,
                            position:"Middle",
                            // rx: 10,
                            // ry: 10,
                            font: {
                              fontWeight: "600",
                              color: "#000",
                            },
                          },
                        },
                        //title: key.title,
                      }}
                    /> */}
                  </React.Suspense>
                </div>
              </Col>
            );
          }):null}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PickupSinceYesterday;
