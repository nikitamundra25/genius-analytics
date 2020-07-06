import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  ReferenceLine,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area,
  ComposedChart,
  Scatter,
  LabelList,
} from "recharts";

export const BarChartReferenceLineComponent = (props: any) => {
  const { chartDetails } = props;
  return (
    <>
   
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
            {chartDetails.range ? (
              <div className="text-success h3">
                <i className="cui-arrow-top "></i> {chartDetails.range}
              </div>
            ) : null}
            <div style={{ width: "100%", height: chartDetails.height }}>
              <ResponsiveContainer>
                <BarChart
                  width={chartDetails.width}
                  height={chartDetails.height}
                  data={chartDetails.data}
                  barSize={chartDetails.barSize ? chartDetails.barSize : 15}
                >
                  {/* <CartesianGrid strokeDasharray="3 3" /> */}
                  <XAxis dataKey="name" />
                  {chartDetails.isYAxis ? <YAxis /> : null}
                  <Tooltip />

                  <ReferenceLine y={0} stroke="#000" />

                  <Bar dataKey="uv" fill={chartDetails.fill} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card.Body>
        </Card>
    
    </>
  );
};
