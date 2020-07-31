import React, { FunctionComponent, useEffect } from "react";
import DashboardMonthlyWidget from "./Widget";
import TopBar from "../Home/TopBar";
import { useSelector, useDispatch } from "react-redux";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { DashboardYearlyRequest } from "../../../actions";
import { IRootState } from "../../../interfaces";
import "./index.scss";
import Loader from "../../components/Loader/Loader";
import { ErrorComponent } from "../../components/Error";


const DashboardYearly: FunctionComponent = () => {
  const cellSpacing = [15, 20];
  let restoreModel: any = [];
  let dashboardObj: any;
  const dispatch = useDispatch();
  const DashboardReducer = useSelector(
    (state: IRootState) => state.DashboardReducer
  );

  useEffect(() => {
    dispatch(DashboardYearlyRequest());
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

  const { dashboardYearlyList , isYearlyLoading,isYearlyError} = DashboardReducer;

  return (
    <>
        <TopBar handleReset={RestorePanel} />
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
            columns={6}
            cellAspectRatio={50 / 75}
            created={created}
            ref={(scope: any) => {
              dashboardObj = scope;
            }}
          >
            <DashboardMonthlyWidget graphList={dashboardYearlyList} />
          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default DashboardYearly;
