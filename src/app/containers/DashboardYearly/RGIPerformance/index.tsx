import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const ColumnChart = React.lazy(() =>
  import("../../../components/Charts/ColumnChart")
);

export default ({ graphdata = [] }: any) => {
  const RGIBarChart = [
    {
      id: "r1",
      color: "#244d7b",
      data: graphdata[0].data,
    },
    {
      id: "r2",
      color: "#3873b7",
      data: graphdata[1].data,
    },
    {
      id: "r3",
      color: "#99c0eb",
      data: graphdata[2].data,
    },
  ];

  return (
    <Card>
      <WidgetHeader title={"RGI Performance - YTD"} />
      <Card.Body>
        <Row className="row-inner">
          {RGIBarChart.map((key: any, index: number) => {
            return (
              <Col key={index} sm={4} md={4}>
                <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
                  <ColumnChart
                    chartSettings={{
                      primaryXAxis: {
                        valueType: "Category",
                        interval: 1,
                        majorGridLines: { width: 0 },
                      },
                      primaryYAxis: {
                        labelFormat: "{value}",
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
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};
