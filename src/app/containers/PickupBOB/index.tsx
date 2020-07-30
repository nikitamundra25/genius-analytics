import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import TopBar from "../PickupSummary/TopBar";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { IRootState } from "../../../interfaces";
import { PickupDetailRequest } from "../../../actions";
import Loader from "../../components/Loader/Loader";
import '../PickupDetail/index.scss';
import { ErrorComponent } from "../../components/Error";

const PickupDetail: FunctionComponent = () => {
  const cellSpacing = [15, 30];
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

const { pickupDetailList ,isLoading,isError} = PickupReducer;

  return (
    <>
      <TopBar handleReset={RestorePanel}/>
      <div className="animated fadeIn">
      {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) :  pickupDetailList && pickupDetailList.length ? (
          <DashboardLayoutComponent
            id="defaultLayout"
            cellSpacing={cellSpacing}
            allowResizing={false}
            columns={6}
            cellAspectRatio={30 / 80}
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
