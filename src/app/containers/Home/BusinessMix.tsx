import React from "react";
import { Card, Row ,Col} from "react-bootstrap";
import {
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
  } from "recharts";
  
export const BusinessMixComponent = (props:any) => {
    const Businessdata = [
        {
          name: "FIT",
          uv: 14,
        },
        {
          name: "Leisure Group",
          uv: 13,
        },
        {
          name: "Cor Group",
          uv: 8,
        },
        {
          name: "Corporate",
          uv: 15,
        },
        {
          name: "Discount",
          uv: 27,
        },
        {
          name: "BAR",
          uv: 23,
        },
      ];
      
      const BusinessADRdata = [
        {
          name: "FIT",
          uv: 111.0,
        },
        {
          name: "Leisure Group",
          uv: 115.0,
        },
        {
          name: "Cor Group",
          uv: 132.33,
        },
        {
          name: "Corporate",
          uv: 144.32,
        },
        {
          name: "Discount",
          uv: 127.32,
        },
        {
          name: "BAR",
          uv: 150.55,
        },
      ];
  return (

<>
<Col xs={12} md={6}>
            <Card>
              <Card.Header className="d-flex align-items-center justify-content-between">
                <Card.Title>Business Mix</Card.Title>
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
                <Row>
                  <Col xs={12} md={6}>
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer>
                        <BarChart
                          // width={200}
                          // height={300}
                          data={Businessdata}
                          layout="vertical"
                          // margin={{
                          //   top: 5, right: 30, left: 20, bottom: 5,
                          // }}
                          barSize={15}
                        >
                          {/* <CartesianGrid strokeDasharray="1 1" /> */}
                          <XAxis type="number" />
                          <YAxis type="category" dataKey="name" />
                          <Tooltip />
                          <Bar dataKey="uv" fill="#2e75b7" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Col>

                  <Col xs={12} md={6}>
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer>
                        <BarChart
                          // width={200}
                          // height={300}
                          data={BusinessADRdata}
                          layout="vertical"
                          // margin={{
                          //   top: 5, right: 30, left: 20, bottom: 5,
                          // }}
                          barSize={15}
                        >
                          {/* <CartesianGrid strokeDasharray="1 1" /> */}
                          <XAxis type="number" />
                          <YAxis type="category" dataKey="name" />
                          <Tooltip />
                          <Bar dataKey="uv" fill="#2e75b7" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          </>
           );
        };