import React , { useEffect} from "react";
// import data from "./datasource.json";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../interfaces";
import { WidgetLoader } from "../../../components/Loader/WidgetLoader";

import { ErrorComponent } from "../../../components/Error";
import { requestGeographicOriginData, requestGeographicOriginFutureData, requestGeographicOriginPastData } from "../../../../actions";
import moment from "moment";
import { checkDateFormat } from "../../../../config";
const NestedDoughnutComponent = React.lazy(()=> import("../../../components/Charts/NestedDoughnutChart") )



const BookingDoughnut  =  ({ date }:Date|any) => {
  const [setHeight, setsetHeight] = React.useState<string>("190px");
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector(
    (state: IRootState) => state.BookingChannelMonthlyReducer
  );
 

 

  useEffect(() => {

    let selectedDate = moment(date).format(checkDateFormat);
    // const selectedDate: any = new Date(date);
    let currentDate = moment(new Date()).format(checkDateFormat);
    if (selectedDate > currentDate) {
      dispatch(requestGeographicOriginFutureData());
    } else if (selectedDate < currentDate) {
      dispatch(requestGeographicOriginPastData());
    } else if (selectedDate === currentDate) {
      dispatch(requestGeographicOriginData());
    }

    // eslint-disable-next-line
  }, [date]);

 

  useEffect(() => {
    const nchartid: HTMLElement | null = document.getElementById(`nested-chart`);
    if (nchartid) {
      setTimeout(() => {
        const check = nchartid.getBoundingClientRect();
        const getHeight = check.height;
        const setgraphHeight = getHeight - 50;
        //console.log("hello chart height on load",check, getHeight, setgraphHeight);
        if (setgraphHeight >= 0) {
          setsetHeight(`${setgraphHeight}px`);
        }
      }, 100);
    }
    
  }, [data]);

  useEffect(() => {
    const resizeListener = () => {
  
      const modalbtn: HTMLElement | null = document.getElementById(`nested-chart`);

      if (modalbtn) {
        setTimeout(() => {
          const check = modalbtn.getBoundingClientRect();
          const getHeight = check.height;
          const setgraphHeight = getHeight - 50;
         // console.log("hello chart height on resize",check, getHeight, setgraphHeight);
          if (setgraphHeight >= 0) {
            setsetHeight(`${setgraphHeight}px`);
          }
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
  }, [data]);
 

  return (
    <>

        {isLoading ? (
            <WidgetLoader />
          ) : isError ? (
            <ErrorComponent
              message={"An error occured while fetching details "}
            />
          ) : (
            <div className="d-flex h-100"  id="nested-chart" style={{ "display": "flex !important" }}  >
            <React.Suspense fallback={<div className="card-loader"><WidgetLoader /></div>}>
              
              
                <NestedDoughnutComponent setHeight={setHeight}/>
              
            </React.Suspense>
            </div>
            )}

    </>
  );
};
export default BookingDoughnut;
