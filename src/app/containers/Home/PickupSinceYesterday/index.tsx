import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const ColumnChart = React.lazy(() =>
  import("../../../components/Charts/ColumnChart")
);

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
    range: "198",
    arrowClass: "cui-arrow-top",
    textClass: "text-success",
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
    range: "2.6",
    arrowClass: "cui-arrow-bottom",
    textClass: "text-danger",
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
    range: "19.4 k",
    arrowClass: "cui-arrow-top",
    textClass: "text-success",
  },
];
const PickupSinceYesterday: React.FC = (): JSX.Element => {
  return (
    <Card>
      <WidgetHeader title={"Pick up Since Yesterday"} activeToggle={"graph"} />

      <Card.Body>
        <Row className='row-inner'>
          {BarChartReferenceLine.map((key: any, index: number) => {
            return (
              <Col xs={12} md={4} key={index}>
                <div className="pickup-card">
                  <div  className="text-left range-text">
                    <div className="sub-inner-title">{key.title}</div>
                    {key.range ? (
                      <div className={`${key.textClass} h3  pt-2`}>
                        <i className={`${key.arrowClass}`}></i> {key.range}
                      </div>
                    ) : null}
                  </div>
                
               
                
                  <React.Suspense fallback={<Loader />}>
                    <ColumnChart
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
                        //title: key.title,
                      }}
                    />
                  </React.Suspense>
                </div>
              </Col>
            );
          })}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PickupSinceYesterday;
