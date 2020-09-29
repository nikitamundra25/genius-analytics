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

let date = new Date()
// export class Default extends SampleBase {
const HomeComponent: FunctionComponent = () => {
  // const [date, setdate] = React.useState<Date>(new Date());
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
  const RestorePanel = (date:any) => {
    // date = date
    dashboardObj.panels = restoreModel;
  };

  // To store dashboard data initially
  const created = () => {
    restoreModel = dashboardObj.serialize();
    restoreModel[0].content = () => getChart("Business on the Books");
    restoreModel[0].header =  `<div class="panel-title">Business on the Books</div>`
    restoreModel[1].content = () => getChart("Key Business Metrics");
    restoreModel[2].content = () => getChart("Room Nights");
    restoreModel[2].header=`<div class="panel-title">Pick up Since Yesterday</div>`;
    restoreModel[3].content = () => getChart("Occupacy Statics");
    //restoreModel[3].header=`<div class="panel-title">Occupancy Statistics</div>`;
    restoreModel[4].content = () => getChart("Business Mix");
    restoreModel[4].header=`<div class="panel-title">Business Mix</div>`;
    restoreModel[5].content = () => getChart("Room Type Statics");
    //restoreModel[5].header=`<div class="panel-title">Room Type Statistics</div>`;

    restoreModel[6].content = () => getChart("Booking Channel Mix");
    restoreModel[6].header=`<div class="panel-title">Booking Channel Mix</div>`;

    restoreModel[7].content = () => getChart("Geographic Origin of business");
    restoreModel[7].header=`<div class="panel-title">Geographic Origin of Business</div>`;

    restoreModel[8].content = () => getChart("MTD RGI Performance");
    restoreModel[8].header=`<div class="panel-title">MTD RGI Performance</div>`;

    restoreModel[9].content = () => getChart("RGI YoY Variance");
    restoreModel[9].header=`<div class="panel-title">RGI YoY Variance</div>`;

  };

  const getChart = (chartType: any) => {
    switch (chartType) {
      case "Business on the Books":
        return (
          <Provider store={store}>
            <div className="template">
              <BOB  />
            </div>
          </Provider>
        );
      case "Key Business Metrics":
        return (
          <Provider store={store}>
            <div className="template">
              <KeyBusinessMetrics date={date} />
            </div>
          </Provider>
        );
      case "Room Nights":
        return (
          <Provider store={store}>
            <div className="template">
              <PickupSinceYesterday date={date}/>
            </div>
          </Provider>
        );
      case "Occupacy Statics":
        return (
          <Provider store={store}>
            <div className="template">
              <OccupencyStatitics date={date}/>
            </div>
          </Provider>
        );
      case "Business Mix":
        return (
          <Provider store={store}>
            <div className="template">
              <BusinessMixComponent date={date}/>
            </div>
          </Provider>
        );
      case "Room Type Statics":
        return (
          <Provider store={store}>
            <div className="template">
              <RoomTypeStatics date={date}/>
            </div>
          </Provider>
        );
      case "Booking Channel Mix":
        return (
          <Provider store={store}>
            <div className="template">
              <BookingChannels date={date}/>
            </div>
          </Provider>
        );
      case "Geographic Origin of business":
        return (
          <Provider store={store}>
            <div className="template">
              <GeoBusiness date={date}/>
            </div>
          </Provider>
        );
      case "MTD RGI Performance":
        return (
          <Provider store={store}>
            <div className="template">
              <MTDPerformance key={"rgi"} date={date}/>
            </div>
          </Provider>
        );
      case "RGI YoY Variance":
        return (
          <Provider store={store}>
            <div className="template">
              <RGIVariance date={date}/>
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
            allowDragging={true}
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
                // minSizeY={1}
                header={`<div class="panel-title">${widgets[0].name}</div>`}
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
                header={`<div class="panel-title">Pick up Since Yesterday</div>`}
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
                header={`<div class="panel-title">${widgets[4].name}</div>`}
                content={() => getChart(widgets[4].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={0}
                row={2}
                col={2}
               // header={`<div class="panel-title">Room Type Statistics</div>`}
                content={() => getChart(widgets[5].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={1}
                row={3}
                col={0}
                header={`<div class="panel-title">${widgets[6].name}</div>`}
                content={() => getChart(widgets[6].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={2}
                sizeY={1}
                row={3}
                col={2}
                header={`<div class="panel-title">Geographic Origin of Business</div>`}
                content={() => getChart(widgets[7].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={3}
                sizeY={0}
                row={4}
                col={0}
                header={`<div class="panel-title">${widgets[8].name}</div>`}
                content={() => getChart(widgets[8].name)}
              ></PanelDirective>
              <PanelDirective
                sizeX={1}
                sizeY={0}
                row={4}
                col={3}
                header={`<div class="panel-title">${widgets[9].name}</div>`}
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
