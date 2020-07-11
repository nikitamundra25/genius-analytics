import React from "react";
import { Row, Col } from "react-bootstrap";
import CumulativeTable from "./Cumulative";
import MonthlyOCCADR from "./OCCADR/Monthly";
import QuarterlyOCCADR from "./OCCADR/Quarterly";
import RoomTypesYTD from "./RoomTypesYTD";

const getChart = (chartType: any) => {
  switch (chartType.name) {
    case "Cumulative":
      return (
        <Col sm={12}>
          {" "}
          <CumulativeTable />
        </Col>
      );
    case "MOCCADR":
      return (
        <Col sm={6}>
          {" "}
          <MonthlyOCCADR id='monthly-ofasdfcc-adr' />
        </Col>
      );

    case "QOCCADR":
      return (
        <Col sm={3}>
          {" "}
          <QuarterlyOCCADR id='quarterly-occ-adr' />
        </Col>
      );
    case "ROOMTYPES":
      return (
        <Col sm={3}>
          {" "}
          <RoomTypesYTD />
        </Col>
      );
    default:
      return null;
  }
};

const DashboardWidget = ({ graphList }: { graphList: any[] }) => {
  return (
    <Row>
      {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <React.Suspense fallback={"Loading.."}>
              {getChart(chartConfig)}
            </React.Suspense>
          </React.Fragment>
        );
      })}
    </Row>
  );
};

export default DashboardWidget;
