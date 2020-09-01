import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
// import { useSelector, useDispatch } from "react-redux";
import TopBar from "./TopBar";
// import { IRootState } from "../../../interfaces";
// import { PickupSummaryRequest } from "../../../actions";
// import Loader from "../../components/Loader/Loader";
import "./index.scss";
// import { ErrorComponent } from "../../components/Error";
import { generateArrayOfMonths } from "../../../helper";
import moment from "moment";

const PickupSummary: FunctionComponent = () => {
  // const dispatch = useDispatch();
  const [pickupList, setpickupList] = React.useState([]);
  const [date, setdate] = React.useState<Date>(new Date());

  // const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);

  useEffect(() => {
    // dispatch(PickupSummaryRequest());
    let date: Date|any = moment(new Date()).subtract(1, "days")
    let temp = generateArrayOfMonths(date);
    setpickupList(temp);
    // eslint-disable-next-line
  }, []);

  const handleDate = (date:Date)=>{
    let temp = generateArrayOfMonths(date)
    setdate(date)
    setpickupList(temp)
    }

    
  // const { pickupSummaryList, isPickupLoading, isPickupError } = PickupReducer;

  return (
    <>
      <TopBar handleDate={handleDate} />
      <div className='animated fadeIn'>
        {/* {isPickupLoading ? (
          <Loader />
        ) : isPickupError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          /> 
        ) : */}
        {pickupList && pickupList.length ? (
          <DashboardWidget graphList={pickupList} date={date} />
        ) : null}
      </div>
    </>
  );
};

export default PickupSummary;
