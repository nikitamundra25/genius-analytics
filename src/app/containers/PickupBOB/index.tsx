import React ,{FunctionComponent,useEffect} from "react";
import DashboardWidget from "./Widget";
import TopBar from "../PickupSummary/TopBar";
import {useSelector, useDispatch} from 'react-redux'
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import { IRootState } from "../../../interfaces";
import { PickupDetailRequest } from "../../../actions";
import "./index.scss";

const PickupDetail:FunctionComponent = () => {
  const cellSpacing = [5,10];

  const dispatch = useDispatch()
  const PickupReducer = useSelector((state:IRootState) => state.PickupReducer)
  
  useEffect(() => {
    dispatch(PickupDetailRequest())
    // eslint-disable-next-line
  }, [])
  
  const {pickupDetailList}= PickupReducer

  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
        {pickupDetailList && pickupDetailList.length ? (
      <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} allowResizing={false} columns={6} cellAspectRatio ={30/50} >
          <DashboardWidget graphList={pickupDetailList} />
        </DashboardLayoutComponent>
        ) : null}
      </div>
    </>
  );
};

export default PickupDetail;
