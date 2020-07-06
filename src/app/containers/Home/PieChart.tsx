import React from "react";
import { Card,Col} from "react-bootstrap";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Legend,
    Cell,
    Tooltip,
  } from "recharts";

export const PieChartComponent = (props:any) => {
 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      percent,
      index,
    }: any) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text
          x={x}
          y={y}
          fill="black"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };
      
const {chartDetails} = props;
  return (
    <Col xs={12} md={6}>
    <Card>
      <Card.Header className="d-flex align-items-center justify-content-between">
        <Card.Title>{chartDetails.title} </Card.Title>
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
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={chartDetails.data}
                // cx={400}
                // cy={400}
                // midAngle={20}
                labelLine={false}
                label={renderCustomizedLabel}
                // outerRadius={90}
                innerRadius={5}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={5}
              >
                {chartDetails.data.map((entry:any, index:any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      chartDetails.color[index % chartDetails.color.length]
                    }
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card.Body>
    </Card>
  </Col>
   
  );
}