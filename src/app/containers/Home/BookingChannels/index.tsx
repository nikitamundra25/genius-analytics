import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { requestBookingChannelData, requestBookingChannelFutureData, requestBookingChannelPastData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);


const BookingChannels = ({date}:Date|any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BookingChannelReducer
  );

  // useEffect(() => {
  //   dispatch(requestBookingChannelData());
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestBookingChannelFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestBookingChannelPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestBookingChannelData());
    }
  
    // eslint-disable-next-line
  }, [date]);

  return (

    <>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
          <PieChartComponent
            id={"booking-mix"}
            data={data}
            chartSettings={{
              SeriesDirective: {
                explode: true,
                explodeAll: true,
                explodeOffset: "5%",
                explodeIndex: 0,
                radius: "98%",
                palettes: ["#4b90d1", "#f67b2b", "#a5a5a5", "#ffc60a",  "#9bbb58",],
              },
              chartComponent: {
                enableSmartLabels: true,
                enableAnimation: false,
                center: { x: "50%", y: "50%" },
              },
              dataLabel: {
                position: 'Inside'
              }
            }}
          />
           </React.Suspense>
          )}
        </>
  );
};
export default BookingChannels;
