import React, { FunctionComponent, useEffect } from "react";
import TopBar from "../Home/TopBar";
import { useSelector, useDispatch, Provider } from "react-redux";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { DashboardMonthlyRequest } from "../../../actions";
import { IRootState } from "../../../interfaces";
import "./index.scss";
import Loader from "../../components/Loader/Loader";
import { ErrorComponent } from "../../components/Error";
import { PanelsDirective, PanelDirective } from "@syncfusion/ej2-react-layouts";
import BOB from "./BOB";
import MonthlyDailyOccupacy from "./MonthlyDailyOccupacy";
import DailyOccupacy from "./DailyOccupacy";
import { createBrowserHistory } from "history";
import { Store } from "redux";
import configureStore from "../../../store";
import BookingChannel from "./BookingChannel";
import MarketSegmentation from "./MarketSegmentation";
import RoomTypeStatistics from "./RoomTypeStatistics";
const history = createBrowserHistory();

let selectedDate: any =  new Date()
const DashboardMonthly: FunctionComponent = () => {
  const cellSpacing = [15, 20];
  let restoreModel: any = [];
  let dashboardObj: any;
  const store: Store = configureStore(history);
  const dispatch = useDispatch();
  const DashboardReducer = useSelector(
    (state: IRootState) => state.DashboardReducer
  );

  useEffect(() => {
    dispatch(DashboardMonthlyRequest());
    // eslint-disable-next-line
  }, []);

  // To reset drag & drop when select date
  const RestorePanel = (date:any) => {
    selectedDate = date
    dashboardObj.panels = restoreModel;
  };

  // To store dashboard data initially
  const created = () => {
    restoreModel = dashboardObj.serialize();
    restoreModel[0].content = () => getChart("Business on the Books");
    restoreModel[1].content = () => getChart("Monthly Daily Occupacy & ADR");
    restoreModel[2].content = () => getChart("Daily Occupacy Vs. BUD Vs. LY");
    restoreModel[3].content = () => getChart("Booking Channel");
    restoreModel[4].content = () => getChart("Market Segmentation");
    restoreModel[5].content = () => getChart("Room Type Statistics");
  };

  const getChart = (chartType: any) => {
    switch (chartType) {
      case "Business on the Books":
        return (
          <Provider store={store}>
          <div className="template">
              <BOB selectedDate={selectedDate}/>
            </div>
          </Provider>
        );
      case "Monthly Daily Occupacy & ADR":
        return (
          <Provider store={store}>
          <div className="template">
              <MonthlyDailyOccupacy />
            </div>
          </Provider>
        );
      case "Daily Occupacy Vs. BUD Vs. LY":
        return (
          <Provider store={store}>
          <div className="template">
              <DailyOccupacy />
            </div>
          </Provider>
        );
      case "Booking Channel":
        return (
          <Provider store={store}>
          <div className="template">
              <BookingChannel />
            </div>
          </Provider>
        );
      case "Market Segmentation":
        return (
          <Provider store={store}>
          <div className="template">
              <MarketSegmentation />
            </div>
          </Provider>
        );
      case "Room Type Statistics":
        return (
          <Provider store={store}>
          <div className="template">
              <RoomTypeStatistics />
            </div>
          </Provider>
        );

      default:
        return null;
    }
  };

  const {
    dashboardMonthlyList,
    isMonthlyLoading,
    isMonthlyError,
  } = DashboardReducer;

  return (
    <>
      <TopBar handleReset={RestorePanel} />
      <div className="animated fadeIn">
        {isMonthlyLoading ? (
          <Loader />
        ) : isMonthlyError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) : dashboardMonthlyList && dashboardMonthlyList.length ? (
          <DashboardLayoutComponent
            id="defaultLayout"
            cellSpacing={cellSpacing}
            mediaQuery={"max-width: 991px"}
            allowResizing={false}
            allowDragging={true}
            columns={6}
            cellAspectRatio={50 / 64}
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
                content={() => getChart(dashboardMonthlyList[0].name)}
              ></PanelDirective>
                <PanelDirective
                sizeX={6}
                sizeY={0}
                row={2}
                col={0}
                header={`<div>${dashboardMonthlyList[1].name}</div>`}
                content={() => getChart(dashboardMonthlyList[1].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={4}
                sizeY={0}
                row={3}
                col={0}
                content={() => getChart(dashboardMonthlyList[2].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={3}
                col={4}
                header={`<div>${dashboardMonthlyList[3].name}</div>`}
                content={() => getChart(dashboardMonthlyList[3].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={0}
                header={`<div>${dashboardMonthlyList[4].name}</div>`}
                content={() => getChart(dashboardMonthlyList[4].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={3}
                header={`<div>${dashboardMonthlyList[5].name}</div>`}
                content={() => getChart(dashboardMonthlyList[5].name)}
              ></PanelDirective>
            </PanelsDirective>
            {/* <DashboardMonthlyWidget graphList={dashboardMonthlyList} /> */}
          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default DashboardMonthly;
