import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import TopBar from "./TopBar";
import "./index.scss";
import { generateArrayOfMonths } from "../../../helper";
import moment from "moment";
import { IArrayMonthProps } from "../../../interfaces";

const PickupSummary: FunctionComponent = () => {
  // const dispatch = useDispatch();
  const [pickupList, setpickupList] = React.useState<IArrayMonthProps | any>([]);
  const [date, setdate] = React.useState<Date>(new Date());

  // const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);

  useEffect(() => {
    // dispatch(PickupSummaryRequest());
    let date: Date | any = moment(new Date()).subtract(1, "days");
    let dataList : IArrayMonthProps  = generateArrayOfMonths(date, 17);
    setpickupList(dataList);
    // eslint-disable-next-line
  }, []);

  const handleDate = (date: Date) => {
    let temp = generateArrayOfMonths(date, 17);
    setdate(date);
    setpickupList(temp);
  };

  // const { pickupSummaryList, isPickupLoading, isPickupError } = PickupReducer;

  return (
    <>
      <TopBar handleDate={handleDate} />
      <div className="animated fadeIn">
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
