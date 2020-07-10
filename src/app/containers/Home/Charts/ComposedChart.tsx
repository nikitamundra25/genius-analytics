import React from "react";
import { Card, Col } from "react-bootstrap";
import {
  ResponsiveContainer,
  Legend,
  Tooltip,
  Bar,
  XAxis,
  Line,
  ComposedChart,
} from "recharts";

export default (props: any) => {
  const compdata = [
    {
      name: "Midweek OCC",
      TY: 73,
      LY: 71,
      Var: 73,
    },
    {
      name: "Weekend OCC",
      TY: 65,
      LY: 73,
      Var: 11,
    },
    {
      name: "Total OCC",
      TY: 69,
      LY: 72,
      Var: 43,
    },
  ];
  const compdata1 = [
    {
      name: "Mon",
      OCCTY: 50,
      OCCLY: 64,
      ADRLY: 185,
      ADRTY: 195,
    },
    {
      name: "Tue",
      OCCTY: 88,
      OCCLY: 80,
      ADRLY: 202,
      ADRTY: 207,
    },
    {
      name: "Wed",
      OCCTY: 74,
      OCCLY: 76,
      ADRLY: 184,
      ADRTY: 194,
    },
    {
      name: "Thu",
      OCCTY: 68,
      OCCLY: 73,
      ADRLY: 176,
      ADRTY: 196,
    },
    {
      name: "Fri",
      OCCTY: 67,
      OCCLY: 64,
      ADRLY: 155,
      ADRTY: 156,
    },
    {
      name: "Sat",
      OCCTY: 74,
      OCCLY: 76,
      ADRLY: 143,
      ADRTY: 150,
    },
    {
      name: "Sun",
      OCCTY: 63,
      OCCLY: 43,
      ADRLY: 157,
      ADRTY: 172,
    },
    {
      name: "Total",
      OCCTY: 45,
      OCCLY: 69,
      ADRLY: 170,
      ADRTY: 175,
    },
  ];

  return (
    <>
      <Col xs={12} md={6}>
        <Card.Body>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <ComposedChart height={"250px"} data={compdata1}>
                {/* <CartesianGrid stroke="#f5f5f5" /> */}
                <XAxis dataKey='name' />
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                <Bar
                  dataKey='OCCTY'
                  barSize={20}
                  fill='#244d81'
                  padding={{ left: 10, right: 10 }}
                />
                <Bar
                  dataKey='OCCLY'
                  barSize={20}
                  fill='#4f81bc'
                  padding={{ left: 10, right: 10 }}
                />
                <Line
                  type='monotone'
                  dataKey='ADRTY'
                  stroke='#202c47'
                  strokeDasharray='2 2'
                />
                <Line
                  type='monotone'
                  dataKey='ADRLY'
                  stroke='#81cbe8'
                  strokeDasharray='25 10'
                />
                {/* <Scatter dataKey="cnt" fill="red" /> */}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card.Body>
        {/* </Card> */}
      </Col>
      <Col xs={12} md={6}>
        {/* <Card>
                  <Card.Header className="d-flex align-items-center justify-content-between">
                    <Card.Title>Occupacy Statics</Card.Title>
                    <div className="action-wrap">
                      <div className="action-btn ">
                        <span className="icon-grid"></span>
                      </div>
                      <div className="action-btn active">
                        <span className="icon-pie-chart"></span>
                      </div>
                    </div>
                  </Card.Header> */}
        <Card.Body>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <ComposedChart
                // width={500}
                height={300}
                data={compdata}
                // margin={{
                //   top: 20, right: 20, bottom: 20, left: 20,
                // }}
              >
                {/* <CartesianGrid stroke="#f5f5f5" /> */}
                <XAxis dataKey='name' />
                {/* <YAxis /> */}
                <Tooltip />
                <Legend />
                {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                <Bar
                  dataKey='TY'
                  barSize={20}
                  fill='#8293b1'
                  padding={{ left: 10, right: 10 }}
                />
                <Bar
                  dataKey='LY'
                  barSize={20}
                  fill='#3269aa'
                  padding={{ left: 10, right: 10 }}
                />
                <Line
                  type='monotone'
                  dataKey='Var'
                  stroke='#2f5891'
                  strokeDasharray='5 5'
                />
                {/* <Line type="monotone" dataKey="amt" stroke="#ff7300" strokeDasharray="5 5"/> */}
                {/* <Scatter dataKey="cnt" fill="red" /> */}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card.Body>
        {/* </Card> */}
      </Col>
    </>
  );
};
