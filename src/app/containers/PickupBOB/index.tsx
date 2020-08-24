import React, { FunctionComponent, useEffect } from "react";
import DashboardWidget from "./Widget";
import TopBar from "../PickupSummary/TopBar";
import { generateArrayofBOBData } from "../../../helper";
import '../PickupDetail/index.scss';

const PickupDetail: FunctionComponent = () => {

  // const dispatch = useDispatch();
  // const PickupReducer = useSelector((state: IRootState) => state.PickupReducer);
  const [pickupList, setpickupList] = React.useState([]);

  useEffect(() => {
    // dispatch(PickupDetailRequest());
    let temp = generateArrayofBOBData(new Date())
    setpickupList(temp)
    // eslint-disable-next-line
  }, []);

  const handleDate = (date:Date)=>{
    let temp = generateArrayofBOBData(date)
    setpickupList(temp)
    }

// const { pickupDetailList ,isLoading,isError} = PickupReducer;

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
        { pickupList && pickupList.length ? (
         
            <DashboardWidget graphList={pickupList} />
         
        ) : null}
      </div>
    </>
  );
};

export default PickupDetail;
