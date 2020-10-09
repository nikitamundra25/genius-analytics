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
import BookingChannel from "./BookingChannel/BookingDoughnut";
import MarketSegmentation from "./MarketSegmentation";
import RoomTypeStatistics from "./RoomTypeStatistics";
import NestedDoughnutComponent from "../../components/Charts/NestedDoughnutChart";
const history = createBrowserHistory();

let selectedDate: any = new Date();
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
  const RestorePanel = (date: any) => {
    selectedDate = date;
    dashboardObj.panels = restoreModel;
  };

  // To store dashboard data initially
  const created = () => {
    restoreModel = dashboardObj.serialize();
    restoreModel[0].content = () => getChart("Business on the Books");
    restoreModel[1].content = () => getChart("Monthly Daily Occupancy & ADR");
    restoreModel[1].header = `<div class="panel-title">Monthly Daily Occupancy & ADR</div>`;

    restoreModel[2].content = () => getChart("Daily Occupancy Vs. BUD Vs. LY");

    restoreModel[3].content = () => getChart("Booking Channel");
    // restoreModel[3].header = `<div class="panel-title">Booking Channel</div>`;

    restoreModel[4].content = () => getChart("Market Segmentation");
    restoreModel[4].header = `<div class="panel-title">Market Segmentation</div>`;

    restoreModel[5].content = () => getChart("Room Type Statistics");
    restoreModel[5].header = `<div class="panel-title">Room Type Statistics</div>`;
  };

  const getChart = (chartType: any) => {
    switch (chartType) {
      case "Business on the Books":
        return (
          <Provider store={store}>
            <div className="template">
              <BOB selectedDate={selectedDate} />
            </div>
          </Provider>
        );
      case "Monthly Daily Occupancy & ADR":
        return (
          <Provider store={store}>
            <div className="template">
              <MonthlyDailyOccupacy selectedDate={selectedDate} />
            </div>
          </Provider>
        );
      case "Daily Occupancy Vs. BUD Vs. LY":
        return (
          <Provider store={store}>
            <div className="template">
              <DailyOccupacy selectedDate={selectedDate} />
            </div>
          </Provider>
        );
      case "Booking Channel":
        return (
          <Provider store={store}>
            <div className="template">
              <BookingChannel />
              {/* <NestedDoughnutComponent /> */}
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
                header={`<div class="panel-title">${dashboardMonthlyList[1].name}</div>`}
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
                //header={`<div class="panel-title">${dashboardMonthlyList[3].name}</div>`}
                content={() => getChart(dashboardMonthlyList[3].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={0}
                header={`<div class="panel-title">${dashboardMonthlyList[4].name}</div>`}
                content={() => getChart(dashboardMonthlyList[4].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={3}
                header={`<div class="panel-title">${dashboardMonthlyList[5].name}</div>`}
                content={() => getChart(dashboardMonthlyList[5].name)}
              ></PanelDirective>
            </PanelsDirective>
          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default DashboardMonthly;
