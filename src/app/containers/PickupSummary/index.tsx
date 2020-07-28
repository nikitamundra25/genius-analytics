import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import { useSelector, useDispatch } from "react-redux";
import TopBar from "./TopBar";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { IRootState } from "../../../interfaces";
import { PickupSummaryRequest } from "../../../actions";
import Loader from "../../components/Loader/Loader";
import "./index.scss";

const PickupSummary: FunctionComponent = () => {
  const cellSpacing = [5, 10];
  let restoreModel: any = [];
  let dashboardObj: any;
  const dispatch = useDispatch();
  const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);

  useEffect(() => {
    dispatch(PickupSummaryRequest());
    // eslint-disable-next-line
  }, []);

  // To reset drag & drop when select date
  const RestorePanel = () => {
    dashboardObj.panels = restoreModel;
  };

  // To store dashboard data initially
  const created = () => {
    restoreModel = dashboardObj.serialize();
  };

  const { pickupSummaryList,isLoading } = PickupReducer;

  return (
    <>
      <TopBar handleReset={RestorePanel} />
      <div className="animated fadeIn">
        { isLoading ? (
          <Loader />
        ) : pickupSummaryList && pickupSummaryList.length ? (
          <DashboardLayoutComponent
            id="defaultLayout"
            cellSpacing={cellSpacing}
            allowResizing={false}
            columns={1}
            cellAspectRatio={100 / 40}
            created={created}
            ref={(scope: any) => {
              dashboardObj = scope;
            }}
          >
            <DashboardWidget graphList={pickupSummaryList} />
          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default PickupSummary;
