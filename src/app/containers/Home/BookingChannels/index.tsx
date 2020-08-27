import React, {useEffect} from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import WidgetHeader from "../../../components/WidgetHeader";
import { requestBookingChannelData, requestBookingChannelFutureData, requestBookingChannelPastData } from "../../../../actions";
import { ErrorComponent } from "../../../components/Error";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";
import moment from "moment";
import { checkDateFormat } from "../../../../config";

const PieChartComponent = React.lazy(() =>
  import("../../../components/Charts/PieChart")
);


export default ({ graphdata = [], date }:any) => {
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

  const [setHeight, setsetHeight] = React.useState<string>("250px");

 useEffect(() => {
    const modalbtn: HTMLElement | null = document.getElementById(`booking-card`);
    if (modalbtn) {
      setTimeout(() => {
        const check = modalbtn.getBoundingClientRect();
        const getHeight =check.height;
        const setgraphHeight = getHeight - 75 ;
        //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
        setsetHeight(`${setgraphHeight}px`)
      }, 100);
      
    }
    // eslint-disable-next-line
  }, [data]);

  useEffect(() => {

    const resizeListener = () => {

      // // change width from the state object
      const modalbtn: HTMLElement | null = document.getElementById(
        `booking-card`
      );
     // console.log("modalbtn", modalbtn);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight =check.height;
          const setgraphHeight = getHeight - 75 ;
          //console.log("hello chart height on resize",check, getHeight, setgraphHeight);
          setsetHeight(`${setgraphHeight}px`)
        }, 100);
      }
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Card id="booking-card">
      <WidgetHeader title={"Booking Channel Mix"} activeToggle={"graph"}  showToggle={false} />
      <Card.Body>
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
            //height={"270px"}
            height={setHeight}
            data={data}
            chartSettings={{
              SeriesDirective: {
                explode: true,
                explodeAll: true,
                explodeOffset: "5%",
                explodeIndex: 0,
                radius: "70%",
                palettes: ["#4b90d1", "#f67b2b", "#a5a5a5", "#ffc60a",  "#9bbb58",],
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
