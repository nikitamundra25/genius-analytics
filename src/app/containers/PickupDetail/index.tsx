import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import TopBar from "../PickupSummary/TopBar";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../../interfaces";
import { PickupDetailRequest } from "../../../actions";
import Loader from "../../components/Loader/Loader";
import "./index.scss";
import { ErrorComponent } from "../../components/Error";

const PickupDetail: FunctionComponent = () => {
  const dispatch = useDispatch();
  const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);

  useEffect(() => {
    dispatch(PickupDetailRequest());
    // eslint-disable-next-line
  }, []);

  const { pickupDetailList ,isLoading,isError} = PickupReducer;

  return (
    <>
      <TopBar  />
      <div className="animated fadeIn">
      {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) :  pickupDetailList && pickupDetailList.length ? (
            <DashboardWidget graphList={pickupDetailList} />
        ) : null}
      </div>
    </>
  );
};

export default PickupDetail;
