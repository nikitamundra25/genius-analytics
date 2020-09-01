import React, { FunctionComponent, useEffect } from "react";
// import DashboardMonthlyWidget from "./Widget";
import TopBar from "../Home/TopBar";
import { useSelector, useDispatch, Provider } from "react-redux";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { DashboardYearlyRequest } from "../../../actions";
import { IRootState } from "../../../interfaces";
import "./index.scss";
import Loader from "../../components/Loader/Loader";
import { ErrorComponent } from "../../components/Error";
import { PanelsDirective, PanelDirective } from "@syncfusion/ej2-react-layouts";
import { Store } from "redux";
import configureStore from "../../../store";
import { createBrowserHistory } from "history";
import CumulativeTable from "./Cumulative";
import MonthlyOCCADR from "./OCCADR/Monthly";
import QuarterlyOCCADR from "./OCCADR/Quarterly";
import RoomTypesYTD from "./RoomTypesYTD";
import StayYTD from "./StayYTD";
import LeadTimesYTD from "./LeadTimesYTD";
import LeadTimesSegmentYTD from "./LeadTimesSegmentYTD";
import RGIPerformance from "./RGIPerformance";
import REVPARYTD from "./RevparYTD";

const history = createBrowserHistory();

let restoreModel: any = [];
let selectedDate: any = new Date()
const DashboardYearly: FunctionComponent = () => {
  const cellSpacing = [15, 20];
  let dashboardObj: any;
  const store: Store = configureStore(history);
  const dispatch = useDispatch();
  const DashboardReducer = useSelector(
    (state: IRootState) => state.DashboardReducer
  );

  useEffect(() => {
    dispatch(DashboardYearlyRequest());
    // eslint-disable-next-line
  }, []);


  // To reset drag & drop when select date
  const RestorePanel = (date:any) => {
    selectedDate= date
    dashboardObj.panels = restoreModel;
  };


  // To store dashboard data initially
  const created = () => {
    restoreModel = dashboardObj.serialize();
    restoreModel[0].content = () => getChart("Cumulative");
    restoreModel[1].content = () => getChart("MOCCADR");
    restoreModel[2].content = () => getChart("QOCCADR");
    restoreModel[3].content = () => getChart("ROOMTYPES");
    restoreModel[4].content = () => getChart("RevPARYTD");
    restoreModel[5].content = () => getChart("StayYTD");
    restoreModel[6].content = () => getChart("Lead Times YTD");
    restoreModel[7].content = () => getChart("Lead Times YTD by Segment");
    restoreModel[8].content = () => getChart("RGI Performance - YTD");
  };

  const getChart = (chartType: any) => {
    
    switch (chartType) {
      case "Cumulative":
        return (
          <Provider store={store}>
          <div className="template">
            <CumulativeTable selectedDate={selectedDate} />
          </div>
          </Provider>
        );
      case "MOCCADR":
        return (
          <Provider store={store}>
          <div className="template">
            <MonthlyOCCADR id='monthly-ofasdfcc-adr' 
            />
          </div>
          </Provider>
        );
  
      case "QOCCADR":
        return (
          <Provider store={store}>
          <div className="template">
            <QuarterlyOCCADR id='quarterly-occ-adr' 
            />
            </div>
          </Provider>
        );
      case "ROOMTYPES":
        return (
          <Provider store={store}>
          <div className="template">
            <RoomTypesYTD 
            />
            </div>
          </Provider>
        );
  
        case "RevPARYTD":
        return (
          <Provider store={store}>
          <div className="template">
            <REVPARYTD 
            />
          </div>
          </Provider>
        );
        case "StayYTD":
        return (
          <Provider store={store}>
          <div className="template">
            <StayYTD 
            />
          </div>
          </Provider>
        );
  
        case "Lead Times YTD":
          return (
            <Provider store={store}>
            <div className="template">
              <LeadTimesYTD 
              />
            </div>
            </Provider>
          );
          case "Lead Times YTD by Segment":
          return (
            <Provider store={store}>
            <div className="template">
              <LeadTimesSegmentYTD 
              />
            </div>
            </Provider>
          );
          case "RGI Performance - YTD":
          return (
            <Provider store={store}>
            <div className="template">
              <RGIPerformance 
              />
            </div>
            </Provider>
          );
      default:
        return null;
    }
  };

  const { dashboardYearlyList , isYearlyLoading,isYearlyError} = DashboardReducer;

  return (
    <>
        <TopBar handleReset={ RestorePanel} />
      <div className="animated fadeIn">
      {isYearlyLoading ? (
          <Loader />
        ) : isYearlyError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) : dashboardYearlyList && dashboardYearlyList.length ? (
          <DashboardLayoutComponent
            id="defaultLayout"
            cellSpacing={cellSpacing}
            allowResizing={false}
            allowDragging={true}
            mediaQuery= {'max-width: 991px'}
            columns={6}
            cellAspectRatio={50 / 78}
            created={created}
            ref={(scope: any) => {
              dashboardObj = scope;
            }}
          >
            <PanelsDirective>
              <PanelDirective
                sizeX={6}
                sizeY={2}
                row={0}
                col={0}
                content={() => getChart(dashboardYearlyList[0].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={3}
                col={0}
                header={`<div class="panel-title">Monthly OCC & ADR</div>`}
                content={() => getChart(dashboardYearlyList[1].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={1}
                sizeY={0}
                row={3}
                col={4}
                header={`<div class="panel-title">Quarterly OCC & ADR</div>`}
                content={() => getChart(dashboardYearlyList[2].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={3}
                col={5}
                header={`<div class="panel-title">Room Types - YTD</div>`}
                content={() => getChart(dashboardYearlyList[3].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={0}
                header={`<div class="panel-title">RevPAR Vs. NrevPAR - YTD</div>`}
                content={() => getChart(dashboardYearlyList[4].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={3}
                header={`<div class="panel-title">Length of Stay & ADR - YTD</div>`}
                content={() => getChart(dashboardYearlyList[5].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={5}
                col={0}
                header={`<div class="panel-title">${dashboardYearlyList[6].name}</div>`}
                content={() => getChart(dashboardYearlyList[6].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={5}
                col={2}
                content={() => getChart(dashboardYearlyList[7].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={5}
                col={4}
                header={`<div class="panel-title">${dashboardYearlyList[8].name}</div>`}
                content={() => getChart(dashboardYearlyList[8].name)}
              ></PanelDirective>
            </PanelsDirective>

          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default DashboardYearly;
