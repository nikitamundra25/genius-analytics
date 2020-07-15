import React from "react";
import { Row, Col } from "react-bootstrap";
import BOB from "./BOB";
import KeyBusinessMetrics from "./KeyBusinessMetrics";
import PickupSinceYesterday from "./PickupSinceYesterday";
import OccupencyStatitics from "./OccupencyStatitics";
import BusinessMixComponent from "./BusinessMix";
import RoomTypeStatics from "./RoomTypeStatics";
import BookingChannels from "./BookingChannels";
import GeoBusiness from "./GeoBusiness";
import MTDPerformance from "./MTDPerformance";
import RGIVariance from "./RGIVariance";
import { IDashboardWidgetProps } from "../../../interfaces";

const getChart = (chartType: any) => {
  switch (chartType.name) {
    case "Business on the Books":
      return (
        <div id="one" className="e-panel" data-row="0" data-col="0" data-sizex="1" data-sizey="1">
              <span id="close" className="e-template-icon e-clear-icon"/>
              <div className="e-panel-container">
        <Col xs={12} md={5}>
          <BOB />
        </Col>
        </div>
       </div>
      );
    case "Key Business Metrics":
      return (
        <Col xs={12} md={7}>
          <KeyBusinessMetrics />
        </Col>
      );
    case "Room Nights":
      return (
        <Col xs={12} md={6}>
          <PickupSinceYesterday />
        </Col>
      );
    case "Occupacy Statics":
      return (
        <Col xs={12} md={6}>
          <OccupencyStatitics />
        </Col>
      );
    case "Business Mix":
      return (
        <Col xs={12} md={6}>
          <BusinessMixComponent />
        </Col>
      );
    case "Room Type Statics":
      return (
        <Col xs={12} md={6}>
          <RoomTypeStatics />
        </Col>
      );
    case "Booking Channel Mix":
      return (
        <Col xs={12} md={6}>
          <BookingChannels />
        </Col>
      );
    case "Geographic Origin of business":
      return (
        <Col xs={12} md={6}>
          <GeoBusiness />
        </Col>
      );
    case "MTD RGI Performance":
      return (
        <Col xs={12} md={8}>
          <MTDPerformance key={"rgi"} />
        </Col>
      );
    case "RGI YoY Variance":
      return (
        <Col xs={12} md={4}>
          <RGIVariance />
        </Col>
      );

    default:
      return null;
  }
};

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
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
