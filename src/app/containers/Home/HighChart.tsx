import React from "react";
import { Card, Col } from "react-bootstrap";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const HighChartComponent = (props: any) => {
  const { title ,options} = props;
  return (
    <>
   
   <Col xs={12} md={4}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>{title} </Card.Title>
                <div className="action-wrap">
                  <div className="action-btn ">
                    <span className="icon-grid"></span>
                  </div>
                  <div className="action-btn active">
                    <span className="icon-pie-chart"></span>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <div>
                  <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
              </Card.Body>
            </Card>
          </Col>
    
    </>
  );
};
