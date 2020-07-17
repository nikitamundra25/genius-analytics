import React,{FunctionComponent,useEffect} from "react";
// import graphStats from "./GraphStats.json";
import DashboardMonthlyWidget from "./Widget";
import TopBar from "../Home/TopBar";
import {useSelector, useDispatch} from 'react-redux'
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { DashboardMonthlyRequest } from "../../../actions";
import { IRootState } from "../../../interfaces";
import "../Home/index.scss";

const DashboardMonthly:FunctionComponent = () => {
  // const { graphCard } = graphStats;
  const cellSpacing = [5,10];

  const dispatch = useDispatch()
  const DashboardReducer = useSelector((state:IRootState) => state.DashboardReducer)
  
  useEffect(() => {
    dispatch(DashboardMonthlyRequest())
    // eslint-disable-next-line
  }, [])
  
  const {dashboardMonthlyList}= DashboardReducer

  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
        {dashboardMonthlyList && dashboardMonthlyList.length ? (
      <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={false} columns={6} cellAspectRatio ={50/70}>
          <DashboardMonthlyWidget graphList={dashboardMonthlyList} />
        </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default DashboardMonthly;
