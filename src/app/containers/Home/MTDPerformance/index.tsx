import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);


export default ({ graphdata = [] }:any) => {
  return (
    <Card>
      <WidgetHeader title={"MTD RGI Performance"} />
      <Card.Body>
        <Row>
          { graphdata && graphdata.length ? 
          graphdata.map((key: any, index: number) => {
            return (
              <Col key={index} sm={4} md={4}>
                <React.Suspense fallback={<Loader />}>
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
