import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);

const OccupencyStatitics = ({ graphdata = [] }:any) => {

    const Charts1 = [
        {
          dataSource: graphdata[0].data,
          xName: "name",
          yName: "OCCTY",
          type: "Column",
          fill: "#244d81",
          name: "OCC TY",
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: false,
            width: 8,
            height: 8,
            border: { width: 2, color: "#2bb5ec" },
            dataLabel: {
              visible: true,
              position: "Middle",
              font: {
                fontWeight: "600",
                color: "#ffffff",
                fontSize:"7px",
              },
            },
          },
        },
        {
          dataSource: graphdata[0].data,
          xName: "name",
          yName: "OCCLY",
          type: "Column",
          fill: "#4f81bc",
          name: "OCC LY",
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
          marker: {
            visible: false,
            width: 10,
            height: 10,
            border: { width: 2, color: "#2bb5ec" },
            dataLabel: {
              visible: true,
              position: "Top",
              font: {
                fontWeight: "600",
                color: "#fff",
              },
            },
          },
        },
        {
          dataSource: graphdata[0].data,
          xName: "name",
          yName: "ADRTY",
          type: "Line",
          fill: "#2bb5ec",
          name: "ADR TY",
          dashArray: "5",
          width: 2,
          marker: {
            visible: false,
            width: 8,
            height: 8,
            border: { width: 2, color: "#2bb5ec" },
            dataLabel: {
              visible: true,
              position: "Top",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
            },
          },
        },
        {
          dataSource: graphdata[0].data,
          xName: "name",
          yName: "ADRLY",
          type: "Line",
          fill: "#293046",
          name: "ADR LY",
          dashArray: "5",
          width: 2,
          marker: {
            visible: false,
            width: 8,
            height: 8,
            border: { width: 2, color: "#293046" },
            dataLabel: {
              visible: true,
              position: "Bottom",
              font: {
                fontWeight: "600",
                color: "#000000",
              },
            },
          },
        },
      ];
      const Charts2 = [
        {
          dataSource: graphdata[1].data,
          xName: "name",
          yName: "TY",
          type: "Column",
          fill: "#8293b1",
          name: "TY",
          width: 1,
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
        },
        {
          dataSource: graphdata[1].data,
          xName: "name",
          yName: "LY",
          type: "Column",
          fill: "#3269aa",
          name: "OCC LY",
          width: 1,
          cornerRadius:{ bottomLeft: 0, bottomRight: 0, topLeft: 4, topRight: 4 },
        },
        {
          dataSource: graphdata[1].data,
          xName: "name",
          yName: "Var",
          type: "Line",
          fill: "#2f5891",
          name: "Var",
          dashArray: "5",
          width: 2,
          
          marker: {
            visible: true,
            width: 8,
            height: 8,
            fill: "#2f5891",
            border: { width: 1, color: "#ddd" },
            dataLabel: {
              visible: true,
              position: "Top",
              fill: "#26405d",
              font: {
                fontWeight: "600",
                color: "#ffffff",
              },
            },
          },
        },
      ];
  return (
    <>
      <Card>
        <WidgetHeader title={"Occupancy Statistics"} activeToggle={"graph"} />
        <Card.Body>
        <Row className='row-inner'>
          <Col sm={8}>
          
            <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
              <MixedCharts
                id={"line-and-column"}
                chartSettings={{
                  primaryXAxis: {
                    valueType: "Category",
                    interval: 1,
                    majorGridLines: { width: 0 },
                  },
                  primaryYAxis: {
                    labelFormat: "{value}",
                    edgeLabelPlacement: "Shift",
                    majorGridLines: { width: 0 },
                    majorTickLines: { width: 0 },
                    lineStyle: { width: 0 },
                    labelStyle: {
                      color: "transparent",
                    },
                    visible:false,
                  },
                  tooltip: { enable: true },
                }}
                charts={Charts1}
              />
            </React.Suspense>
           
          </Col>
          <Col sm={4}>
          
          <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
            <MixedCharts
              id={"line-and-bar"}
              charts={Charts2}
              chartSettings={{
                primaryXAxis: {
                  valueType: "Category",
                  interval: 1,
                  majorGridLines: { width: 0 },
                },
                primaryYAxis: {
                  labelFormat: "{value}%",
                  edgeLabelPlacement: "Shift",
                  majorGridLines: { width: 0 },
                  majorTickLines: { width: 0 },
                  lineStyle: { width: 0 },
                  labelStyle: {
                    color: "transparent",
                  },
                  visible:false,
                },
                tooltip: { enable: true },
              }}
            />
            </React.Suspense>
            
          </Col>
        </Row>
       </Card.Body>
      </Card>
    </>
  );
};

export default OccupencyStatitics;
