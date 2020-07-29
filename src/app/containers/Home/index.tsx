import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import TopBar from "./TopBar";
import { useSelector, useDispatch } from "react-redux";
import {  getWidgets } from "../../../actions";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { IRootState } from "../../../interfaces";
import Loader from "../../components/Loader/Loader";
import "./index.scss";
import { ErrorComponent } from "../../components/Error";

// export class Default extends SampleBase {
const HomeComponent: FunctionComponent = () => {
  const cellSpacing = [15, 30];
  const dispatch = useDispatch();
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
  };

  const { widgets, isLoading, isError } = DashboardReducer;

  return (
    <>
      <TopBar handleReset={RestorePanel} />
      <div className='animated fadeIn'>
        {isLoading ? (
          <Loader /> 
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) : widgets && widgets.length ? (
         
          <DashboardLayoutComponent
            id='defaultLayout'
            cellSpacing={cellSpacing}
            allowResizing={false}
            columns={4}
          
            cellAspectRatio={100 / 110}
            created={created}
            ref={(scope: any) => {
              dashboardObj = scope;
            }}>
            <DashboardWidget graphList={widgets} />
          </DashboardLayoutComponent>
         
        ) : null}
      </div>
    </>
  );
};

export default HomeComponent;
