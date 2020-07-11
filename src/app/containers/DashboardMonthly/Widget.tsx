import React from "react";
import { Row, Col } from "react-bootstrap";
import BOB from "./BOB";
import MonthlyDailyOccupacy from "./MonthlyDailyOccupacy";
import DailyOccupacy from "./DailyOccupacy";
import RateCodeStatistics from "./RateCodeStatistics";
import MarketSegmentation from "./MarketSegmentation";
import RoomTypeStatistics from "./RoomTypeStatistics";
import BookingChannel from "./BookingChannel";

const getChart = (chartType: any) => {
  switch (chartType.name) {
    case "Business on the Books":
      return (
        <Col xs={12} md={12}>
          <BOB />
        </Col>
      );
    case "Monthly Daily Occupacy & ADR":
      return (
        <Col xs={12} md={12}>
          <MonthlyDailyOccupacy />
        </Col>
      );
    case "Daily Occupacy Vs. BUD Vs. LY":
      return (
        <Col xs={12} md={8}>
          <DailyOccupacy />
        </Col>
      );
    case "Rate Code Statistics":
      return (
        <Col xs={12} md={4}>
          <RateCodeStatistics />
        </Col>
      );
    case "Market Segmentation":
      return (
        <Col xs={12} md={4}>
          <MarketSegmentation />
        </Col>
      );
    case "Room Type Statistics":
      return (
        <Col xs={12} md={4}>
          <RoomTypeStatistics />
        </Col>
      );
    case "Booking Channel":
      return (
        <Col xs={12} md={4}>
          <BookingChannel />
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
          <React.Fragment key={index}>{getChart(chartConfig)}</React.Fragment>
        );
      })}
    </Row>
  );
};

export default DashboardWidget;
