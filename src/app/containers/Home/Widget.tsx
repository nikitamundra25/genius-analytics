import React from "react";
import { Row } from "react-bootstrap";
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
        <div
          id="one"
          className="e-panel"
          data-row="0"
          data-col="0"
          data-sizex="2"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
           
            <BOB />
          </div>
        </div>
      );
    case "Key Business Metrics":
      return (
        <div
          id="two"
          className="e-panel"
          data-row="0"
          data-col="2"
          data-sizex="2.5"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
           
            <KeyBusinessMetrics />
          </div>
        </div>
      );
    case "Room Nights":
      return (
        <div
          id="three"
          className="e-panel"
          data-row="1"
          data-col="0"
          data-sizex="2"
          data-sizey="1"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
            <PickupSinceYesterday />
          </div>
        </div>
      );
    case "Occupacy Statics":
      return (
        <div
          id="four"
          className="e-panel"
          data-row="1"
          data-col="2"
          data-sizex="2"
          data-sizey="1"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
            <OccupencyStatitics />
          </div>
        </div>
      );
    case "Business Mix":
      return (
        <div
          id="five"
          className="e-panel"
          data-row="2"
          data-col="0"
          data-sizex="2"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
          
            <BusinessMixComponent />
          </div>
        </div>
      );
    case "Room Type Statics":
      return (
        <div
          id="six"
          className="e-panel "
          data-row="2"
          data-col="2"
          data-sizex="2"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
            <RoomTypeStatics />
          </div>
        </div>
      );
    case "Booking Channel Mix":
      return (
        <div
        id="seven"
        className="e-panel "
        data-row="3"
        data-col="0" data-sizex="2" data-sizey="1"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <BookingChannels />
        </div>
        </div>
      );
    case "Geographic Origin of business":
      return (
        <div
        id="eight"
        className="e-panel "
        data-row="3"
        data-col="2" data-sizex="2" data-sizey="1"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <GeoBusiness />
        </div>
        </div>
      );
    case "MTD RGI Performance":
      return (
        <div
        id="nine"
        className="e-panel "
        data-row="4"
        data-col="0"
        data-sizex="3"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <MTDPerformance key={"rgi"} />
        </div>
        </div>
      );
    case "RGI YoY Variance":
      return (
        <div
        id="ten"
        className="e-panel "
        data-row="4"
        data-col="3"
        data-sizex="1"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <RGIVariance />
        </div>
        </div>
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
