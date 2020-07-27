import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

export default (props: any) => {
  const {graphdata}= props;

  const BarChartData = [
    {
      id: "business-card-percent",
      chartSettings: {
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
        title: "Business Mix %",
        tooltip: { enable: false },
      },
      title: "Business Mix %",
      color: "#5b9cd6",
      data: graphdata[0].data,
    },
    {
      id: "business-card-adr",
      chartSettings: {
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
        title: "Business Mix ADR",
        tooltip: { enable: false },
      },
      title: "Business Mix ADR",
      color: "#4473c5",
      data: graphdata[1].data,
    },
  ];


  return (
    <>
      <Card>
        <WidgetHeader title={"Business Mix"} activeToggle={"graph"} />
        <Card.Body>
          
            <Row className="row-inner">
              { BarChartData && BarChartData.length ? 
              BarChartData.map((key: any, index: number) => {
                return (
                  <Col xs={12} md={6} key={index}>
                    
                      <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
                        <BarChartComponent
                          id={key.id}
                          chartSettings={key.chartSettings}
                          title={key.title}
                          color={key.color}
                          data={key.data}
                        />
                      </React.Suspense>
                    
                  </Col>
                );
              }): null}
            </Row>
          
        </Card.Body>
      </Card>
    </>
  );
};
