import React from "react";
import { Row, Col } from "react-bootstrap";
// import WorldMap from "./Charts/WorldMap";
// const BOB = React.lazy(() => import("./BOB"));
// const MonthlyDailyOccupacy = React.lazy(() => import("./MonthlyDailyOccupacy"));
// const DailyOccupacy = React.lazy(() => import("./DailyOccupacy"));
// const RateCodeStatistics = React.lazy(() => import("./RateCodeStatistics"));
// const MarketSegmentation = React.lazy(() => import("./MarketSegmentation"));
// const RoomTypeStatistics = React.lazy(() => import("./RoomTypeStatistics"));
// const BookingChannel = React.lazy(() => import("./BookingChannel"));

const getChart = (chartType: any) => {
  switch (chartType.name) {
    case "Business on the Books":
      return (
        <Col xs={12} md={12}>
          {/* <BOB /> */}
        </Col>
      );
    case "Monthly OCC & ADR":
      return (
        <Col xs={12} md={12}>
          {/* <MonthlyDailyOccupacy /> */}
        </Col>
      );
    case "Quarterly OCC & ADR":
      return (
        <Col xs={12} md={8}>
          {/* <DailyOccupacy /> */}
        </Col>
      );
    case "Room Types - YTD":
      return (
        <Col xs={12} md={4}>
          {/* <RateCodeStatistics /> */}
        </Col>
      );
    case "RevPAR Vs. NRevPAR - YTD":
      return (
        <Col xs={12} md={4}>
          {/* <MarketSegmentation /> */}
        </Col>
      );
    case "Length of Stay & ADR - YTD":
      return (
        <Col xs={12} md={4}>
          {/* <RoomTypeStatistics /> */}
        </Col>
      );
    case "Lead Times YTD":
      return (
        <Col xs={12} md={4}>
          {/* <BookingChannel /> */}
        </Col>
      );
      case "Lead Times YTD by Segment":
      return (
        <Col xs={12} md={4}>
          {/* <BookingChannel /> */}
        </Col>
      );
      case "RGI Performance  - YTD":
      return (
        <Col xs={12} md={4}>
          {/* <BookingChannel /> */}
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
