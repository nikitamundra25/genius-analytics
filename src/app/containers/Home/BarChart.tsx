import React from "react";
import { Card,Col} from "react-bootstrap";
import {
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    YAxis,
    XAxis
  } from "recharts";

export const BarChartComponent = (props:any) => {
      const {barChart} = props;
  return (
      <Col xs={12} md={3}>
        <Card>
          <Card.Header>
  <Card.Title>{barChart.title}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart
                  // width={200}
                  // height={300}
                  data={barChart.data}
                  layout="vertical"
                  // margin={{
                  //   top: 5, right: 30, left: 20, bottom: 5,
                  // }}
                  barSize={20}
                  barCategoryGap={40}
                >
                  {/* <CartesianGrid strokeDasharray="1 1" /> */}
                 {barChart.isXAxis ? 
                  <XAxis type="number" />
                  :""}
                  <YAxis type="category" dataKey="name" />
                  <Tooltip />
                  <Bar dataKey="uv" fill={barChart.fill}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* <HighchartsReact highcharts={Highcharts} options={stackchart} /> */}
          </Card.Body>
        </Card>
      </Col>
   
  );
}