import React,{FunctionComponent,useEffect} from "react";
import DashboardMonthlyWidget from "./Widget";
import TopBar from "../Home/TopBar";
import {useSelector, useDispatch} from 'react-redux'
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { DashboardYearlyRequest } from "../../../actions";
import { IRootState } from "../../../interfaces";
import "./index.scss";

const DashboardYearly:FunctionComponent = () => {
  const cellSpacing = [5,10];
  const dispatch = useDispatch()
  const DashboardReducer = useSelector((state:IRootState) => state.DashboardReducer)
  
  useEffect(() => {
    dispatch(DashboardYearlyRequest())
    // eslint-disable-next-line
  }, [])
  
  const {dashboardYearlyList}= DashboardReducer

  return (
    <>
      <div className='animated fadeIn'>
        <TopBar />
        {dashboardYearlyList && dashboardYearlyList.length ? (
        <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={false} columns={6} cellAspectRatio ={50/80} >
          <DashboardMonthlyWidget graphList={dashboardYearlyList} />
         </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default DashboardYearly;
