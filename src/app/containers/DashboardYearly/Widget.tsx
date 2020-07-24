import React from "react";
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
        <div
        id="one"
        className="e-panel"
        data-row="0"
        data-col="0"
        data-sizex="6"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container overflow-auto">
          <CumulativeTable />
        </div>
        </div>
      );
    case "MOCCADR":
      return (
        <div
        id="second"
        className="e-panel"
        data-row="1"
        data-col="0"
        data-sizex="3"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <MonthlyOCCADR id='monthly-ofasdfcc-adr' 
          graphdata={chartType.graphdata}
          />
        </div>
        </div>
      );

    case "QOCCADR":
      return (
        <div
        id="three"
        className="e-panel"
        data-row="1"
        data-col="4"
        data-sizex="1"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <QuarterlyOCCADR id='quarterly-occ-adr' 
           graphdata={chartType.graphdata}
          />
          </div>
        </div>
      );
    case "ROOMTYPES":
      return (
        <div
        id="four"
        className="e-panel"
        data-row="1"
        data-col="5"
        data-sizex="2"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <RoomTypesYTD 
          graphdata={chartType.graphdata}
          />
          </div>
        </div>
      );

      case "RevPARYTD":
      return (
        <div
        id="five"
        className="e-panel"
        data-row="2"
        data-col="0"
        data-sizex="3"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <REVPARYTD 
           graphdata={chartType.graphdata}
          />
        </div>
        </div>
      );
      case "StayYTD":
      return (
        <div
        id="six"
        className="e-panel"
        data-row="2"
        data-col="3"
        data-sizex="3"
        data-sizey="0"
      >
        <span id="close" className="e-template-icon e-clear-icon" />
        <div className="e-panel-container">
          <StayYTD 
            graphdata={chartType.graphdata}
          />
        </div>
        </div>
      );

      case "Lead Times YTD":
        return (
          <div
          id="seven"
          className="e-panel"
          data-row="3"
          data-col="0"
          data-sizex="2"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
            <LeadTimesYTD 
            graphdata={chartType.graphdata}
            />
          </div>
          </div>
        );
        case "Lead Times YTD by Segment":
        return (
          <div
          id="eight"
          className="e-panel"
          data-row="3"
          data-col="2"
          data-sizex="2"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
            <LeadTimesSegmentYTD 
            graphdata={chartType.graphdata}
            />
          </div>
          </div>
        );
        case "RGI Performance - YTD":
        return (
          <div
          id="nine"
          className="e-panel"
          data-row="3"
          data-col="4"
          data-sizex="2"
          data-sizey="0"
        >
          <span id="close" className="e-template-icon e-clear-icon" />
          <div className="e-panel-container">
            <RGIPerformance 
            graphdata={chartType.graphdata}
            />
          </div>
          </div>
        );
    default:
      return null;
  }
};

const DashboardMonthlyWidget = ({ graphList }: { graphList: any[] }) => {
  return (
    <>
      {graphList.map((chartConfig: any, index: number) => {
        return (
          <React.Fragment key={index}>
            <React.Suspense fallback={"Loading.."}>
              {getChart(chartConfig)}
            </React.Suspense>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default DashboardMonthlyWidget;
