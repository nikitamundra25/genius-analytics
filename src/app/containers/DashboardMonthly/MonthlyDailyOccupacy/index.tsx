import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import Loader from "../../../components/Loader/Loader";
import WidgetHeader from "../../../components/WidgetHeader";
const MixedCharts = React.lazy(() =>
  import("../../../components/Charts/MixedCharts")
);


const MonthlyDailyOccupacy = ({ graphdata = [] }:any) => {

  const Charts1 = [
    {
      dataSource: graphdata[0].data,
      xName: "name",
      yName: "OCC",
      type: "StackingColumn100",
      fill: "#2b588f",
      name: "Occupied Rooms",
      width: 1,
    },
    {
      dataSource: graphdata[0].data,
      xName: "name",
      yName: "EMPTY",
      type: "StackingColumn100",
      fill: "#dce8fc",
      name: "Empty Rooms",
      width: 1,
      marker: {
        dataLabel: {
          visible: false,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize:"12px",
          },
        },
      },
    },
    {
      dataSource: graphdata[0].data,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#e46d09",
      name: "ADR",
      width: 3,
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#2f5891",
        border: { width: 1, color: "#e46d09" },
        dataLabel: {
          visible: false,
          position: "Top",
          font: {
            fontWeight: "600",
            color: "#000000",
            fontSize:"12px",
          },
        },
      },
    },
  ];
  
  const Charts2 = [
    {
      dataSource: graphdata[1].data,
      xName: "name",
      yName: "OCC",
      type: "StackingColumn100",
      fill: "#2b588f",
      name: "Occupied Rooms",
      width: 1,
      marker: {
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize:"12px",
          },
        },
      },
    },
    {
      dataSource: graphdata[1].data,
      xName: "name",
      yName: "EMPTY",
      type: "StackingColumn100",
      fill: "#dce8fc",
      name: "Empty Rooms",
      width: 1,
      marker: {
        dataLabel: {
          visible: false,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize:"12px",
          },
        },
      },
    },
    {
      dataSource: graphdata[1].data,
      xName: "name",
      yName: "ADR",
      type: "Spline",
      fill: "#e46d09",
      name: "ADR",
      width: 3,
      marker: {
        visible: false,
        width: 10,
        height: 10,
        fill: "#2f5891",
        border: { width: 1, color: "#e46d09" },
        dataLabel: {
          visible: true,
          position: "Bottom",
          font: {
            fontWeight: "600",
            color: "#ffffff",
            fontSize:"12px",
          },
        },
      },
    },
  ];
  return (
    <Card>
      <WidgetHeader
        title={"Monthly Daily Occupacy & ADR"}
        activeToggle={"graph"}
      />
      <Card.Body>
        <Row className="row-inner">
          <Col xs={12} md={9}>
            <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
              <MixedCharts
                id={"occChart1"}
                legend = {false}
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
                  Legend: { enable: false },
                }}
                charts={Charts1}
              />
            </React.Suspense>
          </Col>
          <Col xs={12} md={3}>
            <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
              <MixedCharts
                id={"occChart2"}
                legend = {false}
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
                charts={Charts2}
              />
            </React.Suspense>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MonthlyDailyOccupacy;
