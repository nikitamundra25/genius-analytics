import React, { useEffect } from "react";
// import { useLocation } from 'react-router';
import { Col, Card, Row } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const BarChartComponent = React.lazy(() =>
  import("../../../components/Charts/BarChart")
);


const KeyBusinessMetrics = ({ graphdata = [] }:any) => {

  const barChartBusinessMetrics = [
    {
      id: "1",
      title: "OCC",
      color: "#2e75b7",
      labelformat:"{value}%",
      data: graphdata,
    },
    {
      id: "2",
      title: "ADR",
      color: "#5398d9",
      labelformat:"n2",
      data: graphdata,
    },
    {
      id: "3",
      title: "Revenue",
      color: "#1f4e79",
      labelformat:"c2",
      data: graphdata,
    },
    {
      id: "4",
      title: "Revpar",
      color: "#9dc3e7",
      labelformat:"c2",
      data: graphdata,
    },
  ];

 
  // const location = useLocation();
  // useEffect(() => {
  // console.log("hello chart width")
  // const header: HTMLElement | null = document.getElementById('col-width0');
  //     if (header) {
        
  //       const check = header.clientWidth;
  //       console.log("hello header", check);
  //       header.style.color = "red";
  //     }
  // }, [location]);

  return (
    <Card>
      <WidgetHeader title={"Key Business Metrics"} activeToggle={"graph"} />
      <Card.Body>
      <Row className='row-inner' >
        {barChartBusinessMetrics && barChartBusinessMetrics.length ? 
        barChartBusinessMetrics.map((key: any, index: number) => {
          return (
            <Col key={index} sm={3} md={3} id={`col-width${index}`}>
              
              <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
             
                <BarChartComponent
                  chartSettings={{
                    primaryXAxis: {
                      valueType: "Category",
                      interval: 1,
                      majorGridLines: { width: 0 },
                    },
                    primaryYAxis: {
                      labelFormat: key.labelformat,
                      edgeLabelPlacement: "Shift",
                      majorGridLines: { width: 0 },
                      majorTickLines: { width: 0 },
                      lineStyle: { width: 0 },
                      labelStyle: {
                        color: "transparent",
                      },
                    },
                    title: key.title,
                    tooltip: { enable: true,  position: 'Top' },
                  }}
                  {...key}
                />
              </React.Suspense>
              
            </Col>
          );
        }): null}
      </Row>
     </Card.Body>
    </Card>
  );
};

export default KeyBusinessMetrics;
