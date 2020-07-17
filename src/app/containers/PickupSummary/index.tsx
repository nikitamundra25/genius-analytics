import React,{FunctionComponent,useEffect} from "react";
import DashboardWidget from "./Widget";
import {useSelector, useDispatch} from 'react-redux'
import TopBar from "./TopBar";
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { IRootState } from "../../../interfaces";
import { PickupSummaryRequest } from "../../../actions";
import "./index.scss";

const PickupSummary:FunctionComponent = () => {
  const cellSpacing = [5,10];

  const dispatch = useDispatch()
  const PickupReducer = useSelector((state:IRootState) => state.PickupReducer)
  
  useEffect(() => {
    dispatch(PickupSummaryRequest())
    // eslint-disable-next-line
  }, [])
  
  const {pickupSummaryList}= PickupReducer

  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
        {pickupSummaryList && pickupSummaryList.length ? (
      <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={false} columns={1} cellAspectRatio ={100/40}>
          <DashboardWidget graphList={pickupSummaryList} />
        </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default PickupSummary;
