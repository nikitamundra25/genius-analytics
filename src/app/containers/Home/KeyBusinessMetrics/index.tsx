import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

const KeyBusinessMetrics = ({ graphdata = [] }:any) => {
  return (
    <Card>
      <WidgetHeader title={"Key Business Metrics"} activeToggle={"graph"} />
      <Card.Body>
      <Row className='row-inner'>
        {graphdata && graphdata.length ? 
        graphdata.map((key: any, index: number) => {
          return (
            <Col key={index} sm={3} md={3}>
              <div className="w-100">
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
                    tooltip: { enable: true,  position: 'LeftTop' },
                  }}
                  {...key}
                />
              </React.Suspense>
              </div>
            </Col>
          );
        }): null}
      </Row>
     </Card.Body>
    </Card>
  );
};

export default KeyBusinessMetrics;
