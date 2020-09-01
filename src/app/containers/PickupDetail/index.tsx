import React, { FunctionComponent, useEffect } from "react";
import PickupDetailWidget from "./Widget";
import TopBar from "../PickupSummary/TopBar";
import "./index.scss";
import { generateArrayOfMonths } from "../../../helper";
import moment from "moment";

const PickupDetail: FunctionComponent = () => {
  // const dispatch = useDispatch();
  // const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);
  const [pickupList, setpickupList] = React.useState([]);

  useEffect(() => {
    // dispatch(PickupDetailRequest());
    let date: Date|any = moment(new Date()).subtract(1, "days")
    let temp = generateArrayOfMonths(date)
    setpickupList(temp)
    // eslint-disable-next-line
  }, []);

  // const { pickupDetailList ,isLoading,isError} = PickupReducer;

 const handleDate = (date:Date)=>{
  let temp = generateArrayOfMonths(date)
  setpickupList(temp)
  }

  return (
    <>
      <TopBar handleDate={handleDate} />
      <div className="animated fadeIn">
      {/* {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorComponent
            message={"An error occured while fetching dashboard details"}
          />
        ) :  */}
         {pickupList && pickupList.length ? (
            <PickupDetailWidget graphList={pickupList} />
        ) : null}
      </div>
    </>
  );
};

export default PickupDetail;
