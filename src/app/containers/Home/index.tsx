import React, { FunctionComponent, useEffect } from "react";
import TopBar from "./TopBar";
import { useSelector, useDispatch, Provider } from "react-redux";
import { getWidgets } from "../../../actions";
import {
  DashboardLayoutComponent,
  PanelsDirective,
  PanelDirective,
} from "@syncfusion/ej2-react-layouts";
import { IRootState } from "../../../interfaces";
import Loader from "../../components/Loader/Loader";
import "./index.scss";
import { ErrorComponent } from "../../components/Error";
import KeyBusinessMetrics from "./KeyBusinessMetrics";
import PickupSinceYesterday from "./PickupSinceYesterday";
import BOB from "./BOB";
import { Store } from "redux";
import configureStore from "../../../store";
import { createBrowserHistory } from "history";
import OccupencyStatitics from "./OccupencyStatitics";
import RoomTypeStatics from "./RoomTypeStatics";
import BookingChannels from "./BookingChannels";
import GeoBusiness from "./GeoBusiness";
import MTDPerformance from "./MTDPerformance";
import RGIVariance from "./RGIVariance";
import BusinessMixComponent from "./BusinessMix";
const history = createBrowserHistory();

// export class Default extends SampleBase {
const HomeComponent: FunctionComponent = () => {
  const cellSpacing = [15, 20];
  const dispatch = useDispatch();
  const store: Store = configureStore(history);
  let restoreModel: any = [];
  let dashboardObj: any;

  const DashboardReducer = useSelector(
    (state: IRootState) => state.DashboardReducer
  );

  useEffect(() => {
    dispatch(getWidgets());
    // eslint-disable-next-line
  }, []);

  // To reset drag & drop when select date
  const RestorePanel = () => {
    dashboardObj.panels = restoreModel;
  };

  // To store dashboard data initially
  const created = () => {
    restoreModel = dashboardObj.serialize();
    restoreModel[0].content = () => getChart("Business on the Books");
    restoreModel[1].content = () => getChart("Key Business Metrics");
    restoreModel[2].content = () => getChart("Room Nights");
    restoreModel[3].content = () => getChart("Occupacy Statics");
    restoreModel[4].content = () => getChart("Business Mix");
    restoreModel[5].content = () => getChart("Room Type Statics");
    restoreModel[6].content = () => getChart("Booking Channel Mix");
    restoreModel[7].content = () => getChart("Geographic Origin of business");
    restoreModel[8].content = () => getChart("MTD RGI Performance");
    restoreModel[9].content = () => getChart("RGI YoY Variance");
  };

  const getChart = (chartType: any) => {
    switch (chartType) {
      case "Business on the Books":
        return (
          <Provider store={store}>
            <div className="template">
              <BOB />
            </div>
          </Provider>
        );
      case "Key Business Metrics":
        return (
          <Provider store={store}>
            <div className="template">
              <KeyBusinessMetrics />
            </div>
          </Provider>
        );
      case "Room Nights":
        return (
          <Provider store={store}>
            <div className="template">
              <PickupSinceYesterday />
            </div>
          </Provider>
        );
      case "Occupacy Statics":
        return (
          <Provider store={store}>
            <div className="template">
              <OccupencyStatitics />
            </div>
          </Provider>
        );
      case "Business Mix":
        return (
          <Provider store={store}>
            <div className="template">
              <BusinessMixComponent />
            </div>
          </Provider>
        );
      case "Room Type Statics":
        return (
          <Provider store={store}>
            <div className="template">
              <RoomTypeStatics />
            </div>
          </Provider>
        );
      case "Booking Channel Mix":
        return (
          <Provider store={store}>
            <div className="template">
              <BookingChannels />
            </div>
          </Provider>
        );
      case "Geographic Origin of business":
        return (
          <Provider store={store}>
            <div className="template">
              <GeoBusiness />
            </div>
          </Provider>
        );
      case "MTD RGI Performance":
        return (
          <Provider store={store}>
            <div className="template">
              <MTDPerformance key={"rgi"} />
            </div>
          </Provider>
        );
      case "RGI YoY Variance":
        return (
          <Provider store={store}>
            <div className="template">
              <RGIVariance />
            </div>
          </Provider>
        );

      default:
        return null;
    }
  };

  const { widgets, isLoading, isError } = DashboardReducer;

  return (
    <>
      <TopBar handleReset={RestorePanel} />
      <div className="animated fadeIn">
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) : widgets && widgets.length ? (
          <DashboardLayoutComponent
            id="defaultLayout"
            cellSpacing={cellSpacing}
            allowResizing={false}
            columns={4}
            mediaQuery={"max-width: 991px"}
            cellAspectRatio={100 / 100}
            created={created}
            ref={(scope: any) => {
              dashboardObj = scope;
            }}
          >
            <PanelsDirective>
              <PanelDirective
                sizeX={2}
                sizeY={1}
                row={0}
                col={0}
                minSizeY={1}
                content={() => getChart(widgets[0].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={0}
                col={2}
                content={() => getChart(widgets[1].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={1}
                row={1}
                col={0}
                content={() => getChart(widgets[2].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={1}
                row={1}
                col={2}
                content={() => getChart(widgets[3].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={2}
                col={0}
                content={() => getChart(widgets[4].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={2}
                col={2}
                content={() => getChart(widgets[5].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={1}
                row={3}
                col={0}
                content={() => getChart(widgets[6].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={1}
                row={3}
                col={2}
                content={() => getChart(widgets[7].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={0}
                content={() => getChart(widgets[8].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={1}
                sizeY={0}
                row={4}
                col={3}
                content={() => getChart(widgets[9].name)}
              ></PanelDirective>
            </PanelsDirective>
            {/* <DashboardWidget graphList={widgets} /> */}
          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default HomeComponent;
