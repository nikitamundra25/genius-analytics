import React  from "react";
import { Card, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const ColumnChart = React.lazy(() =>
  import("../../../components/Charts/ColumnChart")
);


const PickupSinceYesterday = ({ graphdata = [] }:any) => {
  return (
    <Card>
      <WidgetHeader title={"Pick up Since Yesterday"} activeToggle={"graph"} />

      <Card.Body>
        <Row className='row-inner'>
          {graphdata && graphdata.length ? 
          graphdata.map((key: any, index: number) => {
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
          }):null}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PickupSinceYesterday;
