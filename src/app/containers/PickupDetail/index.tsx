import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import TopBar from "../PickupSummary/TopBar";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { IRootState } from "../../../interfaces";
import { PickupDetailRequest } from "../../../actions";
import "./index.scss";

const PickupDetail: FunctionComponent = () => {
  const cellSpacing = [5, 10];
  let restoreModel: any = [];
  let dashboardObj: any;
  const dispatch = useDispatch();
  const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);

  useEffect(() => {
    dispatch(PickupDetailRequest());
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
  const { pickupDetailList } = PickupReducer;

  return (
    <>
      <TopBar handleReset={RestorePanel} />
      <div className="animated fadeIn">
        {pickupDetailList && pickupDetailList.length ? (
          <DashboardLayoutComponent
            id="defaultLayout"
            cellSpacing={cellSpacing}
            allowResizing={false}
            columns={6}
            cellAspectRatio={30 / 50}
            created={created}
            ref={(scope: any) => {
              dashboardObj = scope;
            }}
          >
            <DashboardWidget graphList={pickupDetailList} />
          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default PickupDetail;
