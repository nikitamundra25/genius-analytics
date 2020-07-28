import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import TopBar from "./TopBar";
import { useSelector, useDispatch } from "react-redux";
import { DashboardMainRequest } from "../../../actions";
import { DashboardLayoutComponent } from "@syncfusion/ej2-react-layouts";
import { IRootState } from "../../../interfaces";
import Loader from "../../components/Loader/Loader";
import "./index.scss";

// export class Default extends SampleBase {
const HomeComponent: FunctionComponent = () => {
  const cellSpacing = [5, 10];
  const dispatch = useDispatch();
  let restoreModel: any = [];
  let dashboardObj: any;

  const DashboardReducer = useSelector(
    (state: IRootState) => state.DashboardReducer
  );
  useEffect(() => {
    dispatch(DashboardMainRequest());
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

  const { dashboardMainList, isLoading } = DashboardReducer;

  return (
    <>
      <TopBar handleReset={RestorePanel} />
      <div className='animated fadeIn'>
        {isLoading ? (
          <Loader /> 
        ) : dashboardMainList && dashboardMainList.length ? (
          <DashboardLayoutComponent
            id='defaultLayout'
            cellSpacing={cellSpacing}
            allowResizing={false}
            columns={4}
            cellAspectRatio={120 / 140}
            created={created}
            ref={(scope: any) => {
              dashboardObj = scope;
            }}>
            <DashboardWidget graphList={dashboardMainList} />
          </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default HomeComponent;
