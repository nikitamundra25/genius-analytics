import React from "react";
import { Row } from "react-bootstrap";
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
        <div
          id="one"
          className="e-panel"
          data-row="0"
          data-col="0"
          data-sizex="6"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
           
          <BOB />
        </div>
        </div>
      );
    case "Monthly Daily Occupacy & ADR":
      return (
        <div
        id="two"
        className="e-panel"
        data-row="1"
        data-col="0"
        data-sizex="6"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
         
          <MonthlyDailyOccupacy />
          </div>
        </div>
      );
    case "Daily Occupacy Vs. BUD Vs. LY":
      return (
        <div
        id="three"
        className="e-panel"
        data-row="2"
        data-col="0"
        data-sizex="4"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <DailyOccupacy />
        </div>
        </div>
      );
    case "Rate Code Statistics":
      return (
        <div
        id="four"
        className="e-panel"
        data-row="2"
        data-col="4"
        data-sizex="2"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <RateCodeStatistics />
          </div>
        </div>
      );
    case "Market Segmentation":
      return (
        <div
        id="five"
        className="e-panel"
        data-row="3"
        data-col="0"
        data-sizex="2"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <MarketSegmentation />
          </div>
        </div>
      );
    case "Room Type Statistics":
      return (
        <div
        id="six"
        className="e-panel"
        data-row="3"
        data-col="3"
        data-sizex="2"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <RoomTypeStatistics />
        </div>
        </div>
      );
    case "Booking Channel":
      return (
        <div
        id="seven"
        className="e-panel"
        data-row="3"
        data-col="5"
        data-sizex="2"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <BookingChannel />
        </div>
        </div>
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
