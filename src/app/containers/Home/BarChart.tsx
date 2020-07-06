import React from "react";
import { Card, Row ,Col} from "react-bootstrap";
import {
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    YAxis,
    XAxis
  } from "recharts";

export const BarChartComponent = (props:any) => {
    const ADRdata = [
        {
          name: "BOB",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "BUD",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "LY",
          uv: 2000,
          pv: 8,
          amt: 2290,
        },
        {
          name: "STLY",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
      ];
      const OCCdata = [
        {
          name: "BOB",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "BUD",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "LY",
          uv: 2000,
          pv: 8,
          amt: 2290,
        },
        {
          name: "STLY",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
      ];
    
      const Revenuedata = [
        {
          name: "BOB",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "BUD",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "LY",
          uv: 2000,
          pv: 8,
          amt: 2290,
        },
        {
          name: "STLY",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
      ];

      const RevPardata = [
        {
          name: "BOB",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "BUD",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "LY",
          uv: 2000,
          pv: 8,
          amt: 2290,
        },
        {
          name: "STLY",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
      ];

      const barChartBusinessMetrics = [
        {
            title: "OCC",
            data: OCCdata,
            label: "abc",
            fill: "#2e75b7",
            isXAxis: true,
            isYAxis: true
          },
          {
            title: "ADR",
            data: ADRdata,
            label: "abc",
            fill: "#5398d9",
            isXAxis: false,
            isYAxis: true
          },
          {
            title: "Revenue",
            data: Revenuedata,
            label: "abc",
            fill:"#1f4e78",
            isXAxis: false,
            isYAxis: true
          },
          {
            title: "RevPAR",
            data: RevPardata,
            label: "abc",
            fill:"#9dc3e7",
            isXAxis: false,
            isYAxis: true
          },
      ]
      const {barChart} = props;
  return (
      <Col xs={12} md={3}>
        
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
        
      </Col>
   
  );
}
