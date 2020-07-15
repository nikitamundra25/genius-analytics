import React from "react";
import { Row, Col } from "react-bootstrap";
import CumulativeTable from "./Cumulative";
import MonthlyOCCADR from "./OCCADR/Monthly";
import QuarterlyOCCADR from "./OCCADR/Quarterly";
import RoomTypesYTD from "./RoomTypesYTD";
import REVPARYTD from "./RevparYTD";
import StayYTD from "./StayYTD";
import LeadTimesYTD from "./LeadTimesYTD";
import LeadTimesSegmentYTD from "./LeadTimesSegmentYTD";
import RGIPerformance from "./RGIPerformance";

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
        <Col sm={5}>
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
        <Col sm={4}>
          {" "}
          <RoomTypesYTD />
        </Col>
      );
      case "RevPARYTD":
      return (
        <Col sm={6}>
          {" "}
          <REVPARYTD />
        </Col>
      );
      case "StayYTD":
      return (
        <Col sm={6}>
          
          <StayYTD />
        </Col>
      );
      case "Lead Times YTD":
        return (
          <Col sm={3}>
            <LeadTimesYTD />
          </Col>
        );
        case "Lead Times YTD by Segment":
        return (
          <Col sm={3}>
            <LeadTimesSegmentYTD />
          </Col>
        );
        case "RGI Performance - YTD":
        return (
          <Col sm={6}>
            <RGIPerformance />
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
