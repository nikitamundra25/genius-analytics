import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

export default ({ graphdata = [] }: any) => {
  const RTGBarChart = [
    {
      // id: "r1",
      // title: "RGI",
      // color: "#2e75b7",
      // data: graphdata[0].data,
      charts: {
        dataSource: graphdata[0].data,
        xName: "x",
        yName: "y1",
        type: "Bar",
        fill: "#2e75b7",
        name: "RGI",
        width: 1,
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
      },
    },
    {
      // id: "r2",
      // title: "MPI",
      // color: "#5398d9",
      // data: graphdata[1].data,
      charts: {
        dataSource: graphdata[1].data,
        xName: "x",
        yName: "y1",
        type: "Bar",
        fill: "#5398d9",
        name: "MPI",
        width: 1,
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
      },
    },
    {
      // id: "r3",
      // title: "ARI",
      // color: "#1f4e79",
      // data: graphdata[2].data,
      charts: {
        dataSource: graphdata[2].data,
        xName: "x",
        yName: "y1",
        type: "Bar",
        fill: "#1f4e79",
        name: "ARI",
        width: 1,
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
      },
    },
  ];

  return (
    <Card>
      <WidgetHeader title={"MTD RGI Performance"} />
      <Card.Body>
        <Row className="row-inner">
          {RTGBarChart && RTGBarChart.length
            ? RTGBarChart.map((key: any, index: number) => {
                return (
                  <Col sm={4} md={4}>
                    <React.Suspense
                      fallback={
                        <div className="card-loader">
                          <Loader />
                        </div>
                      }
                    >
                      <MixedCharts
                        id={`mix-${index}`}
                        charts={[key.charts]}
                        legend = {false}
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
                      />

                      {/* <BarChartComponent
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
                    title: key.title,
                    tooltip: { enable: true },
                  }}
                  key={index}
                  {...key}
                /> */}
                    </React.Suspense>
                  </Col>
                );
              })
            : null}
        </Row>
      </Card.Body>
    </Card>
  );
};
