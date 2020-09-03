import React from "react";
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
import { PanelsDirective, PanelDirective } from "@syncfusion/ej2-react-layouts";
import WidgetHeader from "../../components/WidgetHeader";

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
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
            data-sizex="2"
            data-sizey="0"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
         
              <KeyBusinessMetrics date= {new Date()}/>
              
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
              <PickupSinceYesterday date= {new Date()}/>
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
              <OccupencyStatitics date= {new Date()}/>
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
              <BusinessMixComponent date= {new Date()}/>
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
              <RoomTypeStatics date= {new Date()}/>
            </div>
          </div>
        );
      case "Booking Channel Mix":
        return (
          <div
            id="seven"
            className="e-panel "
            data-row="3"
            data-col="0"
            data-sizex="2"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <BookingChannels date= {new Date()}/>
            </div>
          </div>
        );
      case "Geographic Origin of business":
        return (
          <div
            id="eight"
            className="e-panel "
            data-row="3"
            data-col="2"
            data-sizex="2"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <GeoBusiness key={"map"} date= {new Date()}/>
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
              <MTDPerformance key={"rgi"} date= {new Date()} />
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
              <RGIVariance date= {new Date()}/>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    
     <>
         {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>{getChart(chartConfig)}</React.Fragment>
        );
      })} 
   </>
  );
};

export default DashboardWidget;
