import React, {useEffect} from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import WidgetHeader from "../../../components/WidgetHeader";
import { requestBookingChannelData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import Loader from "../../../components/Loader/Loader";
const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);


export default ({ graphdata = [] }:any) => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BookingChannelReducer
  );
  useEffect(() => {
    dispatch(requestBookingChannelData());
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <WidgetHeader title={"Booking Channel Mix"} activeToggle={"graph"} />
      <Card.Body>
      {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <React.Suspense fallback={<div className="card-loader"><Loader /></div>}>
          <PieChartComponent
            id={"booking-mix"}
            height={"250px"}
            data={data}
            chartSettings={{
              SeriesDirective: {
                explode: true,
                explodeAll: true,
                explodeOffset: "5%",
                explodeIndex: 0,
                radius: "70%",
                palettes: ["#4b90d1", "#f67b2b", "#a5a5a5", "#ffc60a"],
              },
              chartComponent: {
                enableSmartLabels: true,
                enableAnimation: false,
                center: { x: "50%", y: "50%" },
              },
            }}
          />
           </React.Suspense>
          )}
        
      </Card.Body>
    </Card>
  );
};
