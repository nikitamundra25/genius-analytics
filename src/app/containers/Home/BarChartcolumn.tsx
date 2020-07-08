import React from "react";
import { Card, Col } from "react-bootstrap";
// import {
//   ResponsiveContainer,
//   ReferenceLine,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
// } from "recharts";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DataLabel,
  BarSeries,
  Category,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

export const BarChartColumn = (props: any) => {
  const { chartDetails1 } = props;
  return (
    <>
    <Col xs={12} md={4}>
      {/*        
          <Card.Header className="d-flex align-items-center justify-content-between">
            <Card.Title>{chartDetails.title} </Card.Title>
            
          </Card.Header> */}
      {/* <Card.Body>
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
                  
                  <XAxis dataKey="name" />
                  {chartDetails.isYAxis ? <YAxis /> : null}
                  <Tooltip />

                  <ReferenceLine y={0} stroke="#000" />

                  <Bar dataKey="uv" fill={chartDetails.fill} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card.Body> */}

<div>
          <ChartComponent
            id={`chart${chartDetails1.id}`}
            style={{ textAlign: "center" }}
            primaryXAxis={{
              valueType: "Category",
              interval: 1,
              majorGridLines: { width: 0 },
            }}
            primaryYAxis={{
              labelFormat: "{value}%",
              edgeLabelPlacement: "Shift",
              majorGridLines: { width: 0 },
              majorTickLines: { width: 0 },
              lineStyle: { width: 0 },
              labelStyle: {
                color: "transparent",
              },
            }}
            chartArea={{ border: { width: 0 } }}
            width={Browser.isDevice ? "100%" : "100%"}
            title={chartDetails1.title}
            tooltip={{ enable: true }}
          >
            <Inject services={[ DataLabel, Category, Tooltip]} />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={chartDetails1.data}
                xName="x"
                yName="y"
                type="Bar"
                fill= {chartDetails1.color}
                name={chartDetails1.title}
                width={1}
                marker={{
                  dataLabel: {
                    visible: true,
                    position: "Top",
                    font: {
                      fontWeight: "600",
                      color: "#ffffff",
                    },
                  },
                }}
              ></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </Col>
    </>
  );
};
