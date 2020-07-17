import React ,{FunctionComponent,useEffect} from "react";
import DashboardWidget from "./Widget";
import TopBar from "./TopBar";
import {useSelector, useDispatch} from 'react-redux'
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { IRootState } from "../../../interfaces";
import { PickupSummaryRequest } from "../../../actions";
import "./index.scss";

const PickupDetail:FunctionComponent = () => {
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
      <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={false} columns={6} cellAspectRatio ={30/50} >
          <DashboardWidget graphList={pickupSummaryList} />
        </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default PickupDetail;
