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

const DashboardWidget = ({ graphList }: IDashboardWidgetProps) => {
  const getChart = (chartType: any) => {
    switch (chartType.name) {
      case "Business on the Books":
        return (
          <PanelDirective
            sizeX={2}
            sizeY={0}
            row={0}
            col={0}
            content={
              // <Provider store={store}>
              <div className="template">
                <BOB />
              </div>
              // </Provider>
            }
          ></PanelDirective>
          // <div
          //   id="one"
          //   className="e-panel"
          //   data-row="0"
          //   data-col="0"
          //   data-sizex="2"
          //   data-sizey="0"
          // >
          //   <span id="close" className="e-template-icon e-clear-icon" />
          //   <div className="e-panel-container">
          //     <BOB />
          //   </div>
          // </div>
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
            data-col="0"
            data-sizex="2"
            data-sizey="1"
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
            data-col="2"
            data-sizex="2"
            data-sizey="1"
          >
            <span id="close" className="e-template-icon e-clear-icon" />
            <div className="e-panel-container">
              <GeoBusiness key={"map"} />
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
  const lineTemplate = () => {
    console.log("hereeeeeeeeeee");
    return (
      // <Provider store={store}>
        <div className="template">
          <BOB />
        </div>
      // </Provider>
    );
  };
  return (
    
      <PanelsDirective>
        <PanelDirective
          sizeX={2}
          sizeY={1}
          row={0}
          col={0}
          content={lineTemplate}
        ></PanelDirective>
        <PanelDirective
          sizeX={2}
          sizeY={1}
          row={0}
          col={2}
          content={'<div class="content">1</div>'}
        ></PanelDirective>
        {/* {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>{getChart(chartConfig)}</React.Fragment>
        );
      })} */}
      </PanelsDirective>
   
  );
};

export default DashboardWidget;
