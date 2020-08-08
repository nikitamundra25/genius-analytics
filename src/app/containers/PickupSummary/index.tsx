import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import { useSelector, useDispatch } from "react-redux";
import TopBar from "./TopBar";
import { IRootState } from "../../../interfaces";
import { PickupSummaryRequest } from "../../../actions";
import Loader from "../../components/Loader/Loader";
import "./index.scss";
import { ErrorComponent } from "../../components/Error";

const PickupSummary: FunctionComponent = () => {
  const dispatch = useDispatch();
  const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);

  useEffect(() => {
    dispatch(PickupSummaryRequest());
    // eslint-disable-next-line
  }, []);


  const { pickupSummaryList, isPickupLoading, isPickupError } = PickupReducer;

  return (
    <>
      <TopBar />
      <div className='animated fadeIn'>
        {isPickupLoading ? (
          <Loader />
        ) : isPickupError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) : pickupSummaryList && pickupSummaryList.length ? (
         
            <DashboardWidget graphList={pickupSummaryList} />
          
        ) : null}
      </div>
    </>
  );
};

export default PickupSummary;
