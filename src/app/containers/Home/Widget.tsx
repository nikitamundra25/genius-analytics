import React from "react";
import { Row, Col } from "react-bootstrap";
const BOB = React.lazy(() => import("./BOB"));
const KeyBusinessMetrics = React.lazy(() => import("./KeyBusinessMetrics"));
const PickupSinceYesterday = React.lazy(() => import("./PickupSinceYesterday"));
const OccupencyStatitics = React.lazy(() => import("./OccupencyStatitics"));
const BusinessMixComponent = React.lazy(() => import("./BusinessMix"));
const RoomTypeStatics = React.lazy(() => import("./RoomTypeStatics"));
const BookingChannels = React.lazy(() => import("./BookingChannels"));
const GeoBusiness = React.lazy(() => import("./GeoBusiness"));
const MTDPerformance = React.lazy(() => import("./MTDPerformance"));

const getChart = (chartType: any) => {
  switch (chartType.name) {
    case "Business on the Books":
      return (
        <Col xs={12} md={5}>
          <BOB />
        </Col>
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
        <Col xs={12} md={4}>
          <BusinessMixComponent />
        </Col>
      );
    case "Room Type Statics":
      return (
        <Col xs={12} md={4}>
          <RoomTypeStatics />
        </Col>
      );
    case "Booking Channel Mix":
      return (
        <Col xs={12} md={4}>
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
        <Col xs={12} md={6}>
          <MTDPerformance key={"rgp"} />
        </Col>
      );
    case "RGI YoY Variance":
      return (
        <Col xs={12} md={12}>
          <MTDPerformance key={"rgi"} />
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
