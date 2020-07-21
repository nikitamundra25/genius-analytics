import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);


export default ({ graphdata = [] }:any) => {

  const RTGBarChart = [
    {
      id: "r1",
      title: "RGI",
      color: "#2e75b7",
      data:graphdata[0].data
    },
    {
      id: "r2",
      title: "MPI",
      color: "#5398d9",
      data: graphdata[1].data
    },
    {
      id: "r3",
      title: "ARI",
      color: "#1f4e79",
      data: graphdata[2].data
    },
  ];

  return (
    <Card>
      <WidgetHeader title={"MTD RGI Performance"} />
      <Card.Body>
        <Row className="row-inner">
          { RTGBarChart && RTGBarChart.length ? 
          RTGBarChart.map((key: any, index: number) => {
            return (
              <Col key={index} sm={4} md={4}>
                <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
                <BarChartComponent
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
                />
                  
                </React.Suspense>
              </Col>
            );
          }) :null }
        </Row>
      </Card.Body>
    </Card>
  );
};
