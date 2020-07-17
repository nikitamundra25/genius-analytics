import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import WidgetHeader from "../../../components/WidgetHeader";
import Loader from "../../../components/Loader/Loader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);

export default (props: any) => {
  const {graphdata}= props;
  
  return (
    <>
      <Card>
        <WidgetHeader title={"Business Mix"} activeToggle={"graph"} />
        <Card.Body>
          
            <Row className="row-inner">
              { graphdata && graphdata.length ? 
              graphdata.map((key: any, index: number) => {
                return (
                  <Col xs={12} md={6} key={index}>
                    
                      <React.Suspense fallback={<Loader />}>
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
