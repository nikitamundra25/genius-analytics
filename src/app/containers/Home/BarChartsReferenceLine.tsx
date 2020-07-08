import React from "react";
import { Card } from "react-bootstrap";
// import {
//   ResponsiveContainer,
//   ReferenceLine,
//   Tooltip,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
// } from "recharts";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

export const BarChartReferenceLineComponent = (props: any) => {
  const { chartDetails } = props;
  return (
    <>
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
{chartDetails.range ? (
              <div className="text-success h3">
                <i className="cui-arrow-top "></i> {chartDetails.range}
              </div>
            ) : null}
      <div>
        <ChartComponent
         id={`Ychart${chartDetails.id}`}
          style={{ textAlign: "center" }}
          
          primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: { width: 0 },
          }}
          primaryYAxis={{
            majorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            lineStyle: { width: 0 },
            labelStyle: { color: "transparent" },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          width={Browser.isDevice ? "100%" : "100%"}
         
         
        >
          <Inject
            services={[ColumnSeries, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={chartDetails.data}
              xName="x"
              yName="y"
              type="Column"
              fill= {chartDetails.color}
              name={chartDetails.title}
              marker={{
                dataLabel: {
                  visible: true,
                  position: "Top",
                  font: { fontWeight: "600", color: "#ffffff" },
                },
              }}
            ></SeriesDirective>
           
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </>
  );
};
