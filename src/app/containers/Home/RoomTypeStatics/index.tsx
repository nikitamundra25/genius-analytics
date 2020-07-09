import React from "react";
import { Card } from "react-bootstrap";
import {
  ResponsiveContainer,
  Legend,
  Tooltip,
  Bar,
  XAxis,
  Line,
  ComposedChart,
} from "recharts";

const compdata2 = [
  {
    name: "0BRM",
    OCCTY: 50,
    OCCLY: 64,
    ADRLY: 134,
    ADRTY: 111,
  },
  {
    name: "1BRM",
    OCCTY: 88,
    OCCLY: 80,
    ADRLY: 157,
    ADRTY: 169,
  },
  {
    name: "2BRM",
    OCCTY: 74,
    OCCLY: 76,
    ADRLY: 257,
    ADRTY: 231,
  },
];
export default (props: any) => {
  return (
    <>
      <Card>
        <Card.Header className='d-flex align-items-center justify-content-between'>
          <Card.Title>Room Type Statics</Card.Title>
          <div className='action-wrap'>
            <div className='action-btn '>
              <span className='icon-grid'></span>
            </div>
            <div className='action-btn active'>
              <span className='icon-pie-chart'></span>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <div style={{ width: "100%", height: 250 }}>
            <ResponsiveContainer>
              <ComposedChart height={"250px"} data={compdata2}>
                <XAxis dataKey='name' />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey='OCCTY'
                  barSize={20}
                  fill='#a1c6d6'
                  padding={{ left: 10, right: 10 }}
                />
                <Bar
                  dataKey='OCCLY'
                  barSize={20}
                  fill='#65adc5'
                  padding={{ left: 10, right: 10 }}
                />
                <Line type='monotone' dataKey='ADRTY' stroke='#1b4479' />
                <Line
                  type='monotone'
                  dataKey='ADRLY'
                  stroke='#05234e'
                  strokeDasharray='25 10'
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
